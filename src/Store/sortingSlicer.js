import { createSlice } from "@reduxjs/toolkit";

const sortingSlice = createSlice({
  name: "sorting",
  initialState: "priority",
  reducers: {
    setSorting: (state, action) => {
      localStorage.setItem("ordering", action.payload);
      return action.payload;
    },
  },
});

export const { setSorting } = sortingSlice.actions;
export default sortingSlice.reducer;
