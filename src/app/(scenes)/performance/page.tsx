export default function PerformanceScene() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-obsidian">
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        <p className="font-mono text-sm text-white-secondary tracking-widest uppercase">
          Restrained power
        </p>
        <h2 className="text-4xl md:text-6xl font-light tracking-[0.12em]">
          Precision in motion.
        </h2>
        <div className="flex gap-16 font-mono">
          <div className="space-y-2">
            <span className="text-4xl text-white-primary">0-100</span>
            <p className="text-sm text-white-secondary">in 3.2 seconds</p>
          </div>
          <div className="space-y-2">
            <span className="text-4xl text-white-primary">800V</span>
            <p className="text-sm text-white-secondary">architecture</p>
          </div>
          <div className="space-y-2">
            <span className="text-4xl text-white-primary">600km</span>
            <p className="text-sm text-white-secondary">range</p>
          </div>
        </div>
      </div>
    </section>
  );
}
