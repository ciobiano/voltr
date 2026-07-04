import { ClientProviders } from "@/motion/client-providers";
import { ProductNav } from "@/components/soul/navigation/product-nav";
import { FooterSection } from "@/components/soul/footer/footer-section";
import { SpecsHeroSection } from "@/sections/specs/specs-hero-section";
import { SpecsMainSection } from "@/sections/specs/specs-main-section";
import { SpecsUpgradesSection } from "@/sections/specs/specs-upgrades-section";
import { SpecsCtaSection } from "@/sections/specs/specs-cta-section";

export default function SpecsPage() {
  return (
    <ClientProviders>
      <ProductNav />
      <main className="pt-18">
        <SpecsHeroSection />
        <SpecsMainSection />
        <SpecsUpgradesSection />
        <SpecsCtaSection />
      </main>
      <FooterSection />
    </ClientProviders>
  );
}
