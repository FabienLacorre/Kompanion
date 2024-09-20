import { ApiStatus } from "../Types/ApiStatus";

export interface CustomSliceMetaData {
  apiStatus: ApiStatus;
}

export interface CustomSliceData<T> {
  [id: string | number]: {
    data: T;
    metaData: Record<string, any>;
  };
}

export interface MultipleEntitiesCustomSlice<T> {
  idList: (number | string)[];
  metaData: Record<string, any>;
  dataMap: CustomSliceData<T>;
}

export interface SingleEntityCustomSlice<T> {
  idList: (number | string)[];
  metaData: Record<string, any>;
  dataMap: CustomSliceData<T>;
}

export function conditionIdListCheck<T>(
  state: MultipleEntitiesCustomSlice<T>,
  id: number | string
) {
  return !state.idList.includes(id);
}

export const SINGLE_ENTITY_ID_DETECTION = -1;
export const SINGLE_ENTITY_ID_LIST = [SINGLE_ENTITY_ID_DETECTION];

export function singleEntityDefaultValueGenerator<T>(
  data: T,
  metaData: Record<string, any>
) {
  return {
    [SINGLE_ENTITY_ID_DETECTION]: {
      data,
      metaData,
    },
  };
}

export function generateSingleEntityInitialState<T>(
  data: T,
  metaData: Record<string, any>
): SingleEntityCustomSlice<T> {
  return {
    idList: SINGLE_ENTITY_ID_LIST,
    metaData: {},
    dataMap: singleEntityDefaultValueGenerator<T>(data, metaData),
  };
}
