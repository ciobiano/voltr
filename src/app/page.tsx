import { Suspense } from "react";

export default function HomePage() {
  return (
    <main>
      <Suspense fallback={<div />}>
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-6 space-y-8">
            <p className="font-mono text-sm text-white-secondary tracking-widest uppercase">
              VOLTR
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] leading-none">
              Motion<br />without noise.
            </h1>
            <p className="text-lg text-white-secondary max-w-md leading-relaxed">
              Cinematic automotive engineering built on calm intelligence and
              architectural precision.
            </p>
          </div>
        </section>
      </Suspense>
    </main>
  );
}
