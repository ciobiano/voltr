import { Suspense } from "react";

export default function HomePage() {
  return (
    <main>
      <Suspense fallback={<div />}>
        <section className="relative min-h-screen flex items-center justify-center bg-surface-secondary">
          <div className="max-w-4xl mx-auto px-6 space-y-8">
            <p className="text-caption text-text-secondary">VOLTR</p>
            <h1 className="text-display">
              Motion<br />without noise.
            </h1>
            <p className="text-body text-text-secondary max-w-md">
              Cinematic automotive engineering built on calm intelligence and
              architectural precision.
            </p>
          </div>
        </section>
      </Suspense>
    </main>
  );
}
