import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthPayload, UserTypes } from "./types";
import { RootState } from "@/1_app/appStore";
import { authApi } from "../api/authApi";

interface InitialStateTypes {
  accessToken: string;
  user: UserTypes;
  isAuthorized: boolean;
}

const initialState: InitialStateTypes = {
  accessToken: null,
  user: null,
  isAuthorized: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = "";
      state.isAuthorized = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action: PayloadAction<AuthPayload>) => {
        state.isAuthorized = true;
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
      }
    );
    builder.addMatcher(
      authApi.endpoints.regstration.matchFulfilled,
      (state, action: PayloadAction<AuthPayload>) => {
        state.isAuthorized = true;
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
      }
    );
  },
});

export const selectIsAuthorized = (state: RootState) => state.auth.isAuthorized;
export const selectUserData = (state: RootState) => state.auth.user;

export const { logout } = authSlice.actions;
