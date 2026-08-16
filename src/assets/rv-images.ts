/**
 * Single source of truth for F2.b photography.
 *
 * Every image slot on the site resolves through this file. Call sites import a
 * named slot instead of hardcoding a path, so replacing the image set means
 * editing this file once rather than hunting ~75 string literals across 22
 * components.
 *
 * Slots are named for what they DEPICT, not for the file that happens to fill
 * them today. Several slots currently share the same three placeholder files —
 * that is the problem this file exists to make visible and cheap to fix. See
 * `docs/image-brief.md` for the shot list and generation prompts.
 */

export interface RvImage {
  src: string;
  alt: string;
}

/** Placeholder sources. Every slot below still points at one of these three. */
const PLACEHOLDER = {
  exterior: "/images/rv-images/lifestyle.png",
  interior: "/images/rv-images/interior.png",
  detail: "/images/rv-images/features.png",
} as const;

export const rvImages = {
  // ---------------------------------------------------------------- exterior
  exteriorHero: {
    src: PLACEHOLDER.exterior,
    alt: "F2.b parked at golden hour, full exterior profile",
  },
  exteriorTowing: {
    src: PLACEHOLDER.exterior,
    alt: "F2.b under tow behind an electric truck on an open highway",
  },
  exteriorCampsite: {
    src: PLACEHOLDER.exterior,
    alt: "F2.b set up at a remote campsite",
  },
  exteriorExpanded: {
    src: PLACEHOLDER.detail,
    alt: "F2.b with its living space expanded",
  },
  exteriorAero: {
    src: PLACEHOLDER.detail,
    alt: "F2.b aero-electric platform in profile",
  },

  // ---------------------------------------------------------------- interior
  interiorLounge: {
    src: PLACEHOLDER.interior,
    alt: "F2.b interior lounge with panoramic glazing",
  },
  interiorGalley: {
    src: PLACEHOLDER.interior,
    alt: "F2.b galley and work surface",
  },
  interiorSleeping: {
    src: PLACEHOLDER.interior,
    alt: "F2.b sleeping quarters",
  },

  // ----------------------------------------------------------------- systems
  systemSolar: {
    src: PLACEHOLDER.detail,
    alt: "Roof-mounted solar array charging the F2.b",
  },
  systemBattery: {
    src: PLACEHOLDER.interior,
    alt: "F2.b high-voltage battery pack",
  },
  systemDrivetrain: {
    src: PLACEHOLDER.detail,
    alt: "F2.b TrekDrive assisted-drive system",
  },
  systemPower: {
    src: PLACEHOLDER.exterior,
    alt: "F2.b powering appliances off-grid",
  },
  systemCharging: {
    src: PLACEHOLDER.detail,
    alt: "F2.b connected to a DC fast charger",
  },
  systemCamera: {
    src: PLACEHOLDER.interior,
    alt: "F2.b back-up camera view",
  },
  systemConnectivity: {
    src: PLACEHOLDER.exterior,
    alt: "F2.b satellite connectivity in a remote location",
  },
  systemCampSetup: {
    src: PLACEHOLDER.exterior,
    alt: "F2.b levelling and deploying at a campsite",
  },

  // --------------------------------------------------------------- editorial
  editorialFacility: {
    src: PLACEHOLDER.detail,
    alt: "VOLTR manufacturing facility",
  },
  editorialTeam: {
    src: PLACEHOLDER.exterior,
    alt: "The VOLTR team",
  },
  editorialOwnerStory: {
    src: PLACEHOLDER.exterior,
    alt: "An F2.b owner on the road",
  },
} as const satisfies Record<string, RvImage>;

export type RvImageSlot = keyof typeof rvImages;
