import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { ApiStatus } from "../Types/ApiStatus";
import { MultipleEntitiesCustomSlice } from "./Slice";
import { orderBy } from "lodash";

function addFullfilledCaseMultipleEntities<T>(
  state: MultipleEntitiesCustomSlice<T>,
  action: any
) {
  const id = action.payload.id;
  if (!state.idList.includes(id)) {
    state.idList = orderBy([...state.idList, id]);
  }

  if (state.dataMap[id]) {
    state.dataMap[id].data = action.payload;
    state.dataMap[id].metaData = {
      apiStatus: ApiStatus.SUCCEEDED,
    };
  } else {
    state.dataMap[id] = {
      data: action.payload,
      metaData: {
        apiStatus: ApiStatus.SUCCEEDED,
      },
    };
  }
}

function addRejectedCaseMultipleEntities<T>(
  state: MultipleEntitiesCustomSlice<T>,
  action: any
) {
  state.dataMap[action.meta.arg.id].metaData = {
    apiStatus: ApiStatus.FAILED,
  };
}

function addPendingCaseMultipleEntities<T>(state: MultipleEntitiesCustomSlice<T>, action: any) {
  if (state.dataMap[action.meta.arg.id]) {
    state.dataMap[action.meta.arg.id].metaData = {
      apiStatus: ApiStatus.LOADING,
    };
  } else {
    state.dataMap[action.meta.arg.id] = {
      data: {} as T,
      metaData: {
        apiStatus: ApiStatus.LOADING,
      },
    };
  }
}

export function addFetchCasesForMultipleEntitiesStoreWithCache<T>(
  builder: ActionReducerMapBuilder<MultipleEntitiesCustomSlice<T>>,
  fetchFunction: any
) {
  builder.addCase(fetchFunction.pending, addPendingCaseMultipleEntities);
  builder.addCase(fetchFunction.fulfilled, addFullfilledCaseMultipleEntities);
  builder.addCase(fetchFunction.rejected, addRejectedCaseMultipleEntities);
}
