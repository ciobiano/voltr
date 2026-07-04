import { ArrowRight } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { Heading } from "@/components/primitives/heading";

export function SpecsCtaSection() {
  return (
    <section className="bg-surface-primary">
      <div
        className="relative mx-sm flex h-[560px] items-end overflow-hidden rounded-2xl md:mx-lg"
        style={{
          background:
            "linear-gradient(180deg, #6b7a9e 0%, #d99a63 42%, #e8b877 55%, #3a3a30 100%)",
        }}
      >
        <Heading
          level="h1"
          as="h2"
          reveal={false}
          className="px-xl pb-2xl text-size-4xl leading-heading text-white"
        >
          Make it yours
        </Heading>
      </div>

      <Container size="lg" className="relative z-10 -mt-2xl pb-3xl">
        <div className="grid grid-cols-1 gap-xs md:grid-cols-2">
          <div className="flex min-h-[8.75rem] flex-col justify-between gap-lg rounded-xl bg-ink px-lg py-lg text-white">
            <span className="text-size-caption font-semibold text-white/70">
              Talk with an expert
            </span>
            <div className="flex items-end justify-between gap-md">
              <p className="text-size-xs font-medium leading-heading">
                Get your questions answered
              </p>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                <ArrowRight size={16} className="text-white" />
              </span>
            </div>
          </div>

          <div className="flex min-h-[8.75rem] flex-col justify-between gap-lg rounded-xl bg-orange px-lg py-lg text-white">
            <span className="text-size-caption font-semibold text-white/85">
              Start your build
            </span>
            <div className="flex items-end justify-between gap-md">
              <p className="text-size-xs font-medium leading-heading">
                Customize your F2.b.
                <br />
                Your Way.
              </p>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/15">
                <ArrowRight size={16} className="text-white" />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
