import { baseApi } from "@/6_shared/api";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    regstration: build.mutation({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
  }),
});
