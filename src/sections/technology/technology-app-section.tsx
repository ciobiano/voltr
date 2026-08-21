import Image from "next/image";
import { Container } from "@/components/primitives/container";
import { Label } from "@/components/primitives/label";
import { Heading } from "@/components/primitives/heading";
import { rvImages } from "@/assets/rv-images";

const APP_FEATURES = [
  {
    title: "Real-time Tracking",
    body: "Track water and power at a glance, so nothing interrupts your trip.",
    image: rvImages.systemConnectivity.src,
  },
  {
    title: "Back-Up Camera",
    body: "Keep an eye on your site and navigate tight spots with ease, right from the app.",
    image: rvImages.systemCamera.src,
  },
  {
    title: "Seamless Camp Set-up",
    body: "Auto-level your trailer, or switch from Road Mode to Camp Mode with a tap.",
    image: rvImages.systemCampSetup.src,
  },
] as const;

const HUB_ROWS = [
  {
    title: "Charging",
    body: "With a NACS charging port, you have flexible options to recharge at home or on the road.",
    image: rvImages.systemCharging.src,
  },
  {
    title: "Vehicle-to-Load Power",
    body: "Tap into stored energy, from charging your EV to powering your home in an outage.",
    image: rvImages.systemPower.src,
  },
  {
    title: "Starlink",
    body: "Stay connected even off the grid, with a built-in Starlink connection port.",
    image: rvImages.systemConnectivity.src,
  },
] as const;

export function TechnologyAppSection() {
  return (
    <section className="relative bg-surface-primary py-20 md:py-28">
      <Container size="lg" className="mx-auto max-w-[88rem] px-2 md:px-12">
        {/* Hero */}
        <div className="flex flex-col mx-auto max-w-[40rem]  items-center gap-6 text-center pb-16 md:pb-20">
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
            src={rvImages.exteriorHero.src}
            alt="Voltr App running on a tablet"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Three-up feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-5 md:pt-2 pb-20 md:pb-28">
          {APP_FEATURES.map((feature) => (
            <div key={feature.title}>
              <div className="relative w-full aspect-6/4 rounded-2xl overflow-hidden mb-2">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 92vw, 30vw"
                />
              </div>
              <h3 className="text-size-3xs font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-subhead leading-tight text-text-tertiary">
                {feature.body}
              </p>
            </div>
          ))}
        </div>

        {/* Power Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,400px)_1fr] gap-12 lg:gap-40">
          <div>
            <Label className="mb-4 text-size-3xs font-semibold text-tertiary tracking-[var(--tracking-mono)]">
              Power Hub
            </Label>
            <div
             
              className="text-size-sm  leading-heading  tracking-[var(--tracking-mono)] w-full max-w-[20vw] mb-6"
            >
              Where Form Meets Function.
            </div>
            <p className="text-md mt-4 tracking-wide  max-w-[22rem]">
              The Power Hub keeps your trailer&apos;s most essential power systems
              working together in one integrated space, so charging, backup
              power, and connectivity are always within reach.
            </p>
          </div>

          <div className="flex flex-col gap-10 md:gap-8">
            {HUB_ROWS.map((row) => (
              <div
                key={row.title}
                className="grid grid-cols-1 lg:grid-cols-[310px_1fr] gap-6 lg:gap-8"
              >
                <div className="relative w-full aspect-[300/190] rounded-lg overflow-hidden">
                  <Image
                    src={row.image}
                    alt={row.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 92vw, 310px"
                  />
                </div>
                <div>
                  <h4 className="text-size-3xs font-semibold text-text-primary mb-3">
                    {row.title}
                  </h4>
                  <p className="text-size-xs tracking-mono  text-secondary">
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
