import { useMutation } from "@tanstack/react-query";
import { signIn } from "../services/auth";
import { SignInRequest } from "../types/user";

export const useSignIn = () => {
  const mutate = useMutation<unknown, Error, SignInRequest>({
    mutationFn: async (body) => await signIn(body),
  });

  return mutate;
};
