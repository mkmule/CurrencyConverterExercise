import { DefaultTheme, PaperProvider, useTheme } from 'react-native-paper';
import React from 'react';

const theme = {
  ...DefaultTheme,
  spacing: {
    base: 8,
  },
};

const ThemeProvider = ({ children }: any): React.JSX.Element => {
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};

export type AppTheme = typeof theme;
export const useAppTheme = () => useTheme<AppTheme>();
export default ThemeProvider;
