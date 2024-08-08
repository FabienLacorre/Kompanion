import axios from "axios";

// Dummy API call
export const fetchDummyData = async (id: number): Promise<any> => {
  return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
};
