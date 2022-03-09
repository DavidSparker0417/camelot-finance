import { configureStore } from "@reduxjs/toolkit";
import camleotReducer from "./camelotSlice";

export default configureStore({
  reducer: {
    camelot: camleotReducer,
  },
})