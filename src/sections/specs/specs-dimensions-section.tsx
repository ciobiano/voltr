import { Container } from "@/components/primitives/container";
import { dimensionLegend, statCards } from "@/sections/specs/specs-data";

const legendColumns = [
  dimensionLegend.slice(0, 2),
  dimensionLegend.slice(2, 4),
  dimensionLegend.slice(4, 6),
];

export function SpecsDimensionsSection() {
  return (
    <section className="bg-surface-primary">
      <Container size="lg" className="pb-xs">
        <div className="rounded-2xl bg-ink px-lg pb-xl pt-xl md:px-xl">
          <svg
            viewBox="0 0 1120 420"
            className="block h-auto w-full"
            aria-hidden="true"
          >
            {/* Front elevation */}
            <g stroke="#5c5c5c" strokeWidth="1.4" fill="none">
              <path d="M40 90 L140 40 L240 90 L240 300 L40 300 Z" />
              <rect x="55" y="110" width="55" height="120" rx="3" />
              <rect x="118" y="110" width="55" height="120" rx="3" />
              <rect x="181" y="110" width="45" height="120" rx="3" />
              <rect x="90" y="255" width="70" height="16" rx="2" />
              <circle cx="75" cy="300" r="14" />
              <circle cx="205" cy="300" r="14" />
            </g>
            <g stroke="var(--color-orange)" strokeWidth="1" fill="none">
              <line x1="18" y1="90" x2="18" y2="300" />
              <line x1="12" y1="90" x2="24" y2="90" />
              <line x1="12" y1="300" x2="24" y2="300" />
            </g>
            <text
              x="8"
              y="200"
              fill="#c9c4b8"
              fontSize="13"
              transform="rotate(-90 8 200)"
            >
              A
            </text>
            <g stroke="#c9c4b8" strokeWidth="1" fill="none">
              <line x1="40" y1="320" x2="240" y2="320" />
              <line x1="40" y1="314" x2="40" y2="326" />
              <line x1="240" y1="314" x2="240" y2="326" />
            </g>
            <text x="132" y="340" fill="#c9c4b8" fontSize="13">
              B
            </text>

            {/* Side elevation */}
            <g stroke="#5c5c5c" strokeWidth="1.4" fill="none">
              <path d="M330 210 L360 190 L400 130 L470 100 L780 100 L860 150 L960 150 L1010 190 L1010 260 L330 260 Z" />
              <line x1="330" y1="180" x2="1010" y2="180" />
              <rect x="380" y="115" width="70" height="55" rx="4" />
              <rect x="465" y="112" width="90" height="58" rx="4" />
              <rect x="570" y="112" width="90" height="58" rx="4" />
              <rect x="675" y="112" width="90" height="58" rx="4" />
              <rect x="335" y="200" width="18" height="45" />
              <rect x="600" y="195" width="70" height="35" rx="3" />
              <rect x="720" y="205" width="55" height="35" rx="3" />
              <rect x="850" y="200" width="40" height="45" rx="3" />
              <circle cx="600" cy="260" r="26" />
              <circle cx="660" cy="260" r="26" />
              <path d="M330 245 L360 260" stroke="var(--color-orange)" />
            </g>
            <g stroke="#c9c4b8" strokeWidth="1" fill="none">
              <line x1="308" y1="100" x2="308" y2="260" />
              <line x1="302" y1="100" x2="314" y2="100" />
              <line x1="302" y1="260" x2="314" y2="260" />
            </g>
            <text x="298" y="185" fill="#c9c4b8" fontSize="13">
              C
            </text>
            <g stroke="#c9c4b8" strokeWidth="1" fill="none">
              <line x1="330" y1="280" x2="1010" y2="280" />
              <line x1="330" y1="274" x2="330" y2="286" />
              <line x1="1010" y1="274" x2="1010" y2="286" />
            </g>
            <text x="662" y="300" fill="#c9c4b8" fontSize="13">
              D
            </text>
            <text x="360" y="245" fill="#c9c4b8" fontSize="13">
              E
            </text>
            <text x="960" y="248" fill="#c9c4b8" fontSize="13">
              F
            </text>
          </svg>

          <div className="mt-md grid grid-cols-1 gap-md border-t border-white/10 pt-lg md:grid-cols-3">
            {legendColumns.map((column, i) => (
              <div key={i} className="flex flex-col gap-sm">
                {column.map((item) => (
                  <p key={item.code} className="text-size-3xs text-white/70">
                    {item.code}: {item.label} - {item.value}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Container size="lg" className="pb-3xl">
        <div className="mt-xs grid grid-cols-2 gap-xs md:grid-cols-4">
          {statCards.map((card) => (
            <div
              key={card.label}
              className="relative min-h-[8.5rem] bg-surface-secondary px-lg py-lg"
            >
              <span className="absolute left-md top-md text-xs text-border-subtle">+</span>
              <span className="absolute right-md top-md text-xs text-border-subtle">+</span>
              <span className="absolute bottom-md left-md text-xs text-border-subtle">+</span>
              <span className="absolute bottom-md right-md text-xs text-border-subtle">+</span>
              <h3 className="mb-xl text-size-2xs font-semibold text-text-primary">
                {card.value}
              </h3>
              <p className="text-size-body text-text-secondary">{card.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
