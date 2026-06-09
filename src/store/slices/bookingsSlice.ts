import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Booking, BookingFormState } from "@/types";

interface BookingsState {
  currentBooking: BookingFormState;
  submittedBookings: Booking[];
}

const initialFormState: BookingFormState = {
  tourId: null,
  name: "",
  email: "",
  date: "",
  participants: 1,
  status: "idle",
};

const initialState: BookingsState = {
  currentBooking: initialFormState,
  submittedBookings: [],
};

const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    setTourId(state, action: PayloadAction<string>) {
      state.currentBooking.tourId = action.payload;
      state.currentBooking.status = "idle";
    },
    updateField(
      state,
      action: PayloadAction<Partial<Omit<BookingFormState, "tourId" | "status">>>
    ) {
      Object.assign(state.currentBooking, action.payload);
    },
    submitBooking(state, action: PayloadAction<Booking>) {
      state.submittedBookings.push(action.payload);
      state.currentBooking.status = "submitted";
    },
    resetForm(state) {
      state.currentBooking = initialFormState;
    },
  },
});

export const { setTourId, updateField, submitBooking, resetForm } =
  bookingsSlice.actions;
export default bookingsSlice.reducer;
