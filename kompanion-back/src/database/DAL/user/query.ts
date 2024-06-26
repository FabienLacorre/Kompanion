import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User";

export const DAL_getAllUsers = async () => {
  const UserRepository = AppDataSource.getRepository(User);
  return UserRepository.find();
};

export const DAL_getUserById = async (id: number) => {
  const UserRepository = AppDataSource.getRepository(User);
  return UserRepository.findOneBy({ id });
};

export const DAL_getUserByEmail = async (email: string) => {
  const UserRepository = AppDataSource.getRepository(User);
  return UserRepository.findOneBy({ email });
};
