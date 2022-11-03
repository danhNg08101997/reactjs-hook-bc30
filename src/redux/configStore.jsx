import { configureStore } from "@reduxjs/toolkit";
import facebookReducer from "./reducers/facebookReducer";
import numberReducer from "./reducers/numberReducer";

export const store = configureStore({
  reducer: {
    number: numberReducer,
    facebookReducer: facebookReducer,
  },
});
