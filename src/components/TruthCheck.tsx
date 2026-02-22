import { ShieldCheck, XCircle } from "lucide-react";

interface TruthCheckProps {
    colonial: string;
    indigenous: string;
}

export default function TruthCheck({ colonial, indigenous }: TruthCheckProps) {
    return (
        <div className="my-12 overflow-hidden rounded-3xl border border-accent/10 bg-accent/5">
            <div className="bg-accent/10 px-8 py-4 border-b border-accent/20 flex items-center gap-2">
                <ShieldCheck size={18} className="text-accent" />
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent">TruthCheck Oracle</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 border-b md:border-b-0 md:border-r border-accent/10">
                    <div className="flex items-center gap-2 mb-4 text-foreground/40 text-[10px] uppercase font-bold tracking-widest">
                        <XCircle size={14} /> The Colonial Version
                    </div>
                    <p className="text-sm font-serif italic text-foreground/60 leading-relaxed">
                        "{colonial}"
                    </p>
                </div>
                <div className="p-8 bg-accent/[0.02]">
                    <div className="flex items-center gap-2 mb-4 text-accent text-[10px] uppercase font-bold tracking-widest">
                        <ShieldCheck size={14} /> The Indigenous Truth
                    </div>
                    <p className="text-sm font-serif font-bold text-foreground leading-relaxed">
                        {indigenous}
                    </p>
                </div>
            </div>
        </div>
    );
}
