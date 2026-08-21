import { Heading } from "@/components/primitives/heading";

const SPEC_ROWS = [
  {
    title: "Industry-Leading Battery Storage",
    body: "High-capacity lithium-ion batteries power camp essentials for up to a week off-grid — quiet, clean, and without a single drop of fuel.",
  },
  {
    title: "SunRoof Solar Panels",
    body: "Integrated rooftop solar captures energy all day long, keeping your systems running and your footprint light.",
  },
  {
    title: "Scalable Power Delivery",
    body: "From charging your phone to charging your tow vehicle, enjoy reliable power without the noise or hassle of a generator.",
  },
] as const;

// Nested inside TechnologyEnergyFlowSection — no own <section>/Container wrapper.
export function TechnologySpecsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-36 items-start mt-20 md:py-20 md:mt-32">
      <Heading
        level="h1"
        as="h2"
        className="text-size-md text-stroke font-display leading-heading tracking-[var(--tracking-mono)]"
      >
        The Engineered
        <br />
        Ease of Our Platform
      </Heading>

      <div>
        {SPEC_ROWS.map((row) => (
          <div
            key={row.title}
            className="grid grid-cols-1 lg:grid-cols-[minmax(180px,15rem)_1fr] gap-4 lg:gap-8 border-t border-border-subtle py-6"
          >
            <h4 className="text-body font-medium text-text-primary">{row.title}</h4>
            <p className="text-size-3xs lg:w-[20vw] leading-relaxed text-text-secondary">{row.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
