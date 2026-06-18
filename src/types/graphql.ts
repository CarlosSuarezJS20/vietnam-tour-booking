export interface TourCategory {
  id: string;
  slug: string;
  label: string;
}

export interface CarouselTour {
  id:         string;
  title:      string;
  imageUrl:   string;
  duration:   string;
  price:      string;
  categories: TourCategory[];
}

export interface City {
  id: string;
  name: string;
}

export interface Region {
  id: string;
  key: string;
  label: string;
  image: string;
  cities: City[];
}

export interface Cruise {
  id:          string;
  title:       string;
  imageUrl:    string;
  description: string;
  itinerary:   string;
  duration:    string;
  price:       string;
  sourceUrl:   string;
}

export interface SearchTour {
  id:           string;
  title:        string;
  description:  string;
  itinerary:    string;
  imageUrl:     string;
  duration:     string;
  price:        string;
  featuredTour: boolean;
  cities:       (City & { region: { id: string; key: string; label: string } })[];
  categories:   TourCategory[];
  _type:        "tour";
  cityNames?:   string;
}

export interface SearchCruise {
  id:          string;
  title:       string;
  description: string;
  itinerary:   string;
  imageUrl:    string;
  duration:    string;
  price:       string;
  sourceUrl:   string;
  _type:       "cruise";
}

export type SearchItem = SearchTour | SearchCruise;

export interface SearchFilters {
  type:       "all" | "tour" | "cruise";
  categories: string[];
  region:     string;
  minPrice:   number;
  maxPrice:   number;
  duration:   string;
}

export interface ListingTour {
  __typename: "Tour";
  id:          string;
  title:       string;
  imageUrl:    string;
  duration:    string;
  price:       string;
  featuredTour: boolean;
  onSale:      boolean;
  saleDiscountPercentage: number | null;
  cities:      { id: string; name: string; region: { id: string; key: string; label: string } }[];
  categories:  { id: string; slug: string; label: string }[];
}

export interface ListingCruise {
  __typename: "Cruise";
  id:          string;
  title:       string;
  imageUrl:    string;
  duration:    string;
  price:       string;
  description: string;
  sourceUrl:   string;
  onSale:      boolean;
  saleDiscountPercentage: number | null;
}

export type ListingProduct = ListingTour | ListingCruise;

export interface ProductPageInfo {
  hasNextPage:     boolean;
  hasPreviousPage: boolean;
  startCursor:     string | null;
  endCursor:       string | null;
}

export interface ProductEdge {
  cursor: string;
  node:   ListingProduct;
}

export interface ProductConnection {
  edges:    ProductEdge[];
  pageInfo: ProductPageInfo;
  total:    number;
}

export interface ListingFilters {
  types:      string[];
  categories: string[];
  regions:    string[];
  cities:     string[];
  minPrice:   number | null;
  maxPrice:   number | null;
  deals:      boolean;
}

export interface GqlProductFilters {
  types?:      string[];
  categories?: string[];
  regions?:    string[];
  cities?:     string[];
  minPrice?:   number;
  maxPrice?:   number;
  deals?:      boolean;
}

export const DEFAULT_LISTING_FILTERS: ListingFilters = {
  types:      [],
  categories: [],
  regions:    [],
  cities:     [],
  minPrice:   null,
  maxPrice:   null,
  deals:      false,
};

export interface GqlCartItem {
  uid:         string;
  productType: string;
  date:        string;
  time:        string;
  partySize:   number;
  price:       number;
  product:     ListingTour | ListingCruise;
}

export interface GqlCart {
  items:      GqlCartItem[];
  itemCount:  number;
  totalPrice: number;
}

export interface CartItemInput {
  productId:   string;
  productType: string;
  date:        string;
  time:        string;
  partySize:   number;
  price:       number;
}

export interface ProductDetailTour {
  __typename?: "Tour";
  id:          string;
  title:       string;
  description: string;
  itinerary:   string;
  imageUrl:    string;
  duration:    string;
  price:       string;
  featuredTour: boolean;
  onSale:      boolean;
  saleDiscountPercentage: number | null;
  cities:      { id: string; name: string; region: { id: string; key: string; label: string } }[];
  categories:  { id: string; slug: string; label: string }[];
}

export interface ProductDetailCruise {
  __typename?: "Cruise";
  id:          string;
  title:       string;
  description: string;
  itinerary:   string;
  imageUrl:    string;
  duration:    string;
  price:       string;
  sourceUrl:   string;
  onSale:      boolean;
  saleDiscountPercentage: number | null;
}

export type ProductDetail = ProductDetailTour | ProductDetailCruise;

export interface FeaturedTour {
  id:           string;
  title:        string;
  description:  string;
  imageUrl:     string;
  duration:     string;
  price:        string;
  cities:       (City & { region: { label: string } })[];
  categories:   TourCategory[];
  featuredTour: boolean;
}
