import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserFormFieldsTypes } from "./types";
import { authApi } from "../api/authApi";

export const registrationThunk = createAsyncThunk(
  "registraton",
  async (body: UserFormFieldsTypes, { dispatch }) => {
    try {
      await dispatch(authApi.endpoints.regstration.initiate(body)).unwrap();
    } catch (err) {
      throw new Error("Неизвестная ошибка");
    }
  }
);
