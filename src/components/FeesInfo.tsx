import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { List, Text } from 'react-native-paper';
import { appTheme } from '../providers/ThemeProvider.tsx';
import { ConversionRate, Currency } from '../types/finance.ts';
import { CurrenciesMap } from '../services/api.ts';

interface Props {
  amount: number;
  fee: number;
  currency: Currency;
  conversionRate: ConversionRate;
}

const FeesInfo = ({ amount, fee, currency, conversionRate }: Props): React.JSX.Element => {
  const serviceFee = useMemo<string>(() => {
    return (amount * fee).toFixed(currency.decimalDigits);
  }, [amount, fee]);
  const taxFee = useMemo(() => {
    return (0.05 * Number(serviceFee)).toFixed(currency.decimalDigits);
  }, [serviceFee]);

  const currencyTo = useMemo(() => {
    return CurrenciesMap[conversionRate.code] as Currency;
  }, [conversionRate])

  return (
    <View style={styles.container}>
      <List.Accordion
        style={styles.containerAccordion}
        title={
          <View style={styles.containerAccordionTitle}>
            <Text>1 {currency.code} ≈ {(conversionRate.rate).toFixed(currencyTo.decimalDigits)} {currencyTo.code}</Text>
            <Text variant="labelLarge">Fees</Text>
          </View>
        }
      >
        <List.Item style={styles.containerListItem}
                   title={
                     <Text variant="bodySmall" style={styles.textListItemTitle}>Service fee: ≈{serviceFee} {currency.symbol}</Text>
                   } />
        <List.Item style={styles.containerListItem}
                   title={
                     <Text variant="bodySmall" style={styles.textListItemTitle}>VAT (5%): ≈{taxFee} {currency.symbol}</Text>
                   } />
      </List.Accordion>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderLeftColor: appTheme.colors.backdrop,
    borderLeftWidth: 1,
    marginLeft: appTheme.spacing.base,
    paddingLeft: appTheme.spacing.base,

  },
  containerAccordion: {
    backgroundColor: appTheme.colors.surfaceVariant,
    borderRadius: appTheme.spacing.base,
    paddingVertical: 0,
  },
  containerAccordionTitle: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: -appTheme.spacing.base / 2,
    width: '100%',
  },
  containerListItem: {
    marginVertical: 0,
    paddingVertical: 0,
  },
  textListItemTitle: {
    textAlign: 'right',
  },
  textConversionRate: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
});

export default FeesInfo;
