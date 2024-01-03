import * as React from 'react';
import { Button, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { appTheme } from '../providers/ThemeProvider.tsx';
import ProcessingTimeInfo from '../components/ProcessingTimeInfo.tsx';
import InputMoneyAmount from '../components/InputMoneyAmount.tsx';

const TransferStartScreen = () => {
  const submitForm = () => {
    console.log('Pressed: submitForm');
  };

  return (
    <View style={styles.container}>
      <Text variant="displaySmall" style={styles.title}>
        How much do you want to transfer?
      </Text>

      <View style={styles.containerInputForm}>
        <Text>This is main form</Text>
        <InputMoneyAmount decimals={2} />
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
