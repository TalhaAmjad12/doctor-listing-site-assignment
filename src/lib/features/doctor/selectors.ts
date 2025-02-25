import { RootState } from "../../store";

export const getAllDoctors = (state: RootState) => state.doctor.data;
export const getTotalPages = (state: RootState) => state.doctor.totalPages;
export const getCurrentPage = (state: RootState) => state.doctor.currentPage;
export const isError = (state: RootState) => state.doctor.error;
