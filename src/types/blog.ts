export interface Post {
    id: string;
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    category: string;
    author: string;
    image?: string;
    readingTime: string;
    verified: boolean;
}

export interface GlossaryTerm {
    term: string;
    definition: string;
    pronunciation?: string;
    audioUrl?: string;
}
