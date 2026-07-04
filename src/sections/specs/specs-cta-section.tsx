import { ArrowRight } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { Heading } from "@/components/primitives/heading";

export function SpecsCtaSection() {
  return (
    <section className="bg-surface-primary">
      <div
        className="relative mx-2 flex h-[560px] items-end overflow-hidden rounded-2xl md:mx-6"
        style={{
          background:
            "linear-gradient(180deg, #6b7a9e 0%, #d99a63 42%, #e8b877 55%, #3a3a30 100%)",
        }}
      >
        <Heading
          level="h1"
          as="h2"
          reveal={false}
          className="px-8 pb-16 text-size-4xl leading-heading text-white md:px-10 md:pb-[70px]"
        >
          Make it yours
        </Heading>
      </div>

      <Container size="lg" className="relative z-10 -mt-16 pb-24 md:-mt-18 md:pb-28">
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
          <div className="flex min-h-[8.75rem] flex-col justify-between gap-8 rounded-xl bg-ink px-7 py-6 text-white">
            <span className="text-size-caption font-semibold text-white/70">
              Talk with an expert
            </span>
            <div className="flex items-end justify-between gap-4">
              <p className="text-size-xs font-medium leading-heading">
                Get your questions answered
              </p>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                <ArrowRight size={16} className="text-white" />
              </span>
            </div>
          </div>

          <div className="flex min-h-[8.75rem] flex-col justify-between gap-8 rounded-xl bg-orange px-7 py-6 text-white">
            <span className="text-size-caption font-semibold text-white/85">
              Start your build
            </span>
            <div className="flex items-end justify-between gap-4">
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
