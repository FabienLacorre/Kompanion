import { createSlice } from "@reduxjs/toolkit";
import { PageKeyEnum } from "../Router";

// INITIAL STATES
export interface NavigationState {
  page: PageKeyEnum;
}

const navigationInitialState: NavigationState = {
  page: PageKeyEnum.HOME,
};

// SLICE
export const navigationSlice = createSlice({
  name: "navigation",
  initialState: navigationInitialState,
  reducers: {
    updatePage: (state, action: { type: string; payload: PageKeyEnum }) => {
      state.page = action.payload;
    },
  },
});

export const { updatePage: updatePageAction } = navigationSlice.actions;
