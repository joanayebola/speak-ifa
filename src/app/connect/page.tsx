"use client";

import Navbar from "@/components/Navbar";
import { Mail, MessageSquare, Send, Globe, Star } from "lucide-react";

export default function ConnectPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <div className="pt-40 pb-20 px-6 lg:px-12 max-w-7xl mx-auto text-center">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent/10 border border-accent/20">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent">
                        At the Oríta
                    </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 italic">
                    Connect with the Lineage
                </h1>
                <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                    Connection in Yorùbá philosophy is not a transaction; it is a sacred alignment.
                    Whether you seek clarity, collaboration, or simply wish to honor the ancestors,
                    the path is open.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Side: Philosophy */}
                <div className="space-y-12">
                    <div className="glass-card p-10 rounded-[2.5rem] bg-accent/5 border-accent/10 relative overflow-hidden">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl opacity-50" />
                        <h2 className="text-3xl font-serif font-bold mb-6 italic">The Protocol of Engagement</h2>
                        <div className="space-y-6 text-foreground/70">
                            <p>
                                In the sacred archives of the <strong>Odù Ifá</strong>, every encounter is governed by <strong>Ìwà</strong> (character).
                                We do not communicate into a void; we communicate to manifest.
                            </p>
                            <p>
                                When you reach out, remember that your <strong>Orí</strong> (personal divinity) precedes you.
                                We prioritize inquiries that are grounded in respect for the lineage and a genuine
                                desire to unlearn the colonial shorthand.
                            </p>
                            <div className="pt-6 flex flex-wrap gap-4">
                                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent/60">
                                    <Star size={14} /> Ancient Wisdom
                                </span>
                                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent/60">
                                    <Globe size={14} /> Global Lineage
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <a href="mailto:lineage@speakifa.com" className="p-8 rounded-3xl bg-foreground/[0.02] border border-accent/5 hover:border-accent/20 transition-all group">
                            <Mail className="mb-4 text-accent/40 group-hover:text-accent transition-colors" size={24} />
                            <h3 className="font-serif font-bold mb-2">Electronic Mail</h3>
                            <p className="text-sm text-foreground/40">Direct inquiries to the archives.</p>
                        </a>
                        <a href="#" className="p-8 rounded-3xl bg-foreground/[0.02] border border-accent/5 hover:border-accent/20 transition-all group">
                            <MessageSquare className="mb-4 text-accent/40 group-hover:text-accent transition-colors" size={24} />
                            <h3 className="font-serif font-bold mb-2">The Oracle Feed</h3>
                            <p className="text-sm text-foreground/40">Real-time un-teachings on X.</p>
                        </a>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="glass-card p-10 rounded-[2.5rem] bg-foreground/[0.01] border-accent/10">
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 pl-4">Your Name / Lineage</label>
                                <input
                                    type="text"
                                    placeholder="Enter name..."
                                    className="w-full bg-background/50 border border-accent/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-accent/30 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 pl-4">Return Signal (Email)</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-background/50 border border-accent/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-accent/30 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 pl-4">The Inquiry</label>
                            <select className="w-full bg-background/50 border border-accent/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-accent/30 transition-colors appearance-none">
                                <option>General Guidance</option>
                                <option>Academic Collaboration</option>
                                <option>Spiritual Consultation</option>
                                <option>Correction of Metadata</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 pl-4">The Message</label>
                            <textarea
                                rows={6}
                                placeholder="State your intent with clarity..."
                                className="w-full bg-background/50 border border-accent/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-accent/30 transition-colors resize-none"
                            ></textarea>
                        </div>

                        <button className="w-full bg-accent text-background font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-xl shadow-accent/20">
                            <Send size={18} />
                            <span className="uppercase tracking-widest text-sm">Send Signal</span>
                        </button>
                    </form>
                </div>
            </div>

            <footer className="py-12 border-t border-accent/10 text-center">
                <p className="text-sm text-foreground/40 font-bold uppercase tracking-widest">
                    © 2026 Speak, Ifá | Reclaiming the Lineage
                </p>
            </footer>
        </main>
    );
}
