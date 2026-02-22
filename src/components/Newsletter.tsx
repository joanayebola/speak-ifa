import { Mail, ArrowRight } from "lucide-react";

export default function Newsletter() {
    return (
        <section className="max-w-4xl mx-auto my-32 px-6">
            <div className="glass-card rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />

                <div className="relative z-10">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto mb-8">
                        <Mail size={32} />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 italic">
                        Align with the Oracle.
                    </h2>

                    <p className="text-foreground/60 max-w-lg mx-auto mb-10 text-lg">
                        Don't miss a word. Get decolonized wisdom delivered to your Orí weekly.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-grow px-8 py-4 rounded-full bg-background border border-accent/10 focus:outline-none focus:border-accent/40 transition-colors text-sm"
                            required
                        />
                        <button
                            type="submit"
                            className="px-8 py-4 bg-accent text-background font-bold rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-transform active:scale-95"
                        >
                            Subscribe <ArrowRight size={18} />
                        </button>
                    </form>

                    <p className="mt-8 text-[10px] uppercase font-bold tracking-widest text-foreground/30">
                        No spam. Just pure Aṣẹ.
                    </p>
                </div>
            </div>
        </section>
    );
}
