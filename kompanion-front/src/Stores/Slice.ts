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

export interface SingleEntityCustomSlice<T> {
  data: T;
  metaData: Record<string, any>;
}

export interface MultipleEntitiesCustomSlice<T> {
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
