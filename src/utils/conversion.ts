import { round, roundCeil } from './currency.ts';

export const convert = (amout: number, rate: number, decimalDigits = 2): number => {
  return Number(round(amout * rate, decimalDigits));
};

interface FeesOptions {
  service: number;
  vat: number;
}

interface Fees {
  serviceFee: number;
  vatFee: number;
}

export const DEFAULT_FEES: FeesOptions = {
  service: 0.05,
  vat: 0.03,
};
export const calculateFees = (amount: number, decimalDigits: number, options: FeesOptions = DEFAULT_FEES): Fees => {
  const { service, vat } = options;
  const serviceFee = roundCeil(amount * service, decimalDigits);
  const vatFee = roundCeil(vat * serviceFee, decimalDigits);

  return { serviceFee, vatFee }
}
