import { configureStore } from "@reduxjs/toolkit";
import facebookReducer from "./reducers/facebookReducer";
import numberReducer from "./reducers/numberReducer";
import productReducer from "./reducers/productReducer";

export const store = configureStore({
  reducer: {
    number: numberReducer,
    facebookReducer: facebookReducer,
    productReducer: productReducer,
  },
});
