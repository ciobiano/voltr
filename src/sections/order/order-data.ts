export interface ColorOption {
  name: string;
  priceLabel: string;
  swatchClassName: string;
}

export const exteriorColors: ColorOption[] = [
  { name: "ShadeMoss", priceLabel: "Included", swatchClassName: "bg-shade-moss" },
  { name: "SnowLine", priceLabel: "$5,000", swatchClassName: "bg-snow-line" },
  { name: "GraniteBraun", priceLabel: "$5,000", swatchClassName: "bg-granite-braun" },
];

export const interiorColors: ColorOption[] = [
  { name: "Dune", priceLabel: "Included", swatchClassName: "bg-dune" },
  { name: "Obsidian", priceLabel: "$5,000", swatchClassName: "bg-obsidian" },
];

export interface UpgradeOption {
  name: string;
  price: string;
}

export const upgrades: UpgradeOption[] = [
  { name: "TrekDrive", price: "$20,000" },
  { name: "Elevated Living Package", price: "$12,500" },
  { name: "Solar+", price: "$10,000" },
  { name: "Summit Sleeper", price: "$10,000" },
  { name: "Effortless Package", price: "$9,000" },
];

export interface AccessoryOption {
  name: string;
  desc: string;
  price: string;
}

export const accessories: AccessoryOption[] = [
  {
    name: "Trailer Valet",
    desc: "Precise, effortless, remote-controlled maneuvering of RVs, boats, and more with a 9,000 lb towing capacity. Each F2.b order qualifies for this unique pricing through our Trailer Valet partnership.",
    price: "$3,250",
  },
  {
    name: "4K Projector and Screen",
    desc: "Ultra-portable 4K UHD smart projector with built-in Google TV and premium sound, delivering up to 1,000 lumens and paired with an included 80-inch retractable screen. Mounts cleanly to the VOLTR gear rail with no extra hardware required.",
    price: "$1,500",
  },
  {
    name: "Adventure Bags (Set of 4)",
    desc: "Built to fit flush in the storage console with no unpacking required.",
    price: "$800",
  },
  {
    name: "Additional Premium Roadside Support (3-Year Plan)",
    desc: "From flat tires to towing, get priority access to in-network technicians, 100-mile towing, and emergency medical travel coverage for your family across North America.",
    price: "$750",
  },
  {
    name: "Spare Wheel and Tire",
    desc: "Stay prepared for the unexpected, wherever the road leads.",
    price: "$500",
  },
  {
    name: "Custom Bedding Kit",
    desc: "Comforter, sleeping bag, and fitted sheets — ready for any kind of stay.",
    price: "$500",
  },
];
