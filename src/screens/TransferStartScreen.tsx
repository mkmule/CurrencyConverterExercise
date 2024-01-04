import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Button, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { appTheme } from '../providers/ThemeProvider.tsx';
import ProcessingTimeInfo from '../components/ProcessingTimeInfo.tsx';
import InputMoneyAmount from '../components/InputMoneyAmount.tsx';
import { convert } from '../utils/conversion.ts';
import { CurrencyAED, CurrencyUSD, getCurrencies } from '../services/api.ts';
import { Currency } from '../types/finance.ts';

const TransferStartScreen = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const currencyFrom = CurrencyAED;
  const [currencyTo, setCurrencyTo] = useState(CurrencyUSD);

  const [rate, setRate] = useState(0.27177700795811);
  const [rateInverse, setRateInverse] = useState(3.6794871189182);

  const [amountFrom, setAmountFrom] = useState(0);
  const [amountTo, setAmountTo] = useState(0);

  useEffect(() => {
    getCurrencies()
      .then(currencies => {
        setCurrencies(Object.values(currencies));
      })
      .catch(() => {
        setCurrencies([]);
      });
  }, []);

  const convertTo = useCallback(
    (from: number) => {
      setAmountFrom(from);
      setAmountTo(convert(from, rate, 2));
    },
    [rate],
  );
  const convertFrom = useCallback(
    (to: number) => {
      setAmountTo(to);
      setAmountFrom(convert(to, rateInverse, 2));
    },
    [rateInverse],
  );
  const submitForm = () => {
    console.log('Pressed: submitForm');
  };

  return (
    <View style={styles.container}>
      <Text variant="displaySmall" style={styles.title}>
        How much do you want to transfer?
      </Text>

      <View style={styles.containerInputForm}>
        <Text>
          Convert rate: {rate}
          {'\n'}
          Inverse rate: {rateInverse}
        </Text>
        <View>
          <Text>
            From: {currencyFrom.name} ({amountFrom})
          </Text>
          <InputMoneyAmount
            decimals={2}
            value={amountFrom}
            onChangeAmount={convertTo}
          />
        </View>
        <View>
          <Text>
            To: {currencyTo.name} ({amountTo})
          </Text>
          <InputMoneyAmount
            decimals={2}
            value={amountTo}
            onChangeAmount={convertFrom}
          />
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
    height: '100%',
    display: 'flex',
    padding: appTheme.spacing.base,
  },
  containerInputForm: {
    width: '100%',
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
