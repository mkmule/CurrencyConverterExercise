export interface Currency {
  code: string;
  decimalDigits: number;
  name: string;
  namePlural: string;
  rounding: number;
  symbol: string;
  symbolNative: string;
}

export interface ConversionRate {
  alphaCode: string;
  code: string;
  date: string;
  inverseRate: number;
  name: string;
  numericCode: string;
  rate: number;
}
