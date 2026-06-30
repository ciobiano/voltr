"use client";

import Image from "next/image";
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
  image: string;
  alt: string;
  imagePosition?: "left" | "right";
  eyebrow?: string;
  heading?: React.ReactNode;
  body?: React.ReactNode;
  bodyClassName?: string;
  cta?: SplitSectionCta;
  className?: string;
}

export function SplitSection({
  image,
  alt,
  imagePosition = "right",
  eyebrow,
  heading,
  body,
  bodyClassName,
  cta,
  className,
}: SplitSectionProps) {
  const imageFirst = imagePosition === "left";

  const imageCol = (
    <div className="w-full md:w-[55%] md:h-[35vh] relative aspect-[4/3] overflow-hidden rounded-2xl">
      <Image src={image} alt={alt} fill className="object-cover" />
    </div>
  );

  const textCol = (
    <div className="w-full md:w-[45%] flex flex-col justify-center">
      <div className="flex flex-col gap-4 max-w-[22rem] md:mx-auto md:mr-10 items-center justify-center ">
        {eyebrow && (
          <span className="text-caption text-text-tertiary tracking-[var(--tracking-mono)]">
            {eyebrow}
          </span>
        )}
        {heading && (
          <Heading level="h1" reveal={false} className="text-size-sm leading-heading  font-base">
            {heading}
          </Heading>
        )}
        {body && <Paragraph className={bodyClassName}>{body}</Paragraph>}
        {cta && (
          <div className="pt-2">
            <Button
              intent="outline"
              shape="pill"
              size="md"
              className="self-start"
              {...(cta.href ? { as: "a", href: cta.href } : { onClick: cta.onClick })}
            >
              {cta.label}
            </Button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div
      className={cn(
        "flex flex-col gap-8 md:gap-12 md:flex-row items-center px-3 md:px-2",
        className,
      )}
    >
      {imageFirst ? (
        <>
          {imageCol}
          {textCol}
        </>
      ) : (
        <>
          {textCol}
          {imageCol}
        </>
      )}
    </div>
  );
}
