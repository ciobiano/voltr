import { Section } from "@/components/primitives/section";
import { Heading } from "@/components/primitives/heading";
import { Text } from "@/components/primitives/text";

export default function InteriorPage() {
  return (
    <Section label="Intelligent calm" surface="warm">
      <Heading level="h1">Technology through invisibility.</Heading>
      <Text size="body" color="secondary" className="max-w-lg">
        An interface that understands presence without demanding attention.
        Technology that disappears into experience.
      </Text>
    </Section>
  );
}
