import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDummyData } from "../Api/get";

export const fetchDummyDateById = createAsyncThunk(
  "api/get/dummyData",
  async (id: number) => {
    const response = await fetchDummyData(id);
    return response.data;
  }
);
