import React, { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, List, Text } from 'react-native-paper';
import { appTheme } from '../providers/ThemeProvider.tsx';
import { ConversionRate, Currency } from '../types/finance.ts';
import { CurrenciesMap } from '../services/api.ts';
import { getNumberFormatSettings } from 'react-native-localize';
import { formatCurrencyNumber } from '../utils/currency.ts';
import { DEFAULT_FEES, Fees } from '../utils/conversion.ts';

interface Props {
  conversionRate: ConversionRate;
  currency: Currency;
  fees: Fees;
  sendingAmount: number;
}

const FeesInfo = ({
  fees,
  sendingAmount,
  currency,
  conversionRate,
}: Props): React.JSX.Element => {
  const numberFormatOptions = useMemo(() => getNumberFormatSettings(), []);
  const formatCurrencyNum = useMemo(() => {
    return (val: number) =>
      formatCurrencyNumber(val, currency.decimalDigits, numberFormatOptions);
  }, [currency.decimalDigits, numberFormatOptions]);

  const [expanded, setExpanded] = useState(true);
  const onPressAccordion = () => setExpanded(!expanded);

  const currencyTo = useMemo(() => {
    return CurrenciesMap[conversionRate.code] as Currency;
  }, [conversionRate]);

  return (
    <View style={styles.container}>
      <List.Accordion
        expanded={expanded}
        onPress={onPressAccordion}
        style={styles.containerAccordion}
        title={
          <View style={styles.containerAccordionTitle}>
            <Text>
              1 {currency.code} ≈{' '}
              {conversionRate.rate.toFixed(currencyTo.decimalDigits)}{' '}
              {currencyTo.code}
            </Text>
            <Text variant="labelLarge">Fees</Text>
          </View>
        }>
        <List.Item
          style={styles.containerListItem}
          title={
            <Text variant="bodySmall" style={styles.textListItemTitle}>
              Service fee ({DEFAULT_FEES.service * 100}%): ≈
              {formatCurrencyNum(fees.serviceFee)} {currency.symbol}
            </Text>
          }
        />
        <List.Item
          style={styles.containerListItem}
          title={
            <Text variant="bodySmall" style={styles.textListItemTitle}>
              VAT ({DEFAULT_FEES.vat * 100}%): ≈{formatCurrencyNum(fees.vatFee)}{' '}
              {currency.symbol}
            </Text>
          }
        />
        <Divider />
        <List.Item
          style={styles.containerListItem}
          title={
            <Text variant="bodySmall" style={styles.textListItemTitle}>
              You are sending: ≈{formatCurrencyNum(sendingAmount)}{' '}
              {currency.symbol}
            </Text>
          }
        />
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
