import { createSlice } from "@reduxjs/toolkit";
import { addFetchCaseFormSingleEntityStoreWithCache } from "./singleEntitySliceManagement";
import { createUserThunk, loginThunk } from "../Thunks/userThunks";
import { SingleEntityCustomSlice } from "./Slice";

// INITIAL STATES
export interface UserState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  id: number;
}

const userInitialState: SingleEntityCustomSlice<UserState> = {
  data: {
    id: 0,
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  },
  metaData: {},
};

// SLICE
export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    updateUser: (state, action: { type: string; payload: UserState }) => {
      state.data.email = action.payload.email;
      state.data.password = action.payload.password;
      state.data.firstName = action.payload.firstName;
      state.data.lastName = action.payload.lastName;
      state.data.id = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    addFetchCaseFormSingleEntityStoreWithCache<UserState>(builder, loginThunk);
    addFetchCaseFormSingleEntityStoreWithCache<UserState>(builder, createUserThunk);
  },
});

export const { updateUser: userUpdateAction } = userSlice.actions;
