import { ConversionRate, Country, Currency } from '../types/finance.ts';
import { conversionRatesAED, countries, currencies } from './api.stubs.ts';

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
  emoji: "🇦🇪",
};

export const CurrencyUSD = {
  symbol: '$',
  namePlural: 'US dollars',
  code: 'USD',
  symbolNative: '$',
  decimalDigits: 2,
  name: 'US Dollar',
  rounding: 0,
  emoji: "🇺🇸",
};
export const Currencies: Currency[] = Object.values(currencies);
export const CurrenciesMap: { [key: string]: Currency } = currencies;
export const ConversionRates: { [key: string]: ConversionRate } = conversionRatesAED;

export const ConversionRateAED = ConversionRates['AED'];

export const Countries: Country[] = countries as unknown as Country[];


export const getCurrencies = (): Promise<{ [key: string]: Currency }> => {
  return new Promise(resolve => {
    resolve(currencies);
  });
};
