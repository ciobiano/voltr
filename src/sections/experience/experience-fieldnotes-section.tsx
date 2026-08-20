"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { Carousel } from "@/components/primitives/carousel";
import { VideoModal } from "@/components/soul/video-modal/video-modal";
import { fieldnotes } from "@/sections/experience/data";

export function ExperienceFieldnotesSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = fieldnotes.find((item) => item.id === activeId) ?? null;

  return (
    <section id="videos" className="flex flex-col gap-y-2xl overflow-hidden py-2xl">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-md px-6 py-2xl text-center">
        <h2 className="text-heading-xl text-text-primary">Fieldnotes</h2>
      </div>

      <Carousel itemCount={fieldnotes.length} itemLabels={fieldnotes.map((item) => item.title)}>
        {fieldnotes.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveId(item.id)}
            // Widths were inverted: the base (mobile) case was the narrowest at
            // 25vw, giving 94px cards. 78vw matches what `sizes` below assumes.
            className="group flex h-auto w-[78vw] shrink-0 flex-col gap-sm text-left sm:w-[42vw] lg:h-[55vh] lg:w-[22vw]"
          >
            <div className="relative aspect-[2/4] w-full overflow-hidden rounded-lg transition-transform duration-[var(--duration-ui)] group-hover:scale-95">
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                sizes="(min-width: 768px) 26vw, (min-width: 640px) 42vw, 78vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/90 transition-colors duration-[var(--duration-ui)] group-hover:bg-orange">
                  <Play
                    size={12}
                    className="ml-0.5 text-text-primary transition-colors duration-[var(--duration-ui)] group-hover:text-white"
                    fill="currentColor"
                  />
                </span>
                <span className="text-caption font-semibold  text-white">{item.duration}</span>
              </div>
            </div>
            <div className="flex flex-col gap-xs">
              <p className="text-size-sm leading-heading tracking-mono text-text-primary">{item.title}</p>
              <p className="text-size-3xs font-semibold tracking-mono text-text-secondary">{item.handle}</p>
            </div>
          </button>
        ))}
      </Carousel>

      {active && (
        <VideoModal
          open={!!active}
          onOpenChange={(open) => !open && setActiveId(null)}
          title={active.title}
          subtitle={active.handle}
          description={active.caption}
          thumbnail={active.thumbnail}
          aspect="portrait"
        />
      )}
    </section>
  );
}
