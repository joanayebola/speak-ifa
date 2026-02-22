import { NextResponse } from 'next/server';
import Mailjet from 'node-mailjet';

// Use apiConnect for node-mailjet v6
const mailjet = Mailjet.apiConnect(
    process.env.MAILJET_API_KEY || '',
    process.env.MAILJET_API_SECRET || ''
);

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
        }

        const listId = process.env.MAILJET_LIST_ID;
        if (!listId) {
            return NextResponse.json({ error: 'Mailjet List ID is not configured' }, { status: 500 });
        }

        // The correct pattern for adding a NEW or existing contact to a list:
        // POST /contactslist/{list_id}/managecontact
        const result = await mailjet
            .post('contactslist', { version: 'v3' })
            .id(listId)
            .action('managecontact')
            .request({
                Email: email,
                Action: 'addforce'
            });

        return NextResponse.json({ message: 'Subscribed successfully', status: 'success' }, { status: 200 });
    } catch (error: any) {
        console.error('Mailjet error:', error);

        // Check if user is already in list (Mailjet error 400 with specific message sometimes)
        if (error.statusCode === 400 && error.message.includes('already exists')) {
            return NextResponse.json({ message: 'You are already subscribed!', status: 'success' }, { status: 200 });
        }

        return NextResponse.json(
            { error: 'Subscription failed. Please try again later.' },
            { status: error.statusCode || 500 }
        );
    }
}
