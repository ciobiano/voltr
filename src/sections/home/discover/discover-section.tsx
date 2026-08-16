"use client";

import Image from "next/image";
import { Button } from "@/components/primitives/button";
import { Carousel } from "@/components/primitives/carousel";
import { Heading } from "@/components/primitives/heading";
import { RevealText } from "@/components/primitives/reveal";
import { RevealLines } from "@/components/primitives/reveal-lines";
import { SplitSection } from "@/components/primitives/split-section";
import { rvImages } from "@/assets/rv-images";

const articles = [
  {
    title: "VOLTR Expands Colorado Facility, More Than Quadrupling Manufacturing Capacity",
    date: "04.09.2026",
    image: rvImages.editorialFacility.src,
  },
  {
    title: "Setting the VOLTR Standard",
    date: "02.14.2026",
    image: rvImages.interiorGalley.src,
  },
  {
    title: "Why I Chose an F2.B",
    date: "09.16.2025",
    image: rvImages.editorialOwnerStory.src,
  },
  {
    title: "Tom von Re Joins the Board as Director of Innovation",
    date: "03.02.2025",
    image: rvImages.editorialFacility.src,
  },
];

export function DiscoverSection() {
  return (
    <section className="relative bg-surface-primary overflow-hidden mt-40">
      {/* Inset vehicle image card */}
      <div className="relative mx-3 md:mx-2 h-[58vh] overflow-hidden rounded-2xl">
        <Image
          src={rvImages.exteriorHero.src}
          alt="VOLTR F2.B"
          fill
          className="object-cover"
        />
        {/* Centered descriptor + CTA */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4">
          <RevealText>
            <p className="text-heading-xl text-text-inverse text-center">
              With VOLTR <br /> with a Closer Look
            </p>
          </RevealText>
          <Button intent="ghost" shape="pill" size="md">
            Explore the F2.B
          </Button>
        </div>
      </div>

      {/* Editorial bleed text */}
      <RevealLines className="pl-2 pr-0 pt-16 pb-24 max-w-5xl md:pt-20 md:pb-40 text-heading-xl text-text-primary">
        Discover a better way to roam, where exploring feels effortless,
        off-grid stays stretch longer and the outdoors come alive in quiet
        comfort. With aerodynamic design, powerful energy systems and
        intuitive spaces, your journey becomes unforgettable.
      </RevealLines>

      {/* About split */}
      <div className="pb-20 md:pb-28">
        <SplitSection
          media={<Image src={rvImages.editorialTeam.src} alt="VOLTR team" fill />}
          body="We started VOLTR with a belief: exploring the outdoors should be effortless, and it should be possible for more people without compromising the places we love. As a direct-to-consumer adventure vehicle manufacturer, we're able to bring that experience straight into people's hands, reimagining this industry from the ground up with an all-electric design that's aerodynamic and built to go farther with less. "
          cta={{ label: "About us" }}
          bodyClassName="text-text-primary px-4"
        />
      </div>

      {/* More to Discover */}
      <div className="pb-24 my-20  md:pb-32">
        <Heading level="h2" as="h2" className="text-heading-xl tracking-mono  text-text-primary text-center mb-12 md:mb-16 px-4">
          More to Discover
        </Heading>

        <Carousel
          itemCount={articles.length}
          itemLabels={articles.map((a) => a.title)}
          paddingStart="px-4 md:pl-28 "
          gap="gap-5"
          showControls
        >
          {articles.map((article) => (
            <article
              key={article.title}
              className="flex-none w-[85vw] md:w-[calc((100%-2*1.25rem)/3)] cursor-pointer group"
            >
              <div className="relative w-[85vw] md:w-full rounded-xl  aspect-[8/5] md:aspect-5/3 overflow-hidden mb-4">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 80vw, 45vw"
                  className="object-cover  transition-transform duration-(--duration-scene) ease-[var(--ease-card)] group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="text-subhead text-text-primary mb-2 leading-tight tracking-(--tracking-mono) group-hover:underline underline-offset-2">
                {article.title}
              </h3>
              <time className="text-caption text-text-secondary">{article.date}</time>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
