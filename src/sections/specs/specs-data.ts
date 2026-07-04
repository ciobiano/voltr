export interface SpecRowData {
  label: string;
  value: string;
}

export const statCards: SpecRowData[] = [
  { label: "Battery Size", value: "77 kWh" },
  { label: "Dry Weight", value: "7150 lbs" },
  { label: "Solar", value: "Up to 1.8 kW" },
  { label: "F2.b Home Backup", value: "Standard" },
];

export const dimensionLegend: { code: string; label: string; value: string }[] = [
  { code: "A", label: "Road Mode Height", value: "6' 11\"" },
  { code: "B", label: "Width", value: "8' 5\"" },
  { code: "C", label: "Camp Mode Height", value: "10' 1\"" },
  { code: "D", label: "Length", value: "26' 7\"" },
  { code: "E", label: "Departure Angle", value: "9 degrees" },
  { code: "F", label: "Ground Clearance", value: "12\"" },
];

export const exteriorRows: SpecRowData[] = [
  { label: "Length w/ AeroHub", value: "26' 7\"" },
  { label: "Exterior width", value: "8' 5\"" },
  { label: "Exterior height (Road Mode)", value: "6' 11\"" },
  { label: "Exterior height (Camp Mode)", value: "10' 1\"" },
  { label: "Interior length", value: "22' 7\"" },
  { label: "Interior height", value: "7' 5\"" },
  { label: "Interior width", value: "7' 4\"" },
  { label: "Ground clearance", value: "12\"" },
  { label: "Departure angle", value: "9 degrees" },
  { label: "Axles", value: "2" },
  { label: "Wheel base", value: "30\"" },
  { label: "Dry weight", value: "7150 lbs" },
  { label: "GVWR", value: "8400 lbs" },
  { label: "Cargo weight", value: "1250 lbs" },
];

export const electricRows: SpecRowData[] = [
  { label: "Battery capacity", value: "77 kWh" },
  { label: "Solar array", value: "670 W (base)" },
  { label: "Charging standard", value: "NACS" },
  { label: "Max charging speed", value: "155 kW" },
  { label: "Charging time (155 kW)", value: "1 hour" },
  { label: "Home backup power", value: "10 kW" },
  { label: "Backup camera", value: "Standard" },
];

export const livingRows: SpecRowData[] = [
  { label: "Sleep capacity", value: "Up to 4 adults comfortably." },
  {
    label: "Kitchen",
    value:
      "Intuitive and efficient, combining a dual induction cooktop and microwave convection oven with generous counter space on one side and a custom sink with even more workspace on the other, plus ample drawers and storage to keep essentials organized for meal prep and cleanup.",
  },
  {
    label: "Bathroom",
    value:
      "Built with durable, quick-drying, easy-to-clean materials, the bathroom uses a space-saving layout where the shower, sink, and toilet work together to maximize room. Keep the space open for rinsing off kids or a dog, or block off the sink and toilet to keep them dry. The result is a bathroom that feels unusually spacious for a trailer this size.",
  },
  {
    label: "Windows",
    value:
      "270-degree panoramic views combine shatter-resistant polycarbonate and automotive safety glass. Every large window includes blackout curtains, and the opening windows feature line-tracked bug screens.",
  },
  {
    label: "Materials",
    value:
      "Interior materials strike a balance of durability, longevity and a more thoughtful footprint, pairing Polygood bathroom countertops made from 100% recycled polystyrene with BYBORRE 3D-knit upholstery that blends recycled polyester and wool for comfort and natural odor resistance, plus counter surfaces featuring a self-healing finish for long-lasting wear.",
  },
  {
    label: "AirRight Climate Control",
    value:
      "AirRight is an integrated split heat pump system that delivers heating and air conditioning at 20,000 BTUs and 500 CFM, with airflow routed through a wraparound seat-back vent for precise, even climate control throughout the cabin.",
  },
  { label: "Water tanks (Fresh/Grey/Black)", value: "50 / 35 / 30 gallons" },
];

export interface UpgradeCardData {
  title: string;
  rows: SpecRowData[];
}

export const upgradeColumnLeft: UpgradeCardData[] = [
  {
    title: "TrekDrive",
    rows: [
      {
        label: "Details",
        value:
          "TrekDrive combines an onboard electric drive module on the rear axle with an intelligent hitch to respond instantly to acceleration, braking, and grades, delivering a calmer tow and up to double the range and efficiency.",
      },
    ],
  },
  {
    title: "Effortless Package",
    rows: [
      {
        label: "Auto Leveling System",
        value:
          "Equips the F2.b with a powered tongue jack, two leveling jacks, and one powered c-jack. Auto-level with one-tap in the Atlas tablet or utilize the easy-to-read, interactive touch screen to operate all leveling jacks and stabilizers manually or just press OK and walk away.",
      },
      {
        label: "Motorized Awning",
        value:
          "The 10-foot Girard GG 750 is a compact lateral-arm motorized awning with an integrated full-length LED light strip. Control it directly from the Atlas tablet or manually.",
      },
      {
        label: "Deployable Exterior Light",
        value:
          "Telescoping, tripod-mounted area light that extends to 10 ft, delivers up to 2,000 lumens, and lights an 80-ft diameter area with app-controlled white, amber, and red modes for camp, driveway, or emergency lighting.",
      },
    ],
  },
  {
    title: "Summit Sleeper",
    rows: [
      {
        label: "Details",
        value:
          "Ceiling-mounted bed that lowers in seconds via the Atlas Tablet and includes an integrated LED light, and a tuckaway ladder with support struts for secure setup.",
      },
      { label: "Length", value: "78\"" },
      { label: "Width", value: "39\"" },
      { label: "Height", value: "29\"" },
      { label: "Weight Capacity", value: "300 lbs" },
    ],
  },
];

export const upgradeColumnRight: UpgradeCardData[] = [
  {
    title: "Solar+",
    rows: [
      {
        label: "Details",
        value:
          "Solar+ nearly triples the solar to 1.8 kW on your F2.b, for faster daytime replenishment and stronger off-grid self-sufficiency.",
      },
    ],
  },
  {
    title: "Elevated Living Package",
    rows: [
      {
        label: "Dishwasher",
        value:
          "An integrated, drawer-style dishwasher with Knock to Pause, multiple wash programs (including Quick and Sanitize), and quiet performance. Proven to consume less water than washing dishes by hand.",
      },
      {
        label: "Multi-Stage Water Filtration",
        value:
          "Two-stage inline RV water filtration system with hospital-grade 0.2-micron \"absolute\" filtration and a 4.5 GPM flow rate for cleaner, better-tasting water.",
      },
      {
        label: "Four-layer Memory Foam Mattress",
        value:
          "Dual phase-change, quick-recovery memory foam mattress that resists sinking and bottoming out, providing a cooler feel, exceptional pressure relief, and premium support.",
      },
    ],
  },
];
