import { throwApiError } from "../../../API/router/throwApiError";
import { DAL_createBasicUser } from "../../../database/DAL/user/mutation";
import { DAL_getUserByEmail } from "../../../database/DAL/user/query";
import { User } from "../../../database/entities/User";
import { Encrypt } from "../../../utils/encrypt";

export const createBasicUser = async ({
  email,
  password,
}: {
  email: User["email"];
  password: User["password"];
}) => {
  if (!email || !password) {
    throwApiError(500, "Email and password are required");
  }
  const encryptedPassword = await Encrypt.cryptPassword(password);

  const userExists = await DAL_getUserByEmail(email);

  if (userExists) {
    throwApiError(500, "User already exists");
  }

  const user = await DAL_createBasicUser({
    email,
    password: encryptedPassword,
  });

  return user;
};
