import React from 'react';
import { SafeAreaView } from 'react-native';
import TransferStartScreen from './screens/TransferStartScreen.tsx';
import ThemeProvider from './providers/ThemeProvider.tsx';

const App = (): React.JSX.Element => {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <TransferStartScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
