import { Container } from "@/components/primitives/container";
import { Heading } from "@/components/primitives/heading";
import { SpecRow } from "@/components/soul/specs/spec-row";
import { electricRows, exteriorRows, livingRows } from "@/sections/specs/specs-data";

export function SpecsMainSection() {
  return (
    <section className="bg-surface-primary">
      <Container size="lg" className="pb-2xl md:pb-3xl">
        <Heading level="h1" as="h2" className="mb-xl text-size-2xs">
          Main Specs
        </Heading>

        <div className="flex flex-col gap-lg">
          <div className="overflow-hidden rounded-2xl bg-surface-secondary">
            <h3 className="px-lg pb-md pt-lg text-size-sm font-semibold text-text-primary">
              Exterior &amp; Footprint
            </h3>
            {exteriorRows.map((row) => (
              <SpecRow key={row.label} label={row.label} value={row.value} />
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl bg-surface-secondary">
            <h3 className="px-lg pb-md pt-lg text-size-sm font-semibold text-text-primary">
              The Electric Ecosystem
            </h3>
            {electricRows.map((row) => (
              <SpecRow key={row.label} label={row.label} value={row.value} />
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl bg-surface-secondary">
            <h3 className="px-lg pb-md pt-lg text-size-sm font-semibold text-text-primary">
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
