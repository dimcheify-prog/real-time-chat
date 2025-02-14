import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_URL } from "./baseUrl";
import { RootState } from "@/1_app/appStore";

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  // credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const { accessToken } = (getState() as RootState).auth;
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return headers;
  },
});
