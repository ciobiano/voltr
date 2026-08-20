import type { FeatureCardData } from "@/components/primitives/feature-card";
import { rvImages } from "@/assets/rv-images";

export const technologyFeatures: FeatureCardData[] = [
  {
    name: "TrekDrive",
    title: "Twice the Efficiency.\nAll the Freedom.",
    image: rvImages.systemDrivetrain.src,
    detailImage: rvImages.systemDrivetrain.src,
    description:
      "The TrekDrive™ system is where intelligence and muscle come together. TrekDrive pairs intelligent vehicle assist technology with a proprietary smart hitch, sensing force between trailer and tow vehicle to tap into extra power on climbs and apply controlled braking on descents — for maximum travel efficiency.",
  },
  {
    name: "CampQuiet",
    title: "Quiet Comes Standard.",
    image: rvImages.exteriorCampsite.src,
    detailImage: rvImages.exteriorCampsite.src,
    description:
      "CampQuiet™ isolates and dampens road and generator noise at the source, so campsites stay campsites. Acoustic insulation throughout the cabin keeps the outside out, letting you hear the fire crackle instead of the highway.",
  },
  {
    name: "Aero-Electric",
    title: "Built to Move.\nBuilt to Transform.",
    image: rvImages.exteriorExpanded.src,
    detailImage: rvImages.exteriorExpanded.src,
    description:
      "The Aero-Electric platform reshapes itself for the road ahead — low and slippery at highway speed, tall and livable at camp. A fully electric drivetrain means fewer moving parts, less maintenance, and instant torque wherever you point it.",
  },
  {
    name: "SolarSync",
    title: "Power From\nAbove.",
    image: rvImages.systemSolar.src,
    detailImage: rvImages.systemSolar.src,
    description:
      "SolarSync™ keeps the battery topped up wherever the sun is, automatically balancing panel input with onboard demand. No manual switching, no guesswork — just power that keeps pace with your trip.",
  },
];
