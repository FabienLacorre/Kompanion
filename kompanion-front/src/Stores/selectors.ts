import { useSelector } from "react-redux";
import { ConfigureStoreEntitiesList, RootState } from "./store";
import { SINGLE_ENTITY_ID_DETECTION } from "./Slice";

export const useSingleDataSelector = <T>(
  sliceName: keyof ConfigureStoreEntitiesList
): T => {
  return useSelector((state: RootState) => {
    console.log(state[sliceName].dataMap);
    return state[sliceName].dataMap[SINGLE_ENTITY_ID_DETECTION]?.data;
  }) as T;
};

export const useSingleMetaDataSelector = (
  sliceName: keyof ConfigureStoreEntitiesList
) => {
  return useSelector(
    (state: RootState) =>
      state[sliceName].dataMap[SINGLE_ENTITY_ID_DETECTION].metaData.apiStatus
  );
};
