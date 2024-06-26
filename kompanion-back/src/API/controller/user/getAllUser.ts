import { DAL_getAllUsers } from "../../../database/DAL/user/query";

export const getAllUser = async () => {
  return DAL_getAllUsers();
};
