import { createApi } from "@reduxjs/toolkit/query";
import { baseQuery } from "@/6_shared/api/baseQuery";

export const baseApi = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
