import { createSlice } from "@reduxjs/toolkit";
import { fetchDummyDateById } from "../Thunks/DummyDataThunks";
import { ApiStatus } from "../Types/ApiStatus";

export interface DummyData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  status: ApiStatus;
}

export const dummyDataInitialState: DummyData = {
  id: 1,
  userId: 0,
  title: "",
  completed: false,
  status: ApiStatus.IDLE,
};

export const dummyDataSlice = createSlice({
  name: "dummyData",
  initialState: dummyDataInitialState,
  reducers: {
    updateId(state, action: { type: string; payload: number }) {
      state.id = action.payload;
    },
    updateDummyData: (state, action: { type: string; payload: DummyData }) => {
      state.userId = action.payload.userId;
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.completed = action.payload.completed;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDummyDateById.fulfilled, (state, action) => {
      state.status = ApiStatus.SUCCEEDED;
      state.userId = action.payload.userId;
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.completed = action.payload.completed;
    });
    builder.addCase(fetchDummyDateById.pending, (state, action) => {
      state.status = ApiStatus.LOADING;
    });
    builder.addCase(fetchDummyDateById.rejected, (state, action) => {
      state.status = ApiStatus.FAILED;
      state.title = action.error.message || "";
      state.completed = false;
      state.userId = -1;
    });
  },
});

export const {
  updateDummyData: dummyDataUpdateAction,
  updateId: dummyDataUpdateIdAction,
} = dummyDataSlice.actions;
