import axios from "axios";
import { API_URL } from "..";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<any> => {
  return axios.post(`${API_URL}/user/login`, {
    email,
    password,
  });
};

export const createUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<any> => {
  return axios.post(`${API_URL}/user/create`, {
    email,
    password,
  });
};
