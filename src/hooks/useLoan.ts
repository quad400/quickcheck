import { useMutation, useQuery } from "@tanstack/react-query";
import { applyLoan, getLoan, getLoans } from "../services/loan";
import { ApplyLoanRequest, LoanType } from "../types/loan";

export const useGetLoans = () => {
  const query = useQuery<LoanType[], Error>({
    queryKey: ["loans"],
    queryFn: async () => await getLoans(),
  });

  return query;
};

export const useGetLoan = (id: string) => {
  const query = useQuery<LoanType | undefined, Error>({
    queryKey: ["loans", id],
    queryFn: async () => await getLoan(id),
  });

  return query;
};

export const useApplyLoan = () => {
  const mutate = useMutation<unknown, Error, ApplyLoanRequest>({
    mutationFn: async (body) => await applyLoan(body),
  });
  return mutate;
};
