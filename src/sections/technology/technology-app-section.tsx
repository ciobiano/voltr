import Image from "next/image";
import { Container } from "@/components/primitives/container";
import { Label } from "@/components/primitives/label";
import { Heading } from "@/components/primitives/heading";

const APP_FEATURES = [
  {
    title: "Real-time Tracking",
    body: "Track water and power at a glance, so nothing interrupts your trip.",
    image: "/images/rv-images/features.png",
  },
  {
    title: "Back-Up Camera",
    body: "Keep an eye on your site and navigate tight spots with ease, right from the app.",
    image: "/images/rv-images/interior.png",
  },
  {
    title: "Seamless Camp Set-up",
    body: "Auto-level your trailer, or switch from Road Mode to Camp Mode with a tap.",
    image: "/images/rv-images/lifestyle.png",
  },
] as const;

const HUB_ROWS = [
  {
    title: "Charging",
    body: "With a NACS charging port, you have flexible options to recharge at home or on the road.",
    image: "/images/rv-images/features.png",
  },
  {
    title: "Vehicle-to-Load Power",
    body: "Tap into stored energy, from charging your EV to powering your home in an outage.",
    image: "/images/rv-images/interior.png",
  },
  {
    title: "Starlink",
    body: "Stay connected even off the grid, with a built-in Starlink connection port.",
    image: "/images/rv-images/lifestyle.png",
  },
] as const;

export function TechnologyAppSection() {
  return (
    <section className="relative bg-surface-primary py-20 md:py-28">
      <Container size="lg" className="mx-auto w-full px-2 md:px-12">
        {/* Hero */}
        <div className="flex flex-col mx-auto items-center gap-6 text-center pb-16 md:pb-20">
          <Label className="tracking-[var(--tracking-mono)]">Voltr App</Label>
          <Heading
            level="h1"
            as="h2"
            className="items-center justify-center text-size-2xl leading-heading tracking-mono text-stroke"
          >
            All Systems, at your Fingertips
          </Heading>
        </div>

        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
          <Image
            src="/images/rv-images/lifestyle.png"
            alt="Voltr App running on a tablet"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Three-up feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 pt-16 md:pt-20 pb-20 md:pb-28">
          {APP_FEATURES.map((feature) => (
            <div key={feature.title}>
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-5">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 92vw, 30vw"
                />
              </div>
              <h3 className="text-body font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-size-3xs leading-relaxed text-text-secondary">
                {feature.body}
              </p>
            </div>
          ))}
        </div>

        {/* Power Hub */}
        <div className="grid grid-cols-1 md:grid-cols-[minmax(280px,400px)_1fr] gap-12 md:gap-16">
          <div>
            <Label className="mb-4 font-semibold tracking-[var(--tracking-mono)]">
              Power Hub
            </Label>
            <Heading
              level="h1"
              as="h2"
              className="text-size-md text-stroke leading-heading tracking-[var(--tracking-mono)] mb-6"
            >
              Where Form Meets Function.
            </Heading>
            <p className="text-size-3xs leading-relaxed text-text-secondary max-w-[22rem]">
              The Power Hub keeps your trailer&apos;s most essential power systems
              working together in one integrated space, so charging, backup
              power, and connectivity are always within reach.
            </p>
          </div>

          <div className="flex flex-col gap-10 md:gap-8">
            {HUB_ROWS.map((row) => (
              <div
                key={row.title}
                className="grid grid-cols-1 md:grid-cols-[310px_1fr] gap-6 md:gap-10 items-center"
              >
                <div className="relative w-full aspect-[310/210] rounded-lg overflow-hidden">
                  <Image
                    src={row.image}
                    alt={row.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 92vw, 310px"
                  />
                </div>
                <div>
                  <h4 className="text-body font-semibold text-text-primary mb-3">
                    {row.title}
                  </h4>
                  <p className="text-size-3xs leading-relaxed text-text-secondary">
                    {row.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
