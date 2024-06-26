import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./UserSlice";
import { navigationSlice } from "./NavigationSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    navigation: navigationSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
