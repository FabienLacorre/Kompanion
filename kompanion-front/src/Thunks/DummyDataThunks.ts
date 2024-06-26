import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDummyData } from "../Api/get";
import { conditionIdListCheck } from "../Stores/Slice";

export const fetchDummyDateById = createAsyncThunk(
  "api/dummyData/getById",
  async (params: { id: number }) => {
    const response = await fetchDummyData(params.id);
    return response.data;
  },
  {
    condition: (params: { id: number }, { getState }) => {
      return conditionIdListCheck((getState() as any).dummyData, params?.id);
    },
  }
);
