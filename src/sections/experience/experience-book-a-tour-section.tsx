import Image from "next/image";
import { Container } from "@/components/primitives/container";
import { buttonVariants } from "@/design-system/variants";
import { tourOptions } from "@/sections/experience/data";
import { cn } from "@/lib/utils";

export function ExperienceBookATourSection() {
  return (
    <section id="book-a-tour" className="bg-surface-tertiary py-4xl cross-pattern">
      <Container size="lg" className="flex flex-col max-w-[90vw] mx-auto gap-y-3xl ">
        <div className="flex max-w-xl flex-col gap-y-xl">
          <p className="tracking-[var(--tracking-wide)] text-text-secondary">
            Book a Private Tour of the F2.b
          </p>
          <h2 className="text-size-sm leading-heading   text-text-primary">
            Your time to step inside, ask questions, and experience F2.b up close.
          </h2>
        </div>

        <ul className="grid gap-xl sm:grid-cols-2 lg:grid-cols-3">
          {tourOptions.map((tour) => (
            <li key={tour.id} className="flex flex-col gap-y-sm rounded-md bg-surface-primary p-sm lg:w-[28vw] lg:max-w-[50vw] " >
              <div className="flex flex-1 flex-col justify-between gap-y-2xl p-sm ">
                <div className="flex flex-col gap-y-xs ">
                  <h3 className="text-subhead text-text-primary">{tour.title}</h3>
                  <p className=" tracking-mono leading-normal font-medium  text-text-tertiary">{tour.description}</p>
                </div>
                <div className="justify-self-end ">
                  
                <a
                  href={tour.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ intent: "accent", shape: "pill", size: "md" }),
                    "  transition-colors bg-surface-secondary duration-[var(--duration-ui)] group-hover:border-orange group-hover:bg-orange group-hover:text-white",
                  )}
                >
                  {tour.ctaLabel}
                </a>
                </div>
              </div>

              <div className="relative  aspect-[8/5] overflow-hidden rounded-xl">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
