import { ConversionRate, Currency } from '../types/finance.ts';
import { conversionRatesAED, currencies } from './api.stubs.ts';

export const getConversionRates = (
  currencyCode: string,
): Promise<{ [key: string]: ConversionRate }> => {
  switch (currencyCode) {
    case 'AED': {
      return new Promise(resolve => {
        resolve(conversionRatesAED);
      });
    }
    default:
      return new Promise((resolve, reject) => {
        reject({ error: { displayMessage: 'Unknown currency' } });
      });
  }
};

export const CurrencyAED = {
  symbol: 'AED',
  namePlural: 'UAE dirhams',
  code: 'AED',
  symbolNative: 'د.إ.‏',
  decimalDigits: 2,
  name: 'United Arab Emirates Dirham',
  rounding: 0,
};

export const CurrencyUSD = {
  symbol: '$',
  namePlural: 'US dollars',
  code: 'USD',
  symbolNative: '$',
  decimalDigits: 2,
  name: 'US Dollar',
  rounding: 0,
};

export const getCurrencies = (): Promise<{ [key: string]: Currency }> => {
  return new Promise(resolve => {
    resolve(currencies);
  });
};
