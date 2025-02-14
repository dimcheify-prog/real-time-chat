import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "@/6_shared/api";
import { authSlice } from "@/4_features/auth";

export const rootReducer = combineReducers({
  api: baseApi.reducer,
  auth: authSlice.reducer,
});
