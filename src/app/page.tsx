import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BlogGrid from "@/components/BlogGrid";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BlogGrid />
      <footer className="py-12 border-t border-accent/10 text-center">
        <p className="text-sm text-foreground/40 font-bold uppercase tracking-widest">
          © 2026 The Yorùbá Way | Reclaiming the Lineage
        </p>
      </footer>
    </main>
  );
}
