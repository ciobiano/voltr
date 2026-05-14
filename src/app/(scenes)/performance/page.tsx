import { Section } from "@/components/section";
import { Heading } from "@/components/heading";
import { Metric } from "@/components/metric";

export default function PerformanceScene() {
  return (
    <Section label="Restrained power" surface="light">
      <Heading level="h1">Precision in motion.</Heading>
      <div className="flex gap-16">
        <Metric value="0-100" label="in 3.2 seconds" />
        <Metric value="800V" label="architecture" />
        <Metric value="600km" label="range" />
      </div>
    </Section>
  );
}
