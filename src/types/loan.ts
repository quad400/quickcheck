export type LoanType = {
  id: string;
  image: string;
  amount: string;
  purpose: string;
  status: string;
  featured_type: string | null;
  applied_date: string | null;
};

export type ApplyLoanRequest = {
  purpose: string;
  amount: string;
};
