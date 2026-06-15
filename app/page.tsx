import Cta from "./components/Cta";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SiteShell from "./SiteShell";

export default function Home() {
  return (
    <SiteShell>
      <main className="p-4">
        <div className="max-w-6xl mx-auto">
          <Hero />
          <Features />
        </div>
        <Cta />
        <Footer />
      </main>
    </SiteShell>
  );
}
