import Image from "next/image";
import { ClientProviders } from "@/motion/client-providers";
import { ProductNav } from "@/components/soul/navigation/product-nav";
import { F2bHeroSection } from "@/sections/f2b/f2b-hero-section";
import { F2bShowcaseSection } from "@/sections/f2b/showcase";
import { PriceDock } from "@/components/primitives/price-dock";
import { NewsletterSection } from "@/components/soul/newsletter/newsletter-section";
import { TechnologySection } from "@/components/soul/technology/technology-section";
import { technologyFeatures, discoverFeatures } from "@/sections/f2b/features";
import { SplitSection } from "@/components/primitives/split-section";
import { F2bCustomizeSection } from "@/sections/f2b/f2b-customize-section";
import { F2bSpecsSection } from "@/sections/f2b/f2b-specs-section";
import { ExpandSection } from "@/components/soul/expand-section/expand-section";
import { FooterSection } from "@/components/soul/footer/footer-section";
import { rvImages } from "@/assets/rv-images";

export default function F2bPage() {
  return (
    <ClientProviders>
      <ProductNav />
      <main className="pt-18">
        <F2bHeroSection />
        <TechnologySection
          features={discoverFeatures}
          heading={<>Discover the<br />F2.b Difference</>}
          description="Built around an industry-leading electric power system, the F2b challenges outdated industry norms and sets a new standard for how adventure vehicles are designed, engineered, and built. Manufactured in America with automotive craftsmanship and aerospace-grade precision, it's made for durability across every kind of adventure."
        />
        <F2bShowcaseSection />
        <NewsletterSection />
        <TechnologySection features={technologyFeatures} label="Technology" />
        <SplitSection
          media={<Image src={rvImages.editorialTeam.src} alt={rvImages.editorialTeam.alt} fill />}
          heading="One Platform. Endless Possibilities "
          body="We started VOLTR with a belief: exploring the outdoors should be effortless, and it should be possible for more people without compromising the places we love. As a direct-to-consumer adventure vehicle manufacturer, we're able to bring that experience straight into people's hands, reimagining this industry from the ground up with an all-electric design that's aerodynamic and built to go farther with less."
          
          className="pb-20 md:py-28  "
        />
        <F2bCustomizeSection />
        <F2bSpecsSection />
        <ExpandSection
          image={rvImages.exteriorExpanded}
          headline="Built for you"
          ctas={[
            { eyebrow: "Talk with an expert", title: "Get your questions answered", tone: "dark" },
            { eyebrow: "Start your build", title: "Customize your F2.b. Your way.", tone: "accent" },
          ]}
        />
      </main>
      <FooterSection />
      <PriceDock
        model="F2.b"
        price="$84,900"
        monthly="$977/mo."
        ctaLabel="Order now"
      />
    </ClientProviders>
  );
}
