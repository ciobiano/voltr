import Image from "next/image";
import { Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  accessories,
  exteriorColors,
  interiorColors,
  upgrades,
  type ColorOption,
} from "@/sections/order/order-data";

interface OrderConfiguratorPanelProps {
  exteriorColor: string;
  interiorColor: string;
  onSelectExterior: (name: string) => void;
  onSelectInterior: (name: string) => void;
  selectedUpgrades: Record<string, boolean>;
  onToggleUpgrade: (name: string) => void;
  selectedAccessories: Record<string, boolean>;
  onToggleAccessory: (name: string) => void;
}

function ColorRow({
  color,
  selected,
  onSelect,
}: {
  color: ColorOption;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "flex items-center justify-between rounded-xl border-[1.5px] border-transparent bg-order-warm px-[18px] py-4 text-left",
        selected && "border-order-teal",
      )}
    >
      <div>
        <p className="mb-1.5 text-size-3xs font-medium  text-black">{color.name}</p>
        <p className="text-sm text-black/80">{color.priceLabel}</p>
      </div>
      {/* Glossy paint-chip sphere: solid swatch color + a radial highlight/shadow overlay */}
      <span className={cn("relative h-[26px] w-[26px] rounded-full", color.swatchClassName)}>
        <span
          className="absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.12)]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.45), rgba(255,255,255,0) 45%, rgba(0,0,0,0.28) 100%)",
          }}
        />
      </span>
    </button>
  );
}

export function OrderConfiguratorPanel({
  exteriorColor,
  interiorColor,
  onSelectExterior,
  onSelectInterior,
  selectedUpgrades,
  onToggleUpgrade,
  selectedAccessories,
  onToggleAccessory,
}: OrderConfiguratorPanelProps) {
  return (
    <div className="pb-10">
      {/* Heading */}
      <div className="px-0 pb-10 pt-12 text-center lg:pt-20">
        <p className="mb-3.5 text-size-3xs font-medium text-tertiary">Customization</p>
        <h1 className="text-size-md font-medium leading-[1.02] tracking-[-0.05em]">
          <span className="block  text-order-text-light">Build your</span>
          <span className="block  text-black">F2.b</span>
        </h1>
        <p className="mx-auto mt-[22px] max-w-2xl text-md font-medium leading-normal text-order-text-light">
          Every F2.b is sold and delivered directly by us. Start your order today with just a
          $500 non-refundable order fee. From there, a $20,000 production deposit is due 90
          days before your delivery window, with your final payment due the week your F2.b
          arrives.
        </p>
      </div>

      {/* Exterior colors */}
      <h2 className="mb-3.5 mt-10 text-xl font-medium text-black">Exterior</h2>
      <div className="flex flex-col gap-1">
        {exteriorColors.map((color) => (
          <ColorRow
            key={color.name}
            color={color}
            selected={exteriorColor === color.name}
            onSelect={() => onSelectExterior(color.name)}
          />
        ))}
      </div>

      {/* Interior colors */}
      <h2 className="mb-3.5 mt-[34px] text-xl font-medium text-black">Interior</h2>
      <div className="flex flex-col gap-1">
        {interiorColors.map((color) => (
          <ColorRow
            key={color.name}
            color={color}
            selected={interiorColor === color.name}
            onSelect={() => onSelectInterior(color.name)}
          />
        ))}
      </div>

      {/* Base model card — status indicator is a pill/stadium toggle, not a circle */}
      <div className="mt-[26px] rounded-2xl bg-order-warm p-2">
        <div className="rounded-xl border border-order-border bg-white px-[22px] py-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="mb-1 text-base font-medium text-black">F2.b</p>
              <p className="text-sm text-order-text-label">Included</p>
            </div>
            <span className="flex h-[34px] w-[70px] items-center justify-center rounded-full bg-order-teal">
              <Check size={16} strokeWidth={2.4} className="text-white" />
            </span>
          </div>
          <p className="mt-[18px] text-sm leading-[1.55] text-order-text-label">
            Designed to sleep up to four, the F2.b comes standard with a 77 kWh battery, 670 W
            of solar, powered stabilizers, rear camera, and F2.b Home Backup.
          </p>
        </div>
      </div>

      {/* Explore upgrades */}
      <div className="mt-1 rounded-2xl bg-order-warm px-[18px] py-[22px]">
        <h3 className="mb-3.5 text-xl font-medium text-black">Explore upgrades</h3>
        <div className="flex flex-col gap-2">
          {upgrades.map((upgrade) => {
            const added = !!selectedUpgrades[upgrade.name];
            return (
              <div
                key={upgrade.name}
                className="flex items-center justify-between gap-2.5 rounded-xl bg-white px-[18px] py-4"
              >
                <div className="min-w-0">
                  <p className="mb-[5px] text-[15px] font-medium text-black">{upgrade.name}</p>
                  <p className="text-sm text-order-text-label">{upgrade.price}</p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  {/* Collides with wrapping upgrade names in a 375px column */}
                  <span className="hidden text-[13px] text-order-text-mid sm:inline">
                    View details
                  </span>
                  <button
                    type="button"
                    onClick={() => onToggleUpgrade(upgrade.name)}
                    className={cn(
                      "inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-[9px] text-sm",
                      added ? "bg-order-teal text-white" : "bg-order-warm text-black",
                    )}
                  >
                    <span className="text-base leading-none">{added ? "✓" : "+"}</span>
                    {added ? "Added" : "Add"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add-Ons & Accessories */}
      <h2 className="mb-4 mt-10 text-[22px] font-medium text-black">Add-Ons &amp; Accessories</h2>

      <div className="mb-1 grid grid-cols-1 overflow-hidden rounded-2xl border-[1.5px] border-order-teal md:grid-cols-2">
        {/* Diagnostics (included) card */}
        <div className="flex flex-col bg-order-warm px-5 py-5">
          <p className="mb-1.5 text-base font-medium leading-[1.25] text-black">
            VOLTR Remote Diagnostics and Mobile Service
          </p>
          <p className="mb-3.5 text-sm text-order-text-label">Included</p>
          <p className="mb-[18px] text-[12.5px] leading-[1.5] text-order-text-label">
            24/7 access to our in-house service team, with many issues diagnosed and resolved
            remotely through onboard telematics. If needed, our mobile team comes to you,
            typically within 36 hours or sooner, so you can skip dealership visits, avoid
            interruptions, and get back to what you love.
          </p>
          <span className="mt-auto flex h-10 w-10 items-center justify-center rounded-full bg-order-teal">
            <Check size={16} strokeWidth={2.4} className="text-white" />
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 bg-black px-4 py-[30px] text-center text-white">
          <div className="flex items-center gap-2">
            <Image src="/svg/icons/sparkle.svg" alt="" width={10} height={10} className="invert" />
            <p className="text-[17px] font-semibold tracking-[0.34em]">VOLTR</p>
            <Image src="/svg/icons/sparkle.svg" alt="" width={10} height={10} className="invert" />
          </div>
          <div className="my-[15px] h-px w-[60%] bg-white/35" />
          <p className="mb-1 text-[18px] font-semibold">24 / 7 / 365</p>
          <p className="text-[15px] text-white">Premium Assistance</p>
        </div>
      </div>

      {/* Accessory cards — 2-col per card (content + media pane), stacked in one column,
          matching the source design's DOM shape even where we have no real product photo.
          Content area stays the standard warm beige; the blank media pane is a shade lighter,
          matching the handoff crops (order-warm vs order-warm-soft). */}
      <div className="flex flex-col gap-1">
        {accessories.map((accessory) => {
          const added = !!selectedAccessories[accessory.name];
          return (
            <div
              key={accessory.name}
              className="grid grid-cols-1 overflow-hidden rounded-2xl md:grid-cols-2"
            >
              <div className="flex flex-col bg-order-warm px-5 pb-[22px] pt-5">
                <p className="mb-2.5 text-base font-medium leading-[1.25] text-black">
                  {accessory.name}
                </p>
                <p className="mb-4 text-[12.5px] leading-[1.5] text-order-text-label">
                  {accessory.desc}
                </p>
                <p className="mb-4 text-[15px] font-medium text-black">{accessory.price}</p>
                <button
                  type="button"
                  onClick={() => onToggleAccessory(accessory.name)}
                  aria-label={added ? `Remove ${accessory.name}` : `Add ${accessory.name}`}
                  className={cn(
                    "mt-auto flex h-10 w-10 items-center justify-center rounded-full",
                    added
                      ? "bg-order-teal text-white"
                      : "bg-white text-black shadow-[inset_0_0_0_1px_var(--color-order-border)]",
                  )}
                >
                  {added ? <Check size={16} strokeWidth={2.4} /> : <Plus size={16} strokeWidth={2.4} />}
                </button>
              </div>
              {/* Empty media pane — hidden on mobile, where it would eat half
                  the card and squeeze the copy into an unreadable column. */}
              <div className="hidden min-h-full bg-order-warm-soft md:block" />
            </div>
          );
        })}
      </div>

      {/* Questions / save — plain links, no underline */}
      <div className="grid grid-cols-1 gap-6 pt-11 md:grid-cols-2">
        <div>
          <p className="mb-2 text-base font-medium text-black">Have questions?</p>
          <p className="mb-[18px] text-sm leading-[1.5] text-order-text-light">
            Talk to one of our experts to get answers or support.
          </p>
          <a href="#" className="text-sm text-black">
            Get in touch
          </a>
        </div>
        <div>
          <p className="mb-2 text-base font-medium text-black">Need a break?</p>
          <p className="mb-[18px] text-sm leading-[1.5] text-order-text-light">
            Save your configuration link and come back at any time.
          </p>
          <a href="#" className="text-sm text-black">
            Copy configuration link
          </a>
        </div>
      </div>
    </div>
  );
}
