"use client";

import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { Info, Volume2 } from "lucide-react";
import { GLOSSARY_TERMS } from "@/data/mock-data";
import { motion, AnimatePresence } from "framer-motion";

interface TooltipProps {
    term: string;
    children?: React.ReactNode;
}

export default function Tooltip({ term, children }: TooltipProps) {
    const [open, setOpen] = useState(false);
    const termData = GLOSSARY_TERMS.find(
        (t) => t.term.toLowerCase() === term.toLowerCase()
    );

    if (!termData) return <span className="font-bold underline decoration-accent/30 decoration-dotted">{children || term}</span>;

    return (
        <Popover.Root open={open} onOpenChange={setOpen}>
            <Popover.Trigger asChild>
                <span
                    className="font-bold border-b-2 border-accent/40 cursor-help hover:text-accent transition-colors inline-block"
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                >
                    {children || term}
                </span>
            </Popover.Trigger>

            <Popover.Portal>
                <Popover.Content
                    className="z-50 w-72"
                    sideOffset={10}
                    onMouseEnter={() => setOpen(true)}
                    onMouseLeave={() => setOpen(false)}
                >
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="glass-card bg-background/98 border border-accent/20 p-6 rounded-2xl shadow-2xl relative"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <strong className="font-serif font-bold text-accent text-lg">
                                        {termData.term}
                                    </strong>
                                    <div className="p-1.5 rounded-full bg-accent/10 text-accent">
                                        <Info size={14} />
                                    </div>
                                </div>

                                <p className="text-sm text-foreground/80 leading-relaxed mb-4 font-normal">
                                    {termData.definition}
                                </p>

                                {termData.pronunciation && (
                                    <div className="flex items-center gap-2 pt-3 border-t border-accent/10">
                                        <span className="text-[10px] uppercase font-bold tracking-widest text-foreground/40">
                                            Vibration:
                                        </span>
                                        <span className="text-xs italic flex items-center gap-1 text-foreground/70">
                                            {termData.pronunciation}
                                            <Volume2 size={12} className="text-accent" />
                                        </span>
                                    </div>
                                )}

                                <Popover.Arrow className="fill-background/95 border-accent/20" width={16} height={8} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
}
