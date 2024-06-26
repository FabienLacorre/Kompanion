import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User";

export const DAL_createBasicUser = async ({
  email,
  password,
}: {
  email: User["email"];
  password: User["password"];
}) => {
  const UserRepository = AppDataSource.getRepository(User);
  const newUser = new User();
  newUser.email = email;
  newUser.password = password;

  return UserRepository.save(newUser);
};
