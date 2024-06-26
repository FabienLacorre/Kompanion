import { isNil } from "lodash";
import { throwApiError } from "../../../API/router/throwApiError";
import { Encrypt } from "../../../utils/encrypt";
import { DAL_getUserByEmail } from "../../../database/DAL/user/query";
import { User } from "../../../database/entities/User";

export const login = async ({
  email,
  password,
}: {
  email: User["email"];
  password: User["password"];
}) => {
  const user = await DAL_getUserByEmail(email);

  if (isNil(user)) {
    throwApiError(401, "User not found");
  }

  const isSamePassword = await Encrypt.comparePassword(
    password,
    user!.password // cannot be null cause of throw just above
  );

  if (isSamePassword === false) {
    throwApiError(401, "Password is incorrect");
  }
  return user;
};
