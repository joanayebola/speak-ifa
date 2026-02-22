import Navbar from "@/components/Navbar";
import Pillars from "@/components/Pillars";
import TruthsTable from "@/components/TruthsTable";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

export default function AboutPage() {
    return (
        <main>
            <Navbar />

            <div className="pt-40 pb-20 px-6 lg:px-12 max-w-5xl mx-auto">
                {/* Header Section */}
                <section className="mb-24 text-center">
                    <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-accent/10 border border-accent/20">
                        <span className="text-xs font-bold uppercase tracking-widest text-accent">
                            The Lineage
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight">
                        The Silence of the Source: <br />
                        <span className="text-accent italic">A Declaration of Independence.</span>
                    </h1>
                    <div className="relative max-w-3xl mx-auto py-12">
                        <Quote className="absolute -top-4 -left-8 text-accent/10 w-24 h-24 -z-10" />
                        <p className="text-xl md:text-2xl font-serif text-foreground/80 leading-relaxed italic">
                            "For centuries, Yorùbá cosmology has been whispered through a colonial filter.
                            It was translated by those who didn't understand it, 'sanitized' by those who feared it,
                            and parroted by those who sought to make it fit into a Western box."
                        </p>
                    </div>
                    <p className="text-lg text-foreground/60 max-w-3xl mx-auto mt-8 font-bold uppercase tracking-widest">
                        'The Yorùbá Way' is the moment we stop translating and start listening.
                    </p>
                </section>

                {/* The Mission Section */}
                <section className="mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="prose prose-lg prose-serif text-foreground/70">
                            <h2 className="text-3xl font-serif font-bold text-foreground mb-6 italic">Why 'The Yorùbá Way'?</h2>
                            <p>
                                <strong>The Un-Teaching:</strong> We aren't just learning; we are un-learning. We are stripping away the labels of "devil," "superstition," and "primitive" to reveal a sophisticated, mathematical, and ethical system of existence.
                            </p>
                            <p>
                                <strong>The Truth of the Odù:</strong> Every post is grounded in the Odù Ifá, the original blueprint of Yorùbá wisdom, not the Victorian-era interpretations that turned our Òrìṣà into caricatures.
                            </p>
                            <p>
                                <strong>Aṣẹ over Dogma:</strong> This isn't about blind faith. It’s about understanding the mechanics of the universe and how we align our Orí (destiny) with the natural world.
                            </p>
                        </div>
                        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl skew-y-3 transition-transform hover:skew-y-0 duration-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center p-12 text-center">
                                <p className="text-background font-serif text-3xl font-bold leading-tight">
                                    The Oracle is the original data, <br /> the lens is our only barrier.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pillars Section */}
                <section className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold mb-4 italic">The Pillars of the Oracle</h2>
                        <p className="text-foreground/60 max-w-xl mx-auto">Foundational principles that guide every word we speak and every truth we reclaim.</p>
                    </div>
                    <Pillars />
                </section>

                {/* The Master Shift Table */}
                <section className="mb-32">
                    <TruthsTable />
                </section>

                {/* The No-Parrot Clause */}
                <section className="glass-card p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />

                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 italic">The "No-Parrot" Clause</h2>
                    <div className="w-12 h-1 bg-accent mx-auto mb-10" />

                    <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-12">
                        Here, we don’t parrot. If a story feels like it was tweaked to sound like a Sunday school lesson, we question it.
                        If a deity has been stripped of their complexity to fit a gender binary or a 'good vs. evil' trope, we reclaim them.
                        We return to the source, even when the truth is <span className="text-accent font-bold italic">'bitter kola'</span>— sharp, waking, and real.
                    </p>

                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-background font-bold rounded-full transition-all hover:scale-105 hover:shadow-2xl hover:shadow-accent/40 active:scale-95"
                    >
                        Pull up a chair. The Oracle is open. <ArrowRight size={20} />
                    </Link>

                    <p className="mt-8 text-sm text-foreground/40 font-bold uppercase tracking-[0.2em]">
                        It's time to let the wisdom speak for itself.
                    </p>
                </section>
            </div>

            <footer className="py-12 border-t border-accent/10 text-center">
                <p className="text-sm text-foreground/40 font-bold uppercase tracking-widest">
                    © 2026 The Yorùbá Way | Reclaiming the Lineage
                </p>
            </footer>
        </main>
    );
}
