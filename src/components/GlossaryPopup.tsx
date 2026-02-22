"use client";

import { useState } from "react";
import { GLOSSARY_TERMS } from "@/data/mock-data";
import { Info, Volume2 } from "lucide-react";

interface GlossaryPopupProps {
    term: string;
}

export default function GlossaryPopup({ term }: GlossaryPopupProps) {
    const [isVisible, setIsVisible] = useState(false);
    const termData = GLOSSARY_TERMS.find(
        (t) => t.term.toLowerCase() === term.toLowerCase()
    );

    if (!termData) return <span className="font-bold underline decoration-accent/30 decoration-dotted">{term}</span>;

    return (
        <span
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            <span className="font-bold border-b-2 border-accent/40 cursor-help hover:text-accent transition-colors">
                {term}
            </span>

            {isVisible && (
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 glass-card bg-background/98 border border-accent/20 p-6 rounded-2xl shadow-2xl z-50 animate-in fade-in slide-in-from-bottom-2 duration-200 block text-left">
                    <span className="flex items-center justify-between mb-3">
                        <strong className="font-serif font-bold text-accent text-lg block">
                            {termData.term}
                        </strong>
                        <span className="p-1.5 rounded-full bg-accent/10 text-accent flex">
                            <Info size={14} />
                        </span>
                    </span>

                    <span className="text-sm text-foreground/70 leading-relaxed mb-4 block whitespace-normal font-normal">
                        {termData.definition}
                    </span>

                    {termData.pronunciation && (
                        <span className="flex items-center gap-2 pt-3 border-t border-accent/10">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-foreground/40">
                                Pronunciation:
                            </span>
                            <span className="text-xs italic flex items-center gap-1">
                                {termData.pronunciation}
                                <Volume2 size={12} className="text-accent" />
                            </span>
                        </span>
                    )}

                    {/* Arrow */}
                    <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-background/80 block h-0 w-0" />
                </span>
            )}
        </span>
    );
}
