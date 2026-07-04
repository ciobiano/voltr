import Image from "next/image";
import { Container } from "@/components/primitives/container";
import { Heading } from "@/components/primitives/heading";
import { dimensionLegend, statCards } from "@/sections/specs/specs-data";

const legendColumns = [
  dimensionLegend.slice(0, 2),
  dimensionLegend.slice(2, 4),
  dimensionLegend.slice(4, 6),
];

export function SpecsHeroSection() {
  return (
    <section className="bg-surface-primary">
      <Container size="lg" className="text-center pt-2xl pb-xl md:pt-3xl">
        <Heading level="h1" as="h2" className="text-size-lg leading-heading text-stroke">
          The F2.b by the Numbers
        </Heading>
        <p className="mx-auto mt-lg max-w-md text-size-body leading-relaxed text-text-secondary">
          A closer look at the systems, dimensions, and performance that define the F2.b.
        </p>
      </Container>

      <Container size="lg" className="pb-xs">
        <div className="rounded-2xl bg-ink px-lg pb-xl pt-xl md:px-xl">
          <div className="relative aspect-[1120/420] w-full">
            <Image
              src="/svg/f2b-dimensions-diagram.svg"
              alt="F2.b dimension diagram — front and side elevations"
              fill
              className="object-contain"
            />
          </div>

          <div className="mt-md grid grid-cols-1 gap-md border-t border-white/10 pt-lg md:grid-cols-3">
            {legendColumns.map((column, i) => (
              <div key={i} className="flex flex-col gap-sm">
                {column.map((item) => (
                  <p key={item.code} className="text-size-3xs text-white/70">
                    {item.code}: {item.label} - {item.value}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Container size="lg" className="pb-3xl">
        <div className="mt-xs grid grid-cols-2 gap-xs md:grid-cols-4">
          {statCards.map((card) => (
            <div
              key={card.label}
              className="relative min-h-[8.5rem] bg-surface-secondary px-lg py-lg"
            >
              <span className="absolute left-md top-md text-xs text-border-subtle">+</span>
              <span className="absolute right-md top-md text-xs text-border-subtle">+</span>
              <span className="absolute bottom-md left-md text-xs text-border-subtle">+</span>
              <span className="absolute bottom-md right-md text-xs text-border-subtle">+</span>
              <h3 className="mb-xl text-size-2xs font-semibold text-text-primary">
                {card.value}
              </h3>
              <p className="text-size-body text-text-secondary">{card.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
