import Image from "next/image";
import { cn } from "@/lib/utils";

export type OrderView = "exterior" | "interior";

interface OrderImageViewerProps {
  view: OrderView;
  onChangeView: (view: OrderView) => void;
}

const viewImages: Record<OrderView, { src: string; alt: string }> = {
  exterior: { src: "/images/rv-images/lifestyle.png", alt: "F2.b exterior" },
  interior: { src: "/images/rv-images/interior.png", alt: "F2.b interior" },
};

export function OrderImageViewer({ view, onChangeView }: OrderImageViewerProps) {
  const image = viewImages[view];

  return (
    <div className="sticky top-[80px]">
      <div className="relative h-[93vh] overflow-hidden rounded-2xl bg-order-warm">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 60vw"
          priority
        />

        <div className="absolute bottom-[3.5%] left-1/2 flex -translate-x-1/2 rounded-full bg-[rgba(230,230,228,0.55)] p-1 backdrop-blur-md">
          {(["exterior", "interior"] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => onChangeView(v)}
              className={cn(
                "rounded-full px-[26px] py-[9px] text-sm capitalize transition-all duration-150",
                view === v ? "bg-black text-white" : "text-[#333] hover:text-black",
              )}
            >
              {v}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
