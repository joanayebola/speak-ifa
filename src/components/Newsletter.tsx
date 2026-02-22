"use client";

import { useState } from "react";
import { Mail, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setMessage(data.message || "Thank you for joining the lineage!");
                setEmail("");
            } else {
                setStatus("error");
                setMessage(data.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            setMessage("Network error. Please check your connection.");
        }
    };

    return (
        <section className="max-w-4xl mx-auto my-32 px-6">
            <div className="glass-card rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />

                <div className="relative z-10">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto mb-8">
                        {status === "success" ? <CheckCircle2 size={32} /> : <Mail size={32} />}
                    </div>

                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 italic">
                        {status === "success" ? "You're in the Loop." : "Align with the Oracle."}
                    </h2>

                    <p className="text-foreground/60 max-w-lg mx-auto mb-10 text-lg">
                        {status === "success"
                            ? message
                            : "Don't miss a word. Get decolonized wisdom delivered to your Orí weekly."}
                    </p>

                    {status !== "success" && (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-grow px-8 py-4 rounded-full bg-background border border-accent/10 focus:outline-none focus:border-accent/40 transition-colors text-sm"
                                required
                                disabled={status === "loading"}
                            />
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="px-8 py-4 bg-accent text-background font-bold rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-transform active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
                            >
                                {status === "loading" ? (
                                    <Loader2 className="animate-spin" size={18} />
                                ) : (
                                    <>Subscribe <ArrowRight size={18} /></>
                                )}
                            </button>
                        </form>
                    )}

                    {status === "error" && (
                        <p className="mt-4 text-xs font-bold text-red-400 uppercase tracking-widest">
                            {message}
                        </p>
                    )}

                    <p className="mt-8 text-[10px] uppercase font-bold tracking-widest text-foreground/30">
                        No spam. Just pure Aṣẹ.
                    </p>
                </div>
            </div>
        </section>
    );
}
