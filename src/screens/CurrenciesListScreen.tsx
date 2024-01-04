import * as React from 'react';
import { StyleSheet } from 'react-native';
import { appTheme } from '../providers/ThemeProvider.tsx';
import { Text } from 'react-native-paper';

const CurrenciesListScreen = () => {
  return <Text>This is list</Text>;
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    padding: appTheme.spacing.base,
  },
});

export default CurrenciesListScreen;
