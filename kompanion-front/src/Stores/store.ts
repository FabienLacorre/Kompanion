import { configureStore } from "@reduxjs/toolkit";
import { userSlice, UserState } from "./UserSlice";
import { navigationSlice, NavigationState } from "./NavigationSlice";
import { useDispatch } from "react-redux";
import { DummyData, dummyDataSlice } from "./DummyDataSlice";
import { MultipleEntitiesCustomSlice } from "./Slice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface ConfigureStoreEntitiesList {
  user: MultipleEntitiesCustomSlice<UserState>;
  dummyData: MultipleEntitiesCustomSlice<DummyData>;

  // navigation:  NavigationState; // TODO: migrer le store navigation
}

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    navigation: navigationSlice.reducer,
    dummyData: dummyDataSlice.reducer,
  },
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
