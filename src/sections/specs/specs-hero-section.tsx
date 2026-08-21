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
    <section className="bg-surface-primary ">
      <Container size="lg" className="text-center gap-4 md:gap-10 pt-2xl  pb-xl mx-auto md:pt-3xl">
        <Heading level="h1" as="h2" className="text-size-lg leading-heading text-stroke">
          The F2.b by the Numbers
        </Heading>
        <p className="mx-auto my-xl max-w-prose px-2 text-body leading-tight text-text-tertiary md:max-w-[30vw] md:px-0">
          A closer look at the systems, dimensions, and performance that define the F2.b.
        </p>
      </Container>

      <div className="mx-auto max-w-[88rem] px-4 pb-xs">
        <div className="rounded-2xl bg-ink px-md pb-lg pt-lg md:px-xl md:pb-xl md:pt-xl">
          <div className="relative aspect-[1120/620] w-full">
            <Image
              src="/svg/f2b-dimensions-diagram.svg"
              alt="F2.b dimension diagram — front and side elevations"
              fill
              className="object-contain"
            />
          </div>

          <div className="mt-md  grid grid-cols-1 gap-md border-t border-white/10 pt-lg md:grid-cols-3">
            {legendColumns.map((column, i) => (
              <div key={i} className="flex flex-col gap-sm">
                {column.map((item) => (
                  <p key={item.code} className="text-size-2xs text-white/70 text-center">
                    {item.code}: {item.label} - {item.value}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Container size="lg" className="pb-3xl mx-auto max-w-[88rem]">
        <div className="mt-xs grid grid-cols-2 gap-md font-display lg:grid-cols-4">
          {statCards.map((card) => (
            <div
              key={card.label}
              className="relative min-h-[8.5rem] min-w-0 rounded-lg bg-surface-secondary px-md py-md md:min-w-0 md:px-lg md:py-lg"
            >
              <h3 className="mb-xl text-subhead font-medium text-text-primary">
                {card.value}
              </h3>
              <p className="text-subhead text-primary">{card.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
