import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";

export default function InteriorScene() {
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
