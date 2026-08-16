import { ClientProviders } from "@/motion/client-providers";
import { ProductNav } from "@/components/soul/navigation/product-nav";
import { ExpandSection } from "@/components/soul/expand-section/expand-section";
import { FooterSection } from "@/components/soul/footer/footer-section";
import { SectionDock } from "@/components/soul/section-dock/section-dock";
import { ExperienceHeroSection } from "@/sections/experience/experience-hero-section";
import { ExperienceFieldnotesSection } from "@/sections/experience/experience-fieldnotes-section";
import { ExperienceCloserLookSection } from "@/sections/experience/experience-closer-look-section";
import { ExperienceEventsSection } from "@/sections/experience/experience-events-section";
import { ExperienceBookATourSection } from "@/sections/experience/experience-book-a-tour-section";
import { rvImages } from "@/assets/rv-images";

const dockItems = [
  { id: "videos", label: "Videos" },
  { id: "events", label: "Events" },
  { id: "book-a-tour", label: "Tours" },
];

export default function ExperiencePage() {
  return (
    <ClientProviders>
      <ProductNav />
      <main className="pt-[72px]">
        <ExperienceHeroSection />
        <ExperienceFieldnotesSection />
        <ExperienceCloserLookSection />
        <ExperienceEventsSection />
        <ExperienceBookATourSection />
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
      <SectionDock items={dockItems} />
    </ClientProviders>
  );
}
