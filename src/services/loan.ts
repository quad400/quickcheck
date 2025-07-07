import loanData from "@/src/mocks/loan.json";
import { ApplyLoanRequest, LoanType } from "../types/loan";

export const getLoans = (): Promise<LoanType[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(loanData);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
};

export const getLoan = (id: string): Promise<LoanType | undefined> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const loan = loanData.find((item) => item.id === id);
        resolve(loan);
      } catch (error) {
        reject(error);
      }
    }, 500);
  });
};

export const applyLoan = (body: ApplyLoanRequest): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve();
      } catch (error) {
        reject(error);
      }
    }, 500);
  });
};
