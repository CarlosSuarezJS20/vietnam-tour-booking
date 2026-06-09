import { NavItem, RegionData } from "@/types";

export const tourLinks: string[] = [
  "Vietnam Private Tours",
  "Vietnam Luxury Tours",
  "Vietnam Beach Vacation",
  "Vietnam Family Holiday",
  "Vietnam Honeymoon Tours",
  "Vietnam Tours For Seniors",
  "Vietnam War Memories Tours",
  "Vietnam Tour Packages",
  "Vietnam Small Group Tours",
  "Vietnam Cultural Tours",
  "Vietnam Day Trips",
];

export const regions: RegionData[] = [
  {
    key: "north",
    label: "North Vietnam",
    count: 12,
    image: "https://asiaeyestravel.com/uploads/source/nhung/mai-chau/thai-stil-house.webp",
    areas: ["Hanoi", "Ha Long Bay", "Sapa", "Ninh Binh"],
  },
  {
    key: "central",
    label: "Central Vietnam",
    count: 9,
    image: "https://asiaeyestravel.com/uploads/source/blog/phuquoc/970x650/vietnam-beach-holiday-deals.webp",
    areas: ["Da Nang", "Hoi An", "Hue", "Kham Phu"],
  },
  {
    key: "south",
    label: "South Vietnam",
    count: 8,
    image: "https://asiaeyestravel.com/uploads/source/nhung/hue-sightseeing-with-ancient-costumes-with-ancient-costumes/vong-canh-hill.webp",
    areas: ["Ho Chi Minh City", "Mekong Delta", "Phu Quoc", "Can Tho"],
  },
];

export const navItems: NavItem[] = [
  { label: "Tours & Activities", chevron: true },
  { label: "Destinations", chevron: true },
  { label: "Blog", chevron: false },
  { label: "Deals", chevron: false },
];
