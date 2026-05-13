import { cn } from "@/lib/utils";
import { sectionVariants } from "./variants";
import { Label } from "./label";
import { Container } from "./container";

interface SectionProps {
  label?: string;
  surface?: "light" | "warm" | "atmospheric";
  children: React.ReactNode;
  className?: string;
}

export function Section({ label, surface = "warm", children, className }: SectionProps) {
  return (
    <section className={cn(sectionVariants({ surface }), className)}>
      <Container className="space-y-6">
        {label && <Label>{label}</Label>}
        {children}
      </Container>
    </section>
  );
}
