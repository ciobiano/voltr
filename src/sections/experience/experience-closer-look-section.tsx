"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/primitives/container";
import { SplitSection } from "@/components/primitives/split-section";
import { VideoModal } from "@/components/soul/video-modal/video-modal";
import { buttonVariants } from "@/design-system/variants";
import { closerLookItems } from "@/sections/experience/data";

export function ExperienceCloserLookSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = closerLookItems.find((item) => item.id === activeId) ?? null;

  return (
    <section className="flex flex-col gap-y-xl py-2xl">
      <Container size="lg" className="space-y-lg mx-auto  md:max-w-11/12">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-md text-center py-10 md:pb-3xl">
          <h2 className="text-heading-xl text-text-primary">A Closer Look</h2>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ intent: "accent", shape: "pill", size: "md" })}
          >
            Explore more on YouTube
          </a>
        </div>

        <ul className="mx-auto w-full space-y-2xl">
          {closerLookItems.map((item) => (
            <li key={item.id} className="group">
              <SplitSection
                
                media={
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="object-cover"
                  />
                }
                mediaClassName="transition-transform duration-[var(--duration-ui)] group-hover:scale-95 md:h-[40vh] md:w-[60vw] aspect-[4/3]"
                textWidth="max-w-[30rem] w-[30rem] gap-8"
                
                heading={item.title}
                body={
                  <>
                    <span className="mb-3 -mt-3 block text-size-3xs 
                      text-black/70">
                      {item.handle}
                    </span>
                    <span className="block  ">{item.quote}</span>
                  </>
                }
                cta={{ label: "Watch this story", onClick: () => setActiveId(item.id) }}
              />
            </li>
          ))}
        </ul>
      </Container>

      {active && (
        <VideoModal
          open={!!active}
          onOpenChange={(open) => !open && setActiveId(null)}
          title={active.title}
          subtitle={active.handle}
          description={active.description}
          thumbnail={active.thumbnail}
          aspect="video"
        />
      )}
    </section>
  );
}
