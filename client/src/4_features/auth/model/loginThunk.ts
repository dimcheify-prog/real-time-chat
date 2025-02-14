import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../api/authApi";
import { UserFormFieldsTypes } from "./types";

export const loginThunk = createAsyncThunk(
  "login",
  async (body: UserFormFieldsTypes, { dispatch }) => {
    try {
      await dispatch(authApi.endpoints.login.initiate(body)).unwrap();
    } catch (err) {
      throw new Error("Неизвестная ошибка");
    }
  }
);
