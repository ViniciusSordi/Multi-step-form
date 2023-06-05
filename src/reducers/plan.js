import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "plan",
  initialState: {
    name: "",
    price: 0,
    duration: "Monthly",
    addOns: [],
  },
  reducers: {
    updatePlan: (state, action) => {
      state.name = action.payload;
    },
    updatePrice: (state, action) => {
      state.price = action.payload;
    },
    updateDuration: (state, action) => {
      state.duration = action.payload;
    },
    updateAddOns: (state, action) => {
      state.addOns = action.payload;
    },
  },
});

export const {
  updatePlan,
  updatePrice,
  updateDuration,
  updateAddOns,
} = slice.actions;
export default slice.reducer;
