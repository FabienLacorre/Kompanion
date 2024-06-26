import { createSlice } from "@reduxjs/toolkit";

// INITIAL STATES
export interface UserState {
  email: string;
  password: string;
  loggedIn: boolean;
}

const userInitialState: UserState = {
  email: "",
  password: "",
  loggedIn: false,
};

// SLICE
export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    updateEmail: (state, action: { type: string; payload: string }) => {
      state.email = action.payload;
    },
    updatePassword: (state, action: { type: string; payload: string }) => {
      state.password = action.payload;
    },
    login: (state) => {
      console.log("login action");
      state.loggedIn = true;
    },
    logout: (state) => {
      console.log("logout action");
      state.loggedIn = false;
    },
  },
});

export const {
  updateEmail: userUpdateEmailAction,
  updatePassword: userUpdatePasswordAction,
  login: userLoginAction,
  logout: userLogoutAction,
} = userSlice.actions;
