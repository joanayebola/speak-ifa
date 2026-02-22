import { ShieldAlert, Lightbulb } from "lucide-react";

interface MythBusterProps {
    myth: string;
    truth: string;
}

export default function MythBuster({ myth, truth }: MythBusterProps) {
    return (
        <div className="glass-card rounded-3xl p-8 my-12 border-l-4 border-l-accent overflow-hidden relative">
            <div className="absolute -right-8 -top-8 text-accent opacity-5 rotate-12">
                <ShieldAlert size={160} />
            </div>

            <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-lg bg-red-500/10 text-red-500">
                        <ShieldAlert size={20} />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-foreground/40 mb-1">
                            Colonial Lens (The Myth)
                        </h4>
                        <p className="text-lg font-serif">
                            "{myth}"
                        </p>
                    </div>
                </div>

                <div className="w-12 h-[1px] bg-accent/20 ml-11" />

                <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 rounded-lg bg-accent/10 text-accent">
                        <Lightbulb size={20} />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-1">
                            Indigenous Truth (The Aṣẹ)
                        </h4>
                        <p className="text-lg font-serif italic text-foreground/80 leading-relaxed">
                            {truth}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
