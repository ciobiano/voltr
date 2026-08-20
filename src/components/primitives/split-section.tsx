"use client";

import { cn } from "@/lib/utils";
import { Paragraph } from "@/components/primitives/paragraph";
import { Heading } from "@/components/primitives/heading";
import { Button } from "@/components/primitives/button";

interface SplitSectionCta {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface SplitSectionProps {
  /** The media element for this row — an <Image>, <video>, <img> gif, etc. Caller owns it. */
  media: React.ReactNode;
  mediaPosition?: "left" | "right";
  /** Override the media wrapper's default aspect ratio / size / rounding for this instance. */
  mediaClassName?: string;
  /** Override the default gap between the text and media columns (e.g. "gap-8 md:gap-24"). */
  textWidth?: string;
  eyebrow?: string;
  heading?: React.ReactNode;
  body?: React.ReactNode;
  bodyClassName?: string;
  cta?: SplitSectionCta;
  className?: string;
}

export function SplitSection({
  media,
  mediaPosition = "right",
  mediaClassName,
  textWidth,
  eyebrow,
  heading,
  body,
  bodyClassName,
  cta,
  className,
}: SplitSectionProps) {
  const imageOnLeft = mediaPosition === "left";

  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row items-start gap-8 lg:gap-20 px-3 lg:px-2",
        imageOnLeft && "lg:flex-row-reverse",
        className,
      )}
    >
      <div className="flex flex-col w-full lg:w-[45%] justify-start">
        <div
          className={cn(
            "flex flex-col gap-6 lg:mx-auto items-start justify-center",
            imageOnLeft ? "lg:ml-10" : "lg:mr-10",
            textWidth ?? "max-w-[22rem]",
             
          )}
        >
          {eyebrow && (
            <span
              className={cn(
                "text-size-body text-tertiary tracking-[var(--tracking-mono)]",
                imageOnLeft ? "mr-auto" : "mr-auto",
              )}
            >
              {eyebrow}
            </span>
          )}
          {heading && (
            <Heading
              level="h1"
              reveal={false}
              className={cn(
                "text-size-sm leading-heading font-base w-full   max-w-sm",
                imageOnLeft ? "mr-auto" : "mr-auto",
              )}
            >
              {heading}
            </Heading>
          )}
          {body && <Paragraph className={bodyClassName}>{body}</Paragraph>}
          {cta && (
            <div className="pt-2">
              <Button
                intent="accent"
                shape="pill"
                size="md"
                className="self-start"
                {...(cta.href
                  ? { as: "a", href: cta.href }
                  : { onClick: cta.onClick })}
              >
                {cta.label}
              </Button>
            </div>
          )}
        </div>
      </div>

      <div
        className={cn(
          "w-full lg:w-[55%] lg:h-[35vh] relative aspect-[4/3] overflow-hidden rounded-lg",
          "[&>*]:absolute [&>*]:inset-0 [&>*]:h-full [&>*]:w-full [&>*]:object-cover",
          mediaClassName,
        )}
      >
        {media}
      </div>
    </div>
  );
}
