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
      })
      // When fetch is successful
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.doctors; // List of doctors
        state.currentPage = action.payload.currentPage; // Current page number
        state.totalPages = action.payload.totalPages; // Total pages
        state.totalDoctors = action.payload.total; // Total number of doctors
      })
      // When fetch fails
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default doctosSlice.reducer;
