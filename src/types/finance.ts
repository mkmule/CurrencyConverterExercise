export interface Currency {
  code: string;
  decimalDigits: number;
  name: string;
  namePlural: string;
  rounding: number;
  symbol: string;
  symbolNative: string;
  emoji?: string; // Optional image (flag of selected country)
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

export interface Country {
  code: string;
  currency: Currency;
  emoji: string;
  name: string;
  unicode: string;
}

