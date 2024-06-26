import { createSlice } from "@reduxjs/toolkit";
import { fetchDummyDateById } from "../Thunks/DummyDataThunks";
import { MultipleEntitiesCustomSlice } from "./Slice";
import { addFetchCasesForMultipleEntitiesStoreWithCache } from "./multipleEntitiesSliceManagement";

export interface DummyData {
  userId: number;
  id: number;
  title: string;
}

export const dummyDataSliceInitialState: MultipleEntitiesCustomSlice<DummyData> =
  {
    idList: [],
    metaData: {},
    dataMap: {},
  };

export const dummyDataSlice = createSlice({
  name: "dummyData",
  initialState: dummyDataSliceInitialState,
  reducers: {
    clearDummyDataIdList: (state) => {
      state.idList = [];
    },
    updateDummyData: (state, action: { type: string; payload: DummyData }) => {
      state.dataMap[action.payload.id].data = action.payload;
    },
  },
  extraReducers: (builder) => {
    addFetchCasesForMultipleEntitiesStoreWithCache<DummyData>(
      builder,
      fetchDummyDateById
    );
  },
});

export const {
  updateDummyData: dummyDataUpdateAction,
  clearDummyDataIdList: dummyDataClearIdListAction,
} = dummyDataSlice.actions;
