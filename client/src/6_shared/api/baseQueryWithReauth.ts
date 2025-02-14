import { BaseQueryApi, FetchArgs } from "@reduxjs/toolkit/query";
import { baseQuery } from "./baseQuery";

export const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object
) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // диспатчим запрос на получение refresh токена
    return;
  }

  return result;
};
