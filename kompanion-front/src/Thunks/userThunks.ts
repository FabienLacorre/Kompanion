import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUser, login } from "../Api/user";

export const loginThunk = createAsyncThunk(
  "api/user/login",
  async (params: { email: string; password: string }) => {
    const response = await login(params);
    return response.data;
  }
);

export const createUserThunk = createAsyncThunk(
  "api/user/create",
  async (params: { email: string; password: string }) => {
    const response = await createUser(params);
    return response.data;
  }
);
