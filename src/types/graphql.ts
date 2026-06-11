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
