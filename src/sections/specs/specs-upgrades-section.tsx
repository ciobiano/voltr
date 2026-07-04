import { Container } from "@/components/primitives/container";
import { Heading } from "@/components/primitives/heading";
import { Button } from "@/components/primitives/button";
import { SpecRow } from "@/components/soul/specs/spec-row";
import {
  type UpgradeCardData,
  upgradeColumnLeft,
  upgradeColumnRight,
} from "@/sections/specs/specs-data";

function UpgradeCard({ card }: { card: UpgradeCardData }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-surface-secondary">
      <h3 className="px-6 pb-4 pt-7 text-size-xs font-semibold text-text-primary md:px-7">
        {card.title}
      </h3>
      {card.rows.map((row) => (
        <SpecRow
          key={row.label}
          label={row.label}
          value={row.value}
          labelWidth="130px"
        />
      ))}
    </div>
  );
}

export function SpecsUpgradesSection() {
  return (
    <section className="bg-surface-primary">
      <Container size="lg" className="pb-16 md:pb-20">
        <Heading level="h1" as="h2" className="mb-8 text-size-2xs md:mb-9">
          Upgrade Options
        </Heading>

        <div className="grid grid-cols-1 items-start gap-1 md:grid-cols-2">
          <div className="flex flex-col gap-1">
            {upgradeColumnLeft.map((card) => (
              <UpgradeCard key={card.title} card={card} />
            ))}
          </div>
          <div className="flex flex-col gap-1">
            {upgradeColumnRight.map((card) => (
              <UpgradeCard key={card.title} card={card} />
            ))}
          </div>
        </div>

        <div className="pt-10 md:pt-12">
          <Button intent="outline" shape="pill" size="md">
            Explore the F2.b
          </Button>
        </div>
      </Container>
    </section>
  );
}
