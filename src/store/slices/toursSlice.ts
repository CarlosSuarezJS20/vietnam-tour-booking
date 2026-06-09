import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tour } from "@/types";
import { tours as mockTours } from "@/data/tours";

interface ToursState {
  tours: Tour[];
  selectedTour: Tour | null;
  filters: {
    maxPrice: number | null;
    maxDuration: number | null;
  };
}

const initialState: ToursState = {
  tours: mockTours,
  selectedTour: null,
  filters: {
    maxPrice: null,
    maxDuration: null,
  },
};

const toursSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
    setSelectedTour(state, action: PayloadAction<Tour | null>) {
      state.selectedTour = action.payload;
    },
    setMaxPrice(state, action: PayloadAction<number | null>) {
      state.filters.maxPrice = action.payload;
    },
    setMaxDuration(state, action: PayloadAction<number | null>) {
      state.filters.maxDuration = action.payload;
    },
    clearFilters(state) {
      state.filters = { maxPrice: null, maxDuration: null };
    },
  },
});

export const { setSelectedTour, setMaxPrice, setMaxDuration, clearFilters } =
  toursSlice.actions;
export default toursSlice.reducer;
