import { createSlice } from "@reduxjs/toolkit";
import { fetchDoctors } from "./actions";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  totalDoctors: 0,
};

const doctosSlice = createSlice({
  name: "doctorsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        if (state.data) {
          state.data = state.data.map((doctor) => ({
            ...doctor,
            isLoading: true,
          }));
        }
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.doctors.map((doctor) => ({
          ...doctor,
          isLoading: false,
        }));
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.totalDoctors = action.payload.total;
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Something went wrong";
        if (state.data) {
          state.data = state.data.map((doctor) => ({
            ...doctor,
            isLoading: false,
          }));
        }
      });
  },
});

export default doctosSlice.reducer;
