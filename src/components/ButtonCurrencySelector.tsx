import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { Currency } from '../types/finance.ts';
import { appTheme } from '../providers/ThemeProvider.tsx';

interface Props {
  currency: Currency;
  disabled?: boolean;
  onButtonPressed?: () => void;
  title?: string;
}

const ButtonCurrencySelector = ({ title, disabled, currency, onButtonPressed }: Props): React.JSX.Element => {
  return (
    <Button
      mode="text"
      disabled={disabled}
      onPress={onButtonPressed}
      style={styles.container}
    >
      <View>
        {title && <Text style={styles.textTitle}>{title}</Text>}
        <View style={styles.containerCurrency}>
          {currency.emoji && <Text style={styles.textEmoji}>{currency.emoji}</Text>}
          <Text style={styles.textCurrency}>{currency.code}</Text>
          {onButtonPressed && <Text style={styles.textChevron}> ⌄</Text>}
        </View>
      </View>
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: appTheme.spacing.base,
    backgroundColor: '#6454f6',
  },
  containerCurrency: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textTitle: {
    color: 'white',
    fontSize: 10,
  },
  textEmoji: {
    paddingRight: appTheme.spacing.base / 2,
    fontSize: 30,
  },
  textCurrency: {
    marginBottom: appTheme.spacing.base / 2,
    color: 'white',
    fontSize: 16,
  },
  textChevron: {
    marginBottom: appTheme.spacing.base,
    color: 'white',
    fontSize: 22,
  },
});

export default ButtonCurrencySelector;
