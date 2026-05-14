import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";

export default function HeroScene() {
  return (
    <Section label="Controlled awe" surface="atmospheric">
      <Heading level="h1">Engineered for silence.</Heading>
      <Text size="body" color="secondary" className="max-w-lg">
        The future does not need to announce itself loudly. True innovation is
        clarity. Precision. Restraint.
      </Text>
    </Section>
  );
}
