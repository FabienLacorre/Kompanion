import { createSlice } from "@reduxjs/toolkit";
import { fetchDummyDateById } from "../Thunks/DummyDataThunks";

export interface DummyData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const dummyDataInitialState: DummyData = {
  id: 1,
  userId: 0,
  title: "",
  completed: false,
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
      console.log("action", action);
      state.userId = action.payload.userId;
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.completed = action.payload.completed;
    });
  },
});

export const {
  updateDummyData: dummyDataUpdateAction,
  updateId: dummyDataUpdateIdAction,
} = dummyDataSlice.actions;
