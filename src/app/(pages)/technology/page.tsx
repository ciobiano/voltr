import { ClientProviders } from "@/motion/client-providers";
import { ProductNav } from "@/components/soul/navigation/product-nav";
import { FooterSection } from "@/components/soul/footer/footer-section";
import { TechnologyHeroSection } from "@/sections/technology/technology-hero-section";
import { TechnologyIntroSection } from "@/sections/technology/technology-intro-section";
import { TechnologyScaleSection } from "@/sections/technology/technology-scale-section";
import { TechnologyEnergyFlowSection } from "@/sections/technology/technology-energy-flow-section";
import { TechnologyAppSection } from "@/sections/technology/technology-app-section";
import { TechnologySection } from "@/components/soul/technology/technology-section";
import { technologyFeatures } from "@/sections/home/features";
import { StackingCardScene } from "@/components/soul/stacking-cards/stacking-card-scene";
import { CARDS } from "@/components/soul/stacking-cards/vehicle-stacking-content";
import { FaqSection } from "@/components/soul/faq/faq-section";
import { NewsletterSection } from "@/components/soul/newsletter/newsletter-section";

export default function TechnologyPage() {
  return (
    <ClientProviders>
      <ProductNav />
      <main className="pt-18">
        <TechnologyHeroSection />
        <TechnologyIntroSection />
        <TechnologyScaleSection />
        <TechnologySection features={technologyFeatures} />
        <TechnologyEnergyFlowSection />
        <TechnologyAppSection />
       
        <StackingCardScene
          cards={CARDS}
          headingSvgSrc="/svg/heading-ae1.svg"
          leftText={
            <>
              <p className="text-primary text-size-3xs  font-semibold tracking-normal">
                Freedom, Reimagined.
              </p>
              <p className="text-tertiary font-display font-normal  text-size-2xs leading-tight mt-3">
                Go further, stay longer and share it with those who matter most.
              </p>
            </>
          }
          rightText={
            <>
              <p className="text-primary text-size-3xs  font-semibold tracking-normal">
                Built Different.
              </p>
              <p className="text-tertiary font-display font-normal text-size-2xs leading-tight mt-3">
                From the Rocky Mountains to the open road, every detail is crafted
                for the journey ahead.
              </p>
            </>
          }
        />

        <FaqSection />
        <NewsletterSection />
      </main>
      <FooterSection />
    </ClientProviders>
  );
}
