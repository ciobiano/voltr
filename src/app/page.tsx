import { HeroSection } from "@/sections/home/home-section";
import { VehicleIntroSection } from "@/sections/home/vehicle-intro/vehicle-intro-section";
import { TechnologySection } from "@/components/soul/technology/technology-section";
import { technologyFeatures } from "@/sections/home/features";
import { DiscoverSection } from "@/sections/home/discover/discover-section";
import { NewsletterSection } from "@/components/soul/newsletter/newsletter-section";
import { FooterSection } from "@/sections/home/footer/footer-section";
import { ClientProviders } from "@/motion/client-providers";

export default function HomePage() {
  return (
    <ClientProviders>
      <main>
        <HeroSection />
        <VehicleIntroSection />
        <TechnologySection features={technologyFeatures} label="Technology" />
        <DiscoverSection />
        <NewsletterSection />
      </main>
      <FooterSection />
    </ClientProviders>
  );
}
