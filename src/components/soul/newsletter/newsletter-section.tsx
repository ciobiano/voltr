import { CrossGridSection } from "@/components/primitives/cross-grid-section";

export function NewsletterSection() {
  return (
    <CrossGridSection
      eyebrow="Want the latest info on all things VOLTR?"
      headline={
        <p className="text-size-sm leading-heading   text-text-primary">
          New F2.B production updates, traveling roadshow locations, stories
          about our trailers in the wild — find it in our newsletter.
        </p>
      }
      image="/images/rv-images/lifestyle.png"
      imageAlt="VOLTR F2.B in the wild"
    />
  );
}
