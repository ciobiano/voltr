export const VIEWS = [
  { id: "exterior",   label: "Exterior",   image: "/images/rv-images/features.png" },
  { id: "interior",   label: "Interior",   image: "/images/rv-images/interior.png" },
  { id: "floor-plan", label: "Floor Plan", image: "/images/rv-images/lifestyle.png" },
] as const;

export const MODES = [
  { id: "camp", label: "Camp Mode", image: "/images/rv-images/lifestyle.png" },
  { id: "road", label: "Road Mode", image: "/images/rv-images/features.png" },
] as const;

export const EXTERIOR_COLORS = [
  { id: "shade-moss",    label: "ShadeMoss",    swatch: "var(--color-shade-moss, #6b7c5a)",    tint: "rgba(100, 120, 80, 0.18)" },
  { id: "granite-braun", label: "GraniteBraun", swatch: "var(--color-granite-braun, #4a3d30)", tint: "rgba(74, 61, 48, 0.22)" },
  { id: "snow-line",     label: "SnowLine",     swatch: "var(--color-snow-line, #d8d8d8)",     tint: "rgba(220, 220, 220, 0.10)" },
] as const;

export const INTERIOR_COLORS = [
  { id: "dune",     label: "Dune",     swatch: "var(--color-dune, #c9b99a)",     tint: "rgba(201, 185, 154, 0.20)" },
  { id: "obsidian", label: "Obsidian", swatch: "var(--color-obsidian, #2a2a2a)", tint: "rgba(30, 30, 30, 0.28)" },
] as const;

export const EXTERIOR_HOTSPOTS = [
  { id: "solar",   x: 51, y: 37, label: "Solar Array",          desc: "800W integrated solar" },
  { id: "windows", x: 44, y: 46, label: "Panoramic Windows",    desc: "Full-length panoramic glass" },
  { id: "storage", x: 42, y: 58, label: "Pass-through Storage", desc: "12 cu ft weatherproof bay" },
  { id: "chassis", x: 68, y: 58, label: "EV Chassis",           desc: "100kWh lithium pack" },
] as const;

export const FLOOR_HOTSPOTS = [
  { id: "living",  x: 35, y: 45, label: "Living Area",   desc: "Reclaimed white oak flooring" },
  { id: "kitchen", x: 55, y: 50, label: "Kitchen Zone",  desc: "Honed concrete countertop" },
  { id: "bath",    x: 70, y: 42, label: "Bath",          desc: "Heated travertine tile" },
  { id: "bed",     x: 25, y: 55, label: "Sleeping Loft", desc: "Wool + foam platform bed" },
] as const;

export type ViewId         = (typeof VIEWS)[number]["id"];
export type ModeId         = (typeof MODES)[number]["id"];
export type ExteriorColorId = (typeof EXTERIOR_COLORS)[number]["id"];
export type InteriorColorId = (typeof INTERIOR_COLORS)[number]["id"];
