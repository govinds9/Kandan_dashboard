// groupingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const groupingSlice = createSlice({
  name: "grouping",
  initialState: "status",
  reducers: {
    setGrouping: (state, action) => {
      localStorage.setItem("grouping", action.payload);
      return action.payload;
    },
  },
});

// Export the grouping reducer and actions
export const { setGrouping } = groupingSlice.actions;
export default groupingSlice.reducer;
