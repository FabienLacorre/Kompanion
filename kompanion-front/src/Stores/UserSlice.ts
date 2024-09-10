import { createSlice } from "@reduxjs/toolkit";
import { createUserThunk, loginThunk } from "../Thunks/userThunks";
import { MultipleEntitiesCustomSlice, SingleEntityCustomSlice } from "./Slice";
import { addFetchCasesForMultipleEntitiesStoreWithCache } from "./multipleEntitiesSliceManagement";
import { SINGLE_ENTITY_ID_DETECTION } from "../const";
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

const userInitialState: MultipleEntitiesCustomSlice<UserState> = {
  idList: [SINGLE_ENTITY_ID_DETECTION],
  metaData: {},
  dataMap: {
    [SINGLE_ENTITY_ID_DETECTION]: {
      data: initialUserData,
      metaData: initialUserMetaData,
    },
  },
};

// SLICE
export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    updateUser: (state, action: { type: string; payload: UserState }) => {
      state.dataMap[action.payload.id].data = action.payload;
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
