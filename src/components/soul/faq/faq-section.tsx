"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/primitives/container";
import { Heading } from "@/components/primitives/heading";
import { Paragraph } from "@/components/primitives/paragraph";
import { RevealText } from "@/components/primitives/reveal";
import { faqIconVariants } from "@/design-system/variants";

const FAQ_ITEMS = [
  {
    question: "Can the F2.B power my home in an outage?",
    answer:
      "Yes. The Aero-Electric platform's battery pack can feed power back into your home through a pass-through connection, keeping essentials running until grid power returns.",
  },
  {
    question: "What charging standard does the F2.B use?",
    answer:
      "The F2.B charges on the industry-standard CCS connector, so it's compatible with the same public fast-charging network your tow vehicle already uses.",
  },
  {
    question:
      "Why does the Aero-Electric platform transform between Road and Camp modes?",
    answer:
      "A low, slippery profile cuts drag and extends range on the highway. The moment you park, the cabin rises to open up headroom and living space — no manual setup required.",
  },
  {
    question: "Does VOLTR support bi-directional and pass-through charging?",
    answer:
      "Yes. Power can flow from the grid to the F2.B, from the F2.B back out to a home or campsite, and pass straight through to a tow vehicle — all from the same onboard system.",
  },
  {
    question: "How long can I stay off-grid with SolarSync?",
    answer:
      "Most trips run a week or more off-grid, with SolarSync automatically balancing solar input against onboard demand so you never have to think about it.",
  },
  {
    question: "How much solar capacity does the F2.B carry?",
    answer:
      "Integrated rooftop panels capture power all day long, enough to keep camp essentials — lighting, climate, refrigeration — running indefinitely in most sun conditions.",
  },
  {
    question: "What battery technology powers the F2.B?",
    answer:
      "A high-capacity lithium-ion pack, the same class of chemistry used in modern EVs, chosen for its density, longevity, and consistent output in hot and cold climates alike.",
  },
] as const;

export function FaqSection({ className }: { className?: string }) {
  return (
    <section className={cn("bg-surface-primary py-24 md:py-32", className)}>
      <Container
        size="md"
        className="flex max-w-[40rem] flex-col items-center gap-6 text-center mx-auto"
      >

        <Heading
          level="h1"
          as="h2"
          className="text-size-2xl leading-heading text-stroke tracking-mono"
        >
          Frequently Asked
          <br />
          Questions
        </Heading>
        <RevealText className="flex items-center justify-center">
          <span
            className={cn(
              "inline-block font-sans text-size-caption",
              "tracking-[var(--tracking-mono)]",
              "rounded-3xl border border-border-subtle bg-accent",
              "px-4 py-1.5",
            )}
          >
            FAQ
          </span>
        </RevealText>
      </Container>

      <Container size="md" className="mt-16 max-w-[60rem] md:mt-20 mx-auto">
        <Accordion.Root type="multiple" className="w-full">
          {FAQ_ITEMS.map((item) => (
            <Accordion.Item
              key={item.question}
              value={item.question}
              className="group border-b border-border-subtle"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between gap-6 py-6 text-left text-body font-medium text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus">
                  <span>{item.question}</span>
                  <Plus
                    className={cn(
                      "h-4 w-4 shrink-0 text-text-secondary",
                      faqIconVariants({}),
                      "group-data-[state=open]:rotate-45",
                    )}
                    aria-hidden
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <Paragraph className="pb-6">{item.answer}</Paragraph>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Container>
    </section>
  );
}
