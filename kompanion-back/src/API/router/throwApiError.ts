import { ApiError } from "../../utils/ApiError";

export const throwApiError = (status: number, message: string) => {
  throw new ApiError(status, message);
};
