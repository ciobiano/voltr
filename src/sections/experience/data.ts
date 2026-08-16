import { rvImages } from "@/assets/rv-images";
export interface FieldnoteItem {
  id: string;
  handle: string;
  title: string;
  caption: string;
  thumbnail: string;
  duration: string;
}

export interface CloserLookItem {
  id: string;
  title: string;
  handle: string;
  quote: string;
  description: string;
  thumbnail: string;
}

export interface EventItem {
  id: string;
  date: string;
  title: string;
  location: string;
  image: string;
}

export interface TourOption {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  image: string;
}

const images = [
  rvImages.interiorLounge.src,
  rvImages.exteriorCampsite.src,
  rvImages.systemSolar.src,
];

export const fieldnotes: FieldnoteItem[] = [
  {
    id: "fieldnote-1",
    handle: "@VOLTR",
    title: "You've never seen an EV trailer like the F2.b",
    caption: "A first look at the build that's rewriting what towing feels like.",
    thumbnail: images[0],
    duration: "0:42",
  },
  {
    id: "fieldnote-2",
    handle: "@offgrid_overland",
    title: "Why the F2.b stole the show at the trailhead",
    caption: "We brought the F2.b out for a weekend and it turned every head in the lot.",
    thumbnail: images[1],
    duration: "1:05",
  },
  {
    id: "fieldnote-3",
    handle: "@VOLTR",
    title: "This is what real-world towing looks like",
    caption: "A 200-mile loop with mixed terrain, real conditions, and charge to spare.",
    thumbnail: images[2],
    duration: "0:58",
  },
  {
    id: "fieldnote-4",
    handle: "@roadswest",
    title: "The electric road trip, three days in",
    caption: "Public lands, scenic drives, and a trailer that never slowed us down.",
    thumbnail: images[0],
    duration: "1:22",
  },
];

export const closerLookItems: CloserLookItem[] = [
  {
    id: "closer-1",
    title: "VOLTR Owner Stories: First Season on the Road",
    handle: "@Volt-R",
    quote: "“It changed the economics of how we travel.”",
    description:
      "As F2.b units make their way into the real world, they start to reflect the people behind them. This is our Owner Story series — a look at who's behind the hitch and where the road takes them next.",
    thumbnail: images[1],
  },
  {
    id: "closer-2",
    title: "VOLTR in the Wild: Camping Across Florida in an Electric RV",
    handle: "@Volt-R",
    quote: "Off-grid, by electric trailer.",
    description:
      "A week away from shore power, running entirely on the F2.b's onboard system — no generator, no compromise.",
    thumbnail: images[2],
  },
  {
    id: "closer-3",
    title: "VOLTR: Go Further.",
    handle: "@Volt-R",
    quote: "Built for the distance.",
    description:
      "An inside look at the engineering behind the F2.b's range, and what it means for how far you can actually go.",
    thumbnail: images[0],
  },
];

export const events: EventItem[] = [
  {
    id: "event-1",
    date: "Aug 14-16, 2026",
    title: "Overland Expo West",
    location: "Flagstaff, AZ",
    image: images[0],
  },
  {
    id: "event-2",
    date: "Sep 4-7, 2026",
    title: "Pacific Northwest",
    location: "Bend, OR",
    image: images[1],
  },
  {
    id: "event-3",
    date: "Oct 2-4, 2026",
    title: "Electric Adventure Summit",
    location: "Denver, CO",
    image: images[2],
  },
];

export const tourOptions: TourOption[] = [
  {
    id: "tour-showroom",
    title: "Colorado Showroom",
    description:
      "Schedule a tour of the F2.b at our Broomfield, CO showroom, where you can experience it in person and see our production facility up close.",
    ctaLabel: "Book a tour",
    href: "#",
    image: images[0],
  },
  {
    id: "tour-depot",
    title: "San Francisco Depot",
    description:
      "Schedule a tour of the F2.b at our South San Francisco facility and spend time exploring the design, layout, and technology up close.",
    ctaLabel: "Book a tour",
    href: "#",
    image: images[1],
  },
  {
    id: "tour-virtual",
    title: "Can't make it in person?",
    description:
      "We offer virtual tours of the F2.b, so you can explore it from wherever you are, guided by a member of the VOLTR team.",
    ctaLabel: "Book a virtual tour",
    href: "#",
    image: images[2],
  },
];
