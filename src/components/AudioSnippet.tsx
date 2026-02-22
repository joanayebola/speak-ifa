"use client";

import { Volume2 } from "lucide-react";

interface AudioSnippetProps {
    word: string;
    audioUrl?: string; // Optional if we don't have real files yet
}

export default function AudioSnippet({ word, audioUrl }: AudioSnippetProps) {
    const playAudio = () => {
        if (audioUrl) {
            const audio = new Audio(audioUrl);
            audio.play();
        } else {
            console.log(`Playing pronunciation for: ${word}`);
            // Fallback: visual indicator of "playing"
        }
    };

    return (
        <button
            onClick={playAudio}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/5 border border-accent/10 text-accent hover:bg-accent/10 transition-all active:scale-95 group"
        >
            <span className="text-xs font-bold font-serif italic">{word}</span>
            <div className="p-1 rounded-full bg-accent text-background group-hover:scale-110 transition-transform">
                <Volume2 size={10} />
            </div>
        </button>
    );
}
