import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { getNumberFormatSettings } from 'react-native-localize';

import { formatCurrencyNumber, parseFormattedNumber, splitFormattedNumber } from '../utils/currency.ts';

interface Props {
  value: number;
  onChangeAmount: (amount: number) => void;
  decimals: number;
}

const InputMoneyAmount = forwardRef(({ value, decimals, onChangeAmount }: Props, ref: any): React.JSX.Element => {
  const [displayValue, setDisplayValue] = useState('');
  const numberFormatOptions = useMemo(() => getNumberFormatSettings(), []);
  const formatCurrencyNum = useMemo(() => {
    return (val: number) => formatCurrencyNumber(val, decimals, numberFormatOptions);
  }, [decimals, numberFormatOptions]);
  const parseFormattedNum = useMemo(() => {
    return (val: string) => parseFormattedNumber(val, decimals, numberFormatOptions);
  }, [decimals, numberFormatOptions]);
  const placeholder = useMemo(() => {
    return formatCurrencyNum(0);
  }, [decimals]);
  const onChange = (val: string) => {
    if (!val?.length) {
      onChangeAmount(0);
      setDisplayValue('');

      return;
    }

    const [numInteger, numDecimals] = splitFormattedNumber(val, decimals, numberFormatOptions);
    if (numDecimals?.length > decimals) {
      return;
    }

    const valNumber = parseFormattedNum(val);
    if (val == null || Number.isNaN(valNumber)) {
      // Not a number
      onChangeAmount(0);
      return;
    }

    if (val.charAt(val.length - 1) === numberFormatOptions.decimalSeparator) {
      // Allow separator add
      setDisplayValue(`${formatCurrencyNumber(Number(numInteger), 0, numberFormatOptions)}${numberFormatOptions.decimalSeparator}`);
      onChangeAmount(valNumber as number);

      return;
    }

    setDisplayValue(`${formatCurrencyNumber(Number(numInteger), 0, numberFormatOptions)}${numDecimals?.length ? `${numberFormatOptions.decimalSeparator}${numDecimals}` : ''}`);
    onChangeAmount(valNumber as number);
  };

  const onBlur = () => {
    if (!displayValue?.length) {
      onChangeAmount(0);
      setDisplayValue('');

      return;
    }

    const valNumber = parseFormattedNum(displayValue);
    setDisplayValue(formatCurrencyNum(valNumber || 0));
  }

  useEffect(() => {
    if (value === 0) {
      setDisplayValue('');
      return;
    }

    setDisplayValue(formatCurrencyNum(value));
  }, [value]);

  useImperativeHandle(ref, () => ({
    getDisplayValue() {
      return parseFormattedNum(displayValue) || 0;
    },
  }));

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="numeric"
        mode="outlined"
        onBlur={onBlur}
        onChangeText={onChange}
        placeholder={placeholder}
        ref={ref}
        style={styles.input}
        value={displayValue}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  input: {
    borderRadius: 100,
    textAlign: 'right',
  },
});

export default InputMoneyAmount;
