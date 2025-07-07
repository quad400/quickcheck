import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/user";
import { UserType } from "../types/user";

export const useUser = () => {
  const query = useQuery<UserType>({
    queryKey: ["user"],
    queryFn: async () => await getUser(),
  });

  return query
};
