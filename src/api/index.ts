import axios from "axios";
import type { UserTypes } from "../types/users";
import type { PostTypes } from "../types/posts";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    const message =
      error.res?.data?.message || error.message || "Something went wrong while";
    return Promise.reject(new Error(message));
  },
);

export const getUsers = async (): Promise<UserTypes[]> => {
  const { data } = await api.get<UserTypes[]>("/users");
  return data;
};

export const getUserById = async (id: number): Promise<UserTypes> => {
  const { data } = await api.get<UserTypes>(`/users/${id}`);
  return data;
};

export const getPostByUserId = async (userId: number): Promise<PostTypes[]> => {
  const { data } = await api.get<PostTypes[]>(`/posts?userId=${userId}`);
  return data;
};
