import { PreLoader } from "@/components/pre-loader";
import { Nav } from "@/components/nav";
import { HeroSection } from "@/features/hero/hero-section";

export default function HomePage() {
  return (
    <main>
      <PreLoader />
      <Nav />
      <HeroSection />
    </main>
  );
}
