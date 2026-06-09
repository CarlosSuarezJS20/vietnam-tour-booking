import { configureStore } from "@reduxjs/toolkit";
import toursReducer from "./slices/toursSlice";
import bookingsReducer from "./slices/bookingsSlice";

export const store = configureStore({
  reducer: {
    tours: toursReducer,
    bookings: bookingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
