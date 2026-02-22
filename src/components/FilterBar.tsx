"use client";

import { useState } from "react";

const CATEGORIES = ["All", "Decolonizing", "Philosophy", "The Orí", "Cosmology"];

interface FilterBarProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export default function FilterBar({ activeCategory, onCategoryChange }: FilterBarProps) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 px-4">
            {CATEGORIES.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onCategoryChange(cat)}
                    className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${activeCategory === cat
                        ? "bg-accent text-background border-accent shadow-lg shadow-accent/20"
                        : "bg-background border-accent/10 text-foreground/40 hover:border-accent/30 hover:text-foreground"
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}
