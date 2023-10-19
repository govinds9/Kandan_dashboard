import { configureStore } from "@reduxjs/toolkit";
import apiDataReducer from "./apislicer";
import groupingReducer from "./groupingSlicer";
import sortingReducer from "./sortingSlicer";
import displayReducer from "./displaySlicer";

const store = configureStore({
  reducer: {
    apiData: apiDataReducer,
    grouping: groupingReducer,
    sorting: sortingReducer,
    display: displayReducer,
  },
});

export default store;
