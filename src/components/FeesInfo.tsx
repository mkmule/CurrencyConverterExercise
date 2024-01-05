import React, { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, List, Text } from 'react-native-paper';
import { appTheme } from '../providers/ThemeProvider.tsx';
import { ConversionRate, Currency } from '../types/finance.ts';
import { CurrenciesMap } from '../services/api.ts';
import { getNumberFormatSettings } from 'react-native-localize';
import { formatCurrencyNumber, roundCeil, round } from '../utils/currency.ts';

interface Props {
  amount: number;
  fee: number;
  currency: Currency;
  conversionRate: ConversionRate;
}

const FeesInfo = ({ amount, fee, currency, conversionRate }: Props): React.JSX.Element => {
  const numberFormatOptions = useMemo(() => getNumberFormatSettings(), []);
  const formatCurrencyNum = useMemo(() => {
    return (val: number) => formatCurrencyNumber(val, currency.decimalDigits, numberFormatOptions);
  }, [currency.decimalDigits, numberFormatOptions])
  const [expanded, setExpanded] = useState(true);
  const onPressAccordion = () => setExpanded(!expanded);

  const serviceFee = useMemo<number>(() => {
    return roundCeil(amount * fee, currency.decimalDigits);
  }, [amount, fee]);
  const taxFee = useMemo<number>(() => {
    return roundCeil(0.05 * serviceFee, currency.decimalDigits);
  }, [serviceFee]);
  const sendingAmount = useMemo<number>(() => {
    return round(amount - serviceFee - taxFee, currency.decimalDigits);
  }, [serviceFee, taxFee]);

  const currencyTo = useMemo(() => {
    return CurrenciesMap[conversionRate.code] as Currency;
  }, [conversionRate])

  return (
    <View style={styles.container}>
      <List.Accordion
        expanded={expanded}
        onPress={onPressAccordion}
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
                     <Text variant="bodySmall" style={styles.textListItemTitle}>Service fee ({fee * 100}%):
                       ≈{formatCurrencyNum(serviceFee)} {currency.symbol}</Text>
                   } />
        <List.Item style={styles.containerListItem}
                   title={
                     <Text variant="bodySmall" style={styles.textListItemTitle}>VAT (5%):
                       ≈{formatCurrencyNum(taxFee)} {currency.symbol}</Text>
                   } />
        <Divider />
        <List.Item style={styles.containerListItem}
                   title={
                     <Text variant="bodySmall" style={styles.textListItemTitle}>You are sending:
                       ≈{formatCurrencyNum(sendingAmount)} {currency.symbol}</Text>
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
