import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { ApiStatus } from "../Types/ApiStatus";
import {
  MultipleEntitiesCustomSlice,
  SINGLE_ENTITY_ID_DETECTION,
} from "./Slice";
import { orderBy } from "lodash";

function addFullfilledCaseMultipleEntities<T>(
  state: MultipleEntitiesCustomSlice<T>,
  action: any
) {
  const id = state.idList.includes(SINGLE_ENTITY_ID_DETECTION)
    ? SINGLE_ENTITY_ID_DETECTION
    : action.payload.id ?? SINGLE_ENTITY_ID_DETECTION;

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
  const id = state.idList.includes(SINGLE_ENTITY_ID_DETECTION)
    ? SINGLE_ENTITY_ID_DETECTION
    : action.payload.id ?? SINGLE_ENTITY_ID_DETECTION;
  state.dataMap[id].metaData = {
    apiStatus: ApiStatus.FAILED,
  };
}

function addPendingCaseMultipleEntities<T>(
  state: MultipleEntitiesCustomSlice<T>,
  action: any
) {
  const id = state.idList.includes(SINGLE_ENTITY_ID_DETECTION)
    ? SINGLE_ENTITY_ID_DETECTION
    : action.meta.arg.id ?? SINGLE_ENTITY_ID_DETECTION;

  if (state.dataMap[id]) {
    state.dataMap[id].metaData = {
      apiStatus: ApiStatus.LOADING,
    };
  } else {
    state.dataMap[id] = {
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
