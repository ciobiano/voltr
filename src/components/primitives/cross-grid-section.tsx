"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { NewsletterForm } from "@/components/primitives/newsletter-form";

interface CrossGridSectionProps {
  eyebrow?: string;
  headline: React.ReactNode;
  image: string;
  imageAlt?: string;
  submitLabel?: string;
  onSubmit?: (data: { zipCode: string; email: string }) => void;
  className?: string;
}

export function CrossGridSection({
  eyebrow,
  headline,
  image,
  imageAlt = "",
  submitLabel = "Register",
  onSubmit,
  className,
}: CrossGridSectionProps) {
  return (
    <section
      className={cn(
        "relative flex bg-surface-secondary cross-pattern py-24 md:py-32 section-inset rounded-xl",
        className
      )}
    >
      <div className="mx-auto px-6 md:px-16 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-stretch">
          {/* Left: eyebrow + headline + form */}
          <div className="flex-1 flex flex-col gap-12">
            <div className="space-y-10">
              {eyebrow && (
                <p className="text-body text-text-secondary">{eyebrow}</p>
              )}
              <div>{headline}</div>
            </div>

            <NewsletterForm submitLabel={submitLabel} onSubmit={onSubmit} />
          </div>

          {/* Right: image */}
          <div className="md:w-[52%] relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[420px]">
            <Image src={image} alt={imageAlt} fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
