export interface Tour {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  duration: number;
  durationUnit: "day" | "days";
  difficulty: "easy" | "moderate" | "challenging";
  highlights: string[];
  locations: string[];
  imageUrl: string;
  rating: number;
  reviewCount: number;
}

export interface Booking {
  id: string;
  tourId: string;
  tourName: string;
  name: string;
  email: string;
  date: string;
  participants: number;
  totalPrice: number;
  submittedAt: string;
}

export interface BookingFormState {
  tourId: string | null;
  name: string;
  email: string;
  date: string;
  participants: number;
  status: "idle" | "submitted";
}
