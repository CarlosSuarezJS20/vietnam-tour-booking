import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/hero/HeroSection";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <Navbar />
      <HeroSection />
    </main>
  );
}
