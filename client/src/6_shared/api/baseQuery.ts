import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@/6_shared/api/baseUrl";

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  // препарка хедеров после заведения редюсера сессии
  // prepareHeaders: (headers, {getState}) => {

  // }
});
