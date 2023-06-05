import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "page",
  initialState: 1,
  reducers: {
    nextPage: (state) => {
      return state + 1;
    },
    previousPage: (state) => {
      return state - 1;
    },
    customPage: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { nextPage, previousPage, customPage } = slice.actions;
export default slice.reducer;
