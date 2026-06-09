export type Region = "north" | "central" | "south";

export interface RegionData {
  key: Region;
  label: string;
  count: number;
  image: string;
  areas: string[];
}

export interface NavItem {
  label: string;
  chevron: boolean;
}
