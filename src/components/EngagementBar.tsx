"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link2, Check } from "lucide-react";
import { XIcon } from "./icons/XIcon";
import { cn } from "@/lib/utils";

interface EngagementBarProps {
    slug: string;
}

export default function EngagementBar({ slug }: EngagementBarProps) {
    const [copied, setCopied] = useState(false);

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const shareX = () => {
        const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-auto px-4 flex flex-col items-center gap-4">
            <div className="glass-card bg-background/90 border border-accent/20 rounded-full p-1.5 flex items-center justify-center gap-2 shadow-2xl backdrop-blur-md">
                {/* Share Utility */}
                <div className="flex items-center gap-1">
                    <button
                        onClick={copyLink}
                        className="p-2.5 rounded-full hover:bg-accent/5 transition-colors text-foreground/60 hover:text-accent group relative"
                        title="Copy Link"
                    >
                        {copied ? <Check size={18} className="text-green-600" /> : <Link2 size={18} />}
                        <AnimatePresence>
                            {copied && (
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] py-1 px-2 rounded font-bold uppercase tracking-widest"
                                >
                                    Copied!
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>

                    <button
                        onClick={shareX}
                        className="p-2.5 rounded-full hover:bg-accent/5 transition-colors text-foreground/60 hover:text-accent"
                        title="Share on X"
                    >
                        <XIcon size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
