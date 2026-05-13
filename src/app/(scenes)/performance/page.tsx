export default function PerformanceScene() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-surface-primary">
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        <p className="text-caption text-text-secondary">Restrained power</p>
        <h2 className="text-heading">Precision in motion.</h2>
        <div className="flex gap-16">
          <div className="space-y-2">
            <span className="text-metric text-text-primary">0-100</span>
            <p className="text-caption text-text-secondary">in 3.2 seconds</p>
          </div>
          <div className="space-y-2">
            <span className="text-metric text-text-primary">800V</span>
            <p className="text-caption text-text-secondary">architecture</p>
          </div>
          <div className="space-y-2">
            <span className="text-metric text-text-primary">600km</span>
            <p className="text-caption text-text-secondary">range</p>
          </div>
        </div>
      </div>
    </section>
  );
}
