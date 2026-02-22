import { Target, Compass, Zap } from "lucide-react";

const PILLARS = [
    {
        title: "Accuracy",
        description: "No colonial filters. We use the etymology and the Odù as our primary compass to navigate the ancient landscape.",
        icon: <Target size={24} />,
    },
    {
        title: "Alignment",
        description: "Using ancient cosmology as a practical tool to navigate modern life, intention setting, and spiritual manifestation.",
        icon: <Compass size={24} />,
    },
    {
        title: "Aṣẹ",
        description: "Recognizing that your words, choices, and character (Ìwà) have the inherent power to command and shape your reality.",
        icon: <Zap size={24} />,
    },
];

export default function Pillars() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-20">
            {PILLARS.map((pillar) => (
                <div
                    key={pillar.title}
                    className="glass-card p-8 rounded-3xl group transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/5"
                >
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        {pillar.icon}
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-4">{pillar.title}</h3>
                    <p className="text-foreground/60 leading-relaxed text-sm">
                        {pillar.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
