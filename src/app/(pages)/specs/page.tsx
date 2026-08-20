import { ClientProviders } from "@/motion/client-providers";
import { ProductNav } from "@/components/soul/navigation/product-nav";
import { FooterSection } from "@/components/soul/footer/footer-section";
import { SpecsHeroSection } from "@/sections/specs/specs-hero-section";
import { SpecsMainSection } from "@/sections/specs/specs-main-section";
import { SpecsUpgradesSection } from "@/sections/specs/specs-upgrades-section";
import { ExpandSection } from "@/components/soul/expand-section/expand-section";
import { rvImages } from "@/assets/rv-images";

export default function SpecsPage() {
  return (
    <ClientProviders>
      <ProductNav />
      <main className="pt-18">
        <SpecsHeroSection />
        <SpecsMainSection />
        <SpecsUpgradesSection />
        <ExpandSection
          image={rvImages.exteriorExpanded}
          headline="Make it yours"
          ctas={[
            { eyebrow: "Talk with an expert", title: "Get your questions answered", tone: "dark" },
            { eyebrow: "Start your build", title: "Customize your F2.b. Your way.", tone: "accent" },
          ]}
        />
      </main>
      <FooterSection />
    </ClientProviders>
  );
}
