import * as React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, TextInput, View } from 'react-native';
import { appTheme } from '../providers/ThemeProvider.tsx';
import ProcessingTimeInfo from '../components/ProcessingTimeInfo.tsx';
import InputMoneyAmount from '../components/InputMoneyAmount.tsx';
import { calculateFees, calculateSendAmount, convert, Fees } from '../utils/conversion.ts';
import { ConversionRateAED, ConversionRates, CurrencyAED, CurrencyUSD } from '../services/api.ts';
import ButtonCurrencySelector from '../components/ButtonCurrencySelector.tsx';
import FeesInfo from '../components/FeesInfo.tsx';

const TransferStartScreen = ({ route, navigation }: any) => {
  const currencyFrom = CurrencyAED;
  const [currencyTo, setCurrencyTo] = useState(CurrencyUSD);
  const [conversionRate, setConversionRate] = useState(ConversionRateAED);

  const amountFromRef = useRef<TextInput | any>(null);
  const [amountFrom, setAmountFrom] = useState(0);
  const [amountTo, setAmountTo] = useState(0);

  const [fees, setFees] = useState<Fees>({ serviceFee: 0, vatFee: 0 });
  const [sendingAmount, setSendingAmount] = useState<number>(0);

  const convertTo = useCallback(
    (from: number) => {
      const feesNew = calculateFees(from, currencyFrom.decimalDigits)
      const sendingAmountNew = calculateSendAmount(from, currencyFrom.decimalDigits, feesNew);

      setFees(feesNew);
      setSendingAmount(sendingAmountNew);
      setAmountTo(convert(sendingAmountNew, conversionRate.rate, currencyTo.decimalDigits));
    },
    [currencyTo.decimalDigits, conversionRate.rate],
  );
  const convertFrom = useCallback(
    (to: number) => {
      const amountFromNew = convert(to, conversionRate.inverseRate, currencyFrom.decimalDigits);
      const feesNew = calculateFees(amountFromNew, currencyFrom.decimalDigits)
      const sendingAmountNew = calculateSendAmount(amountFromNew, currencyFrom.decimalDigits, feesNew);

      setFees(feesNew);
      setSendingAmount(sendingAmountNew);
      setAmountFrom(sendingAmountNew);
    },
    [currencyFrom.decimalDigits, conversionRate.inverseRate],
  );

  const onOpenCurrencySelection = () => {
    navigation.navigate('CurrenciesListScreen');
  }
  const onStartTransfer = () => {
    console.log('Pressed: onStartTransfer');
  };

  useEffect(() => {
    const selectedCurrency = route.params?.selectedCurrency;

    if (selectedCurrency) {
      const newCurrency = selectedCurrency;
      const newRate = ConversionRates[selectedCurrency.code];

      setAmountFrom(amountFromRef.current?.getDisplayValue?.());
      setAmountTo(convert(amountFrom, newRate.rate, newCurrency.decimalDigits));
      setCurrencyTo(newCurrency);
      setConversionRate(newRate);
    }
  }, [amountFrom, convertTo, route.params?.selectedCurrency]);

  return (
    <View style={styles.container}>
      <View style={styles.containerInputForm}>
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
            onChangeAmount={convertTo}
            ref={amountFromRef}
            value={amountFrom}
          />
        </View>
        <View style={styles.containerInputFormFees}>
          <FeesInfo
            conversionRate={conversionRate}
            currency={currencyFrom}
            fees={fees}
            sendingAmount={sendingAmount}
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
      <View style={styles.containerSubmitAction}>
        <Button icon="bank-transfer-out" mode="contained" onPress={onStartTransfer}>
          Start transfer
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appTheme.colors.background,
    flex: 1,
    paddingHorizontal: appTheme.spacing.base,
    paddingVertical: appTheme.spacing.base * 2,
  },
  containerInputForm: {
    // width: '100%',
  },
  containerInputMoneyAmount: {
    display: 'flex',
    flexDirection: 'row',
  },
  containerInputMoneyAmountInput: {
    flexGrow: 1,
  },
  containerInputFormFees: {
    marginVertical: appTheme.spacing.base,
  },
  containerInputMoneyAmountButton: {
    marginRight: -appTheme.spacing.base,
    width: 110,
    zIndex: 1,
  },
  containerProcessingTime: {
    display: 'flex',
    justifyContent: 'center',
    marginVertical: appTheme.spacing.base * 2,
  },
  containerSubmitAction: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  title: {
    textAlign: 'center',
  },
});

export default TransferStartScreen;
