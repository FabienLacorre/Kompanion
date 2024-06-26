import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { SingleEntityCustomSlice } from "./Slice";
import { ApiStatus } from "../Types/ApiStatus";

function addFullfilledCaseSingleEntity<T>(
  state: SingleEntityCustomSlice<T>,
  action: any
) {
  state.data = action.payload;
  state.metaData = {
    apiStatus: ApiStatus.SUCCEEDED,
  };
}

function addRejectedCaseSingleEntity<T>(
  state: SingleEntityCustomSlice<T>,
  _action: any
) {
  state.metaData = {
    apiStatus: ApiStatus.FAILED,
  };
}

function addPendingCaseSingleEntity<T>(
  state: SingleEntityCustomSlice<T>,
  _action: any
) {
  state.metaData = {
    apiStatus: ApiStatus.LOADING,
  };
}

export function addFetchCaseFormSingleEntityStoreWithCache<T>(
  builder: ActionReducerMapBuilder<SingleEntityCustomSlice<T>>,
  fetchFunction: any
) {
  builder.addCase(fetchFunction.fulfilled, addFullfilledCaseSingleEntity);
  builder.addCase(fetchFunction.rejected, addRejectedCaseSingleEntity);
  builder.addCase(fetchFunction.pending, addPendingCaseSingleEntity);
}
