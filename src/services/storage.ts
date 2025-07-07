import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { ACCESS_TOKEN_STORAGE_KEY } from "../constants/Env";
import { UserType } from "../types/user";

export const getToken = async (): Promise<string | null> => {
  const token = await AsyncStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
  return token;
};

export const setToken = async (token: string): Promise<void> => {
  await AsyncStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, token);
};

export const deleteToken = async (): Promise<void> => {
  await AsyncStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
};

export const getUser = async (): Promise<UserType | null> => {
  const userString = await AsyncStorage.getItem("user");
  if (!userString) return null;
  const user = JSON.parse(userString);
  return user;
};

export const setUser = async (user: UserType): Promise<void> => {
  await AsyncStorage.setItem("user", JSON.stringify(user));
};

export const deleteUser = async (): Promise<void> => {
  await AsyncStorage.removeItem("user");
};

export const setMode = async (mode: string) => {
  await AsyncStorage.setItem("mode", mode);
};

export const getMode = async () => {
  const mode = await AsyncStorage.getItem("mode");
  return mode;
};

export const logout = async (): Promise<void> => {
  await deleteToken();
  await deleteUser();
  router.replace("/auth");
};
