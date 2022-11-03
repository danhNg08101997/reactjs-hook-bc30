import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./reducers/numberReducer";

export const store = configureStore({
  reducer: {
    number: numberReducer,
  },
});
