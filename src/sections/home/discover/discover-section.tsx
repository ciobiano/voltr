"use client";

import Image from "next/image";
import { Button } from "@/components/primitives/button";
import { Carousel } from "@/components/primitives/carousel";
import { Heading } from "@/components/primitives/heading";
import { RevealText } from "@/components/primitives/reveal";
import { RevealLines } from "@/components/primitives/reveal-lines";

const articles = [
  {
    title: "VOLTR Expands Colorado Facility, More Than Quadrupling Manufacturing Capacity",
    date: "04.09.2026",
    image: "/images/rv-images/features.png",
  },
  {
    title: "Setting the VOLTR Standard",
    date: "02.14.2026",
    image: "/images/rv-images/interior.png",
  },
  {
    title: "Why I Chose an AE.1",
    date: "09.16.2025",
    image: "/images/rv-images/lifestyle.png",
  },
  {
    title: "Tom von Re Joins the Board as Director of Innovation",
    date: "03.02.2025",
    image: "/images/rv-images/features.png",
  },
];

export function DiscoverSection() {
  return (
    <section className="relative bg-surface-primary overflow-hidden mt-40">
      {/* Inset vehicle image card */}
      <div className="relative mx-3 md:mx-2 h-[58vh] overflow-hidden rounded-2xl">
        <Image
          src="/images/rv-images/features.png"
          alt="VOLTR AE.1"
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
            Explore the AE.1
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

      {/* About split — text left, photo right */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 px-3 md:px-2 pt-0 pb-20 md:pb-28">
        <div className="w-full md:w-[45%] items-center flex flex-col" >
          <div className="flex flex-col justify-between gap-10   text-primary   max-w-[20em] ">
            
          <p >
            We started VOLTR with a belief: exploring the outdoors should be
            effortless, and it should be possible for more people without
            compromising the places we love. As a direct-to-consumer adventure
            vehicle manufacturer, we&apos;re able to bring that experience
            straight into people&apos;s hands, reimagining this industry from
            the ground up with an all-electric design that&apos;s aerodynamic
            and built to go farther with less. Whether you're heading off-grid for a weekend or crossing the country, our trailers are built for comfort, connection, and freedom, 
          </p>
          <Button intent="outline" shape="pill" size="md" className="self-start">
            About us
          </Button>
          </div>
        </div>
        <div className="md:w-[55%] h-full max-h-[35vh] rounded-xl relative aspect-[4/3] md:aspect-square md:min-h-[120px] overflow-hidden">
          <Image
            src="/images/rv-images/lifestyle.png"
            alt="VOLTR team"
            fill
            className="object-cover "
          />
        </div>
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
              className="flex-none w-[calc(13.39px*100*0.33333-clamp(1rem,-0.9286rem+9.6429vw,7.75rem)*2*0.33333-8px*0.66667)] cursor-pointer group"
            >
              <div className="relative w-[95vw] md:w-full rounded-xl  aspect-[8/5] md:aspect-5/3 overflow-hidden mb-4">
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
