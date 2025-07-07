import AuthDetails from "@/src/mocks/auth.json";
import { SignInRequest } from "../types/user";

export const signIn = async (body: SignInRequest): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const isValid =
          body.email === AuthDetails.email &&
          body.password === AuthDetails.password;

        if (!isValid) {
          return reject(new Error("Invalid credentials"));
        }
        resolve();
      } catch (error) {
        reject(error);
      }
    }, 1500);
  });
};
