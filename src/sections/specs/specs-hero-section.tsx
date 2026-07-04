import { Container } from "@/components/primitives/container";
import { Heading } from "@/components/primitives/heading";

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
    </section>
  );
}
