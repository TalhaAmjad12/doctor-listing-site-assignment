import { configureStore } from "@reduxjs/toolkit";
import doctorsSlice from "./features/doctor/slice";

export const createStore = () => {
  return configureStore({
    reducer: {
      doctor: doctorsSlice,
    },
  });
};

// types
export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
