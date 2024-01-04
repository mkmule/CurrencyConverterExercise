import React from 'react';
import { SafeAreaView } from 'react-native';
// import TransferStartScreen from './screens/TransferStartScreen.tsx';
import ThemeProvider from './providers/ThemeProvider.tsx';
import CurrenciesListScreen from './screens/CurrenciesListScreen.tsx';

const App = (): React.JSX.Element => {
  return (
    <ThemeProvider>
      <SafeAreaView>
        {/*<TransferStartScreen />*/}
        <CurrenciesListScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
