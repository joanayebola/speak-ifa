export default function TruthsTable() {
    const truths = [
        { away: 'Deities as "Gods/Statues"', toward: 'Deities as "Forces of Nature/Consciousness"' },
        { away: 'The "Trickster" Devil', toward: 'The Master of Choice (Èṣù)' },
        { away: 'Religious Dogma', toward: 'Philosophical Balance (Ìwà Pẹ̀lẹ́)' },
    ];

    return (
        <div className="my-20 overflow-hidden rounded-3xl border border-accent/10 shadow-lg">
            <div className="bg-accent/5 px-8 py-6 border-b border-accent/10">
                <h3 className="text-xl font-serif font-bold">The Decolonial Shift</h3>
                <p className="text-xs uppercase tracking-widest text-foreground/40 font-bold mt-1">Reclaiming the Narrative</p>
            </div>
            <div className="bg-background/40 backdrop-blur-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-accent/10">
                            <th className="px-8 py-4 text-[10px] uppercase tracking-widest text-foreground/40 font-bold w-1/2">We Move Away From...</th>
                            <th className="px-8 py-4 text-[10px] uppercase tracking-widest text-accent font-bold w-1/2">We Move Toward...</th>
                        </tr>
                    </thead>
                    <tbody>
                        {truths.map((truth, i) => (
                            <tr key={i} className="group border-b border-accent/5 last:border-0 hover:bg-accent/[0.02] transition-colors">
                                <td className="px-8 py-6 text-sm text-foreground/60 line-through decoration-foreground/20 italic">
                                    {truth.away}
                                </td>
                                <td className="px-8 py-6 text-sm font-medium text-foreground translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                                    <span className="inline-flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        {truth.toward}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
