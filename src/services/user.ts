import UserDetails from "@/src/mocks/user.json";
import { UserType } from "../types/user";


export const getUser = async (): Promise<UserType> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(UserDetails);
      } catch (error) {
        reject(error);
      }
    }, 500);
  });
};
