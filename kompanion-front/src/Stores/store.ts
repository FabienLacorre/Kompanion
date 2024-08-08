import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./UserSlice";
import { navigationSlice } from "./NavigationSlice";
import { useDispatch } from "react-redux";
import { dummyDataSlice } from "./DummyDataSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    navigation: navigationSlice.reducer,
    dummyData: dummyDataSlice.reducer,
  },
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
