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
      <h3 className="px-lg pb-md pt-lg text-subhead text-text-primary">
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
    <section className="bg-surface-primary font-display">
      <Container size="lg" className="pb-2xl max-w-[88rem] mx-auto">
        <Heading level="h1" as="h2" className="mb-xl ">
          Upgrade Options
        </Heading>

        <div className="grid grid-cols-1 items-start gap-xs md:grid-cols-2">
          <div className="flex flex-col gap-xs">
            {upgradeColumnLeft.map((card) => (
              <UpgradeCard key={card.title} card={card} />
            ))}
          </div>
          <div className="flex flex-col gap-xs">
            {upgradeColumnRight.map((card) => (
              <UpgradeCard key={card.title} card={card} />
            ))}
          </div>
        </div>

        <div className="pt-xl max-w-[45vw] ">
          <p className="text-size-md font-base font-display  tracking-mono leading-display">
            Continuous software updates ensure your F2.B evolves with every
            mile. Engineered to endure.
          </p>
        </div>
        <div className="pt-xl">
          <Button intent="outline" shape="pill" size="md">
            Explore the F2.b
          </Button>
        </div>
      </Container>
    </section>
  );
}
