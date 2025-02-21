import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDoctors = createAsyncThunk(
  "doctors/fetchDoctors",
  async ({
    city,
    specialty,
    page = 1,
    limit = 5,
  }: {
    city?: string;
    specialty?: string;
    page?: number;
    limit?: number;
  }) => {
    let url = "/api/doctors";
    const params = new URLSearchParams();

    if (city) params.append("city", city);
    if (specialty) params.append("specialty", specialty);
    params.append("page", page.toString());
    params.append("limit", limit.toString());

    url += `?${params.toString()}`;

    console.log("Fetching URL:", url); // Log the URL to ensure it's correct

    const response = await fetch(url);
    if (!response.ok) {
      console.error("Failed to fetch doctors:", response.status); // Log the error status if the request fails
      throw new Error("Failed to fetch doctors");
    }

    return await response.json();
  }
);
