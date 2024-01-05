import React, { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { getNumberFormatSettings } from 'react-native-localize';

import { formatCurrencyNumber, parseFormattedNumber, splitFormattedNumber } from '../utils/conversion.ts';

interface Props {
  value: number;
  onChangeAmount: (amount: number) => void;
  decimals: number;
}

const InputMoneyAmount = ({ value, decimals, onChangeAmount }: Props): React.JSX.Element => {
  const [displayValue, setDisplayValue] = useState('');
  const numberFormatOptions = useMemo(() => getNumberFormatSettings(), []);
  const formatCurrencyNum = useMemo(() => {
    return (val: number) => formatCurrencyNumber(val, decimals, numberFormatOptions);
  }, [decimals, numberFormatOptions])
  const parseFormattedNum = useMemo(() => {
    return (val: string) => parseFormattedNumber(val, decimals, numberFormatOptions);
  }, [decimals, numberFormatOptions])
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

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType="numeric"
        mode="outlined"
        value={displayValue}
        onChangeText={onChange}
        onBlur={onBlur}
      />
    </View>
  );
};

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
