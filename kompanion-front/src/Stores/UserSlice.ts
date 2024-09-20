import { createSlice } from "@reduxjs/toolkit";
import { createUserThunk, loginThunk } from "../Thunks/userThunks";
import {
  generateSingleEntityInitialState,
  SINGLE_ENTITY_ID_DETECTION,
  SingleEntityCustomSlice,
} from "./Slice";
import { addFetchCasesForMultipleEntitiesStoreWithCache } from "./multipleEntitiesSliceManagement";
import { ApiStatus } from "../Types/ApiStatus";

// INITIAL STATES
export interface UserState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  id: number;
}

const initialUserData = {
  id: SINGLE_ENTITY_ID_DETECTION,
  password: "",
  email: "",
  lastName: "",
  firstName: "",
};

const initialUserMetaData = {
  ApiStatus: ApiStatus.IDLE,
};

const userInitialState: SingleEntityCustomSlice<UserState> =
  generateSingleEntityInitialState(initialUserData, initialUserMetaData);

// SLICE
export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    updateUser: (state, action: { type: string; payload: UserState }) => {
      console.log("toto", action.payload.id);
      state.dataMap[SINGLE_ENTITY_ID_DETECTION].data = action.payload;
    },
  },
  extraReducers: (builder) => {
    addFetchCasesForMultipleEntitiesStoreWithCache<UserState>(
      builder,
      loginThunk
    );
    addFetchCasesForMultipleEntitiesStoreWithCache<UserState>(
      builder,
      createUserThunk
    );
  },
});

export const { updateUser: userUpdateAction } = userSlice.actions;
