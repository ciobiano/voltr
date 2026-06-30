import Image from "next/image";
import { Button } from "@/components/primitives/button";
import { Heading } from "@/components/primitives/heading";

export function F2bSpecsSection() {
  return (
    <section className="relative bg-accent section-inset rounded-lg overflow-hidden">
      {/* Floor plan image — bleeds out at top */}
      <div className="relative w-full h-[45vh] md:h-[35vh]">
        <Image
          src="/images/rv-images/interior.png"
          alt="F2.b floor plan"
          fill
          className="object-cover object-top"
          priority={false}
        />
      </div>

      {/* Heading + CTA */}
      <div className="flex flex-col items-center text-center gap-10 px-6 py-24 md:py-32">
        <Heading level="h1" as="h2" className="w-full max-w-[7/0vw] md:max-w-[50vw]  text-size-xl leading-heading font-display text-stroke mb-10">
          See every measurement,<br />system, and spec.
        </Heading>

        <Button intent="outline" shape="pill" size="md">
          See full specs
        </Button>
      </div>
    </section>
  );
}
