import { Container } from "@/components/primitives/container";
import { Heading } from "@/components/primitives/heading";
import { SpecRow } from "@/components/soul/specs/spec-row";
import { electricRows, exteriorRows, livingRows } from "@/sections/specs/specs-data";

export function SpecsMainSection() {
  return (
    <section className="bg-surface-primary">
      <Container size="lg" className="pb-20 md:pb-24">
        <Heading level="h1" as="h2" className="mb-8 text-size-2xs md:mb-9">
          Main Specs
        </Heading>

        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-2xl bg-surface-secondary">
            <h3 className="px-6 pb-4 pt-7 text-size-sm font-semibold text-text-primary md:px-7">
              Exterior &amp; Footprint
            </h3>
            {exteriorRows.map((row) => (
              <SpecRow key={row.label} label={row.label} value={row.value} />
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl bg-surface-secondary">
            <h3 className="px-6 pb-4 pt-7 text-size-sm font-semibold text-text-primary md:px-7">
              The Electric Ecosystem
            </h3>
            {electricRows.map((row) => (
              <SpecRow key={row.label} label={row.label} value={row.value} />
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl bg-surface-secondary">
            <h3 className="px-6 pb-4 pt-7 text-size-sm font-semibold text-text-primary md:px-7">
              Living Spaces
            </h3>
            {livingRows.map((row) => (
              <SpecRow key={row.label} label={row.label} value={row.value} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
