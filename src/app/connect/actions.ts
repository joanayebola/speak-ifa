"use server";

import { Resend } from 'resend';
import { z } from 'zod';

// Define the validation schema for the contact form
const ContactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Invalid email address."),
    inquiry: z.string().min(1, "Please select an inquiry type."),
    message: z.string().min(10, "Message must be at least 10 characters."),
    honeypot: z.string().optional(), // Hidden field for bot protection
});

export type ContactFormState = {
    success?: boolean;
    error?: string;
    fieldErrors?: Record<string, string[]>;
    data?: {
        name?: string;
        email?: string;
        inquiry?: string;
        message?: string;
    };
};

/**
 * Server Action to handle contact form submissions.
 * Includes Honeypot protection, Zod validation, and Resend integration.
 */
export async function sendContactMessage(prevState: any, formData: FormData): Promise<ContactFormState> {
    // 1. Honeypot Check
    const hpo = formData.get('honeypot') as string;
    if (hpo && hpo.length > 0) {
        console.warn("Honeypot triggered. Likely a bot.");
        // Return success to confuse the bot, but don't actually do anything
        return { success: true };
    }

    // 2. Extract and Validate Data
    const rawData = {
        name: formData.get('name'),
        email: formData.get('email'),
        inquiry: formData.get('inquiry'),
        message: formData.get('message'),
        honeypot: formData.get('honeypot'),
    };

    const validatedFields = ContactFormSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            fieldErrors: validatedFields.error.flatten().fieldErrors,
            data: {
                name: rawData.name as string,
                email: rawData.email as string,
                inquiry: rawData.inquiry as string,
                message: rawData.message as string,
            }
        };
    }

    const { name, email, inquiry, message } = validatedFields.data;

    // 3. Rate Limiting (Explanation/Boilerplate)
    // In a production environment, you should use a Redis or database-backed rate limiter (like Upstash).
    // For now, we can implement a basic server-side check or rely on Resend's internal spam filters.
    // Note: Since this is a server action, client-side IP can be accessed via headers if needed.

    try {
        // 4. Send Email via Resend
        const apiKey = process.env.RESEND_API_KEY;
        const destination = process.env.CONTACT_DESTINATION_EMAIL;

        if (!apiKey || !destination) {
            console.error('Resend configuration missing:', { apiKey: !!apiKey, destination: !!destination });
            return { error: "Email service is not properly configured on the server." };
        }

        const resend = new Resend(apiKey);

        const { data, error } = await resend.emails.send({
            from: 'The Yorùbá Way <onboarding@resend.dev>', // Change to your verified domain in production
            to: [destination],
            subject: `New Inquiry: ${inquiry} from ${name}`,
            replyTo: email,
            html: `
        <div style="font-family: serif; padding: 20px; border: 1px solid #c5a87e; border-radius: 10px;">
          <h2 style="color: #c5a87e; font-style: italic;">New Contact Message Received</h2>
          <p><strong>Name / Lineage:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Inquiry Type:</strong> ${inquiry}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
        });

        if (error) {
            console.error("Resend delivery error:", error);
            return { error: "Failed to deliver message. Please try again later." };
        }

        return { success: true };
    } catch (err: any) {
        console.error("Server Action Error:", err);
        return { error: "An unexpected error occurred. Please try again." };
    }
}
