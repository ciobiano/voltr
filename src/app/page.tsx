import { PreLoader } from "@/components/primitives/pre-loader";
import { HeroSection } from "@/sections/home/home-section";
import { VehicleIntroSection } from "@/sections/home/vehicle-intro/vehicle-intro-section";
import { TechnologySection } from "@/sections/home/technology/technology-section";
import { DiscoverSection } from "@/sections/home/discover/discover-section";
import { NewsletterSection } from "@/sections/home/newsletter/newsletter-section";
import { FooterSection } from "@/sections/home/footer/footer-section";
import { ClientProviders } from "@/motion/client-providers";

export default function HomePage() {
  return (
    <ClientProviders>
      <main>
        <PreLoader />
        <HeroSection />
        <VehicleIntroSection />
        <TechnologySection />
        <DiscoverSection />
        <NewsletterSection />
      </main>
      <FooterSection />
    </ClientProviders>
  );
}
