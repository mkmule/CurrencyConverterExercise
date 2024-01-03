import { DefaultTheme, PaperProvider, useTheme } from 'react-native-paper';
import React from 'react';

export const appTheme = {
  ...DefaultTheme,
  spacing: {
    base: 8,
  },
};

const ThemeProvider = ({ children }: any): React.JSX.Element => {
  return <PaperProvider theme={appTheme}>{children}</PaperProvider>;
};

export type AppTheme = typeof appTheme;
export const useAppTheme = () => useTheme<AppTheme>();
export default ThemeProvider;
