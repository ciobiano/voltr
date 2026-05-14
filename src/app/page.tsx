import { PreLoader } from "@/components/pre-loader";
import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";

export default function HomePage() {
  return (
    <main>
      <PreLoader />
      <Section label="VOLTR" surface="warm">
        <Heading level="display">
          Motion<br />without noise.
        </Heading>
        <Text size="body" color="secondary" className="max-w-md">
          Cinematic automotive engineering built on calm intelligence and
          architectural precision.
        </Text>
      </Section>
    </main>
  );
}
