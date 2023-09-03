import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./authSlise";
import { userReducer } from "./userSlice";
import { persistReducer } from "redux-persist";
import { filterReducer } from "./Drinks/filterSlice";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const reducer = combineReducers({
  auth: persistedReducer,
  filter: filterReducer,
  user: userReducer,
});
