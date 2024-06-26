import { throwApiError } from "../../../API/router/throwApiError";
import { DAL_getUserById } from "../../../database/DAL/user/query";

export const getUserById = async (id: number) => {
  const user = await DAL_getUserById(id);
  if (!user) {
    throwApiError(500, "User not found");
  }
  return user;
};
