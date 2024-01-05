import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Button, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { appTheme } from '../providers/ThemeProvider.tsx';
import ProcessingTimeInfo from '../components/ProcessingTimeInfo.tsx';
import InputMoneyAmount from '../components/InputMoneyAmount.tsx';
import { convert } from '../utils/conversion.ts';
import { ConversionRates, CurrencyAED, CurrencyUSD } from '../services/api.ts';
import ButtonCurrencySelector from '../components/ButtonCurrencySelector.tsx';

const TransferStartScreen = ({ route, navigation }: any) => {
  const currencyFrom = CurrencyAED;
  const [currencyTo, setCurrencyTo] = useState(CurrencyUSD);

  const [rate, setRate] = useState(0.27177700795811);
  const [rateInverse, setRateInverse] = useState(3.6794871189182);

  const [amountFrom, setAmountFrom] = useState(0);
  const [amountTo, setAmountTo] = useState(0);

  const convertTo = useCallback(
    (from: number) => {
      setAmountFrom(from);
      setAmountTo(convert(from, rate, currencyTo.decimalDigits));
    },
    [currencyTo.decimalDigits, rate],
  );
  const convertFrom = useCallback(
    (to: number) => {
      setAmountTo(to);
      setAmountFrom(convert(to, rateInverse, currencyFrom.decimalDigits));
    },
    [currencyFrom.decimalDigits, rateInverse],
  );
  const onOpenCurrencySelection = () => {
    navigation.navigate('CurrenciesListScreen');
  }
  const submitForm = () => {
    console.log('Pressed: submitForm');
  };

  useEffect(() => {
    const selectedCurrency = route.params?.selectedCurrency;

    if (selectedCurrency) {
      setCurrencyTo(selectedCurrency);
      setRate(ConversionRates[selectedCurrency.code].rate);
      setRateInverse(ConversionRates[selectedCurrency.code].inverseRate);

      setAmountTo(convert(amountFrom, ConversionRates[selectedCurrency.code].rate, selectedCurrency.decimalDigits));
    }
  }, [amountFrom, convertTo, route.params?.selectedCurrency]);

  return (
    <View style={styles.container}>
      <View style={styles.containerInputForm}>
        <Text>
          Convert rate: {rate} / {rateInverse}
        </Text>

        <View style={styles.containerInputMoneyAmount}>
          <View style={styles.containerInputMoneyAmountButton}>
            <ButtonCurrencySelector
              title={'You send exactly'}
              currency={currencyFrom}
              disabled
            />
          </View>
          <InputMoneyAmount
            decimals={2}
            value={amountFrom}
            onChangeAmount={convertTo}
          />
        </View>

        <View style={styles.containerInputMoneyAmount}>
          <View style={styles.containerInputMoneyAmountButton}>
            <ButtonCurrencySelector
              title={'Recipient gets'}
              currency={currencyTo}
              onButtonPressed={onOpenCurrencySelection}
            />
          </View>
          <View style={styles.containerInputMoneyAmountInput}>
            <InputMoneyAmount
              decimals={2}
              value={amountTo}
              onChangeAmount={convertFrom}
            />
          </View>
        </View>
      </View>

      <View style={styles.containerProcessingTime}>
        <ProcessingTimeInfo displayTime={'1 Hour'} />
      </View>
      <View>
        <Button icon="bank-transfer-out" mode="contained" onPress={submitForm}>
          Start transfer
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: appTheme.spacing.base,
  },
  containerInputForm: {
    // width: '100%',
  },
  containerInputMoneyAmount: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: appTheme.spacing.base,
  },
  containerInputMoneyAmountButton: {
    marginRight: -appTheme.spacing.base,
    width: 110,
    zIndex: 1,
  },
  containerInputMoneyAmountInput: {
    flexGrow: 1,
  },
  containerProcessingTime: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
  },
  containerSubmitAction: {
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
});

export default TransferStartScreen;
