/** @format */

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./store/shopping-cart/cartSlice";
import cartUiSlice from "./store/shopping-cart/cartUiSlice";
import logger from "redux-logger";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
    user: userReducer,
    middleware: [thunk, logger],
  },
});

export default store;
