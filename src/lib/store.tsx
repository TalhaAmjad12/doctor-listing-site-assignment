import { configureStore } from "@reduxjs/toolkit";
import doctosSlice from "./features/doctor/DoctorSlice";

export const createStore = () => {
  return configureStore({
    reducer: {
      doctor: doctosSlice,
    },
  });
};

// types
export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
