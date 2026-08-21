import Image from "next/image";
import { Container } from "@/components/primitives/container";
import { buttonVariants } from "@/design-system/variants";
import { cn } from "@/lib/utils";
import { events } from "@/sections/experience/data";

export function ExperienceEventsSection() {
  return (
    <section id="events" className="py-2xl">
      <Container size="lg" className="flex mx-auto flex-col gap-y-2xl">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-md text-center">
          <h2 className="text-heading-xl text-text-primary">Find Us on the Road</h2>
          <div
           
            className={buttonVariants({ intent: "accent", shape: "pill", size: "md" })}
          >
            View all events
          </div>
        </div>

        <div className="flex flex-col">
          {/* Column headers only make sense once the rows are columns (md+) */}
          <div className="hidden grid-cols-[1fr_auto_1fr] items-center gap-x-lg border-b border-border-subtle py-sm lg:grid">
            <span className="justify-self-start text-size-3xs text-primary">Date</span>
            <span className="justify-self-center text-size-3xs text-primary">Event</span>
            <span aria-hidden="true" />
          </div>

          <ul className="flex flex-col">
            {events.map((event) => (
              <li
                key={event.id}
                // Three columns in 375px gave the date 31px and the title 79px,
                // wrapping both to four lines. Stack them until there's room.
                className="group grid grid-cols-1 gap-y-sm border-b border-border-subtle py-lg lg:grid-cols-[1fr_auto_1fr] lg:gap-x-2xl lg:gap-y-0"
              >
                <time className="justify-self-start text-size-3xs  text-primary">
                  {event.date}
                </time>
                <div className="flex w-full mx-auto max-w-2xl gap-lg justify-self-start lg:justify-self-center">
                  <div className="relative hidden h-[8.4rem] w-[13.2rem] shrink-0 overflow-hidden rounded-lg sm:block md:h-[12.6rem] md:w-[20.6rem]">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(min-width: 768px) 15.6rem, 13.2rem"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-xs">
                    <span className="text-subhead text-text-primary">{event.title}</span>
                  </div>
                </div>
                <div className="justify-self-start lg:justify-self-end">

                <a
                  href="#"
                  className={cn(
                    buttonVariants({ intent: "accent", shape: "pill", size: "md" }),
                    "  transition-colors duration-[var(--duration-ui)] group-hover:border-orange group-hover:bg-orange group-hover:text-white",
                  )}
                >
                  Details
                </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
