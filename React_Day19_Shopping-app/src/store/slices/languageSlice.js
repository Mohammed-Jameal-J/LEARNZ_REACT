import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: localStorage.getItem("selectedLanguage") || "en",
  location: localStorage.getItem("selectedLocation") || "india",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem("selectedLanguage", action.payload);
    },
    setLocation: (state, action) => {
      state.location = action.payload;
      localStorage.setItem("selectedLocation", action.payload);
    },
  },
});

export const { setLanguage, setLocation } = languageSlice.actions;
export default languageSlice.reducer;
