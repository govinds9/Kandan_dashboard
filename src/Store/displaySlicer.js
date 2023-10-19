import { createSlice } from "@reduxjs/toolkit";

const displayslicer = createSlice({
  name: "display",
  initialState: false,
  reducers: {
    setdisplay: (state, action) => {
      return !state;
    },
  },
});

export const { setdisplay } = displayslicer.actions;
export default displayslicer.reducer;
