import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      name: "Dr. Jane Smith",
      specialty: "heart",
      city: "islamabad",
      photoUrl: "https://example.com/photo.jpg",
      description: "Experienced cardiologist with 15 years of practice.",
      contactInfo: {
        email: "jane.smith@example.com",
        phone: "+123456789",
      },
    },
    {
      id: 2,
      name: "Dr. Smith Jane",
      specialty: "kidney",
      city: "peshawar",
      photoUrl: "https://example.com/photo.jpg",
      description: "Experienced cardiologist with 15 years of practice.",
      contactInfo: {
        email: "jane.smith@example.com",
        phone: "+123456789",
      },
    },

    {
      id: 3,
      name: "Dr. Smith Jane",
      specialty: "liver",
      city: "Lahore",
      photoUrl: "https://example.com/photo.jpg",
      description: "Experienced cardiologist with 15 years of practice.",
      contactInfo: {
        email: "jane.smith@example.com",
        phone: "+123456789",
      },
    },

    {
      id: 4,
      name: "Dr. Smith Jane",
      specialty: "liver",
      city: "islamabad",
      photoUrl: "https://example.com/photo.jpg",
      description: "Experienced cardiologist with 15 years of practice.",
      contactInfo: {
        email: "jane.smith@example.com",
        phone: "+123456789",
      },
    },

    {
      id: 5,
      name: "Dr. Smith Jane",
      specialty: "General Physisan",
      city: "Lahore",
      photoUrl: "https://example.com/photo.jpg",
      description: "Experienced cardiologist with 15 years of practice.",
      contactInfo: {
        email: "jane.smith@example.com",
        phone: "+123456789",
      },
    },
  ],
  isLoading: false,
  error: null,
};

const doctosSlice = createSlice({
  name: "doctorsSlice",
  initialState,
  reducers: {},
});

export default doctosSlice.reducer;
