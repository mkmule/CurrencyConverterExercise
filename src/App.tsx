import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import TransferStartScreen from './screens/TransferStartScreen.tsx';
import ThemeProvider from './providers/ThemeProvider.tsx';

const App = (): React.JSX.Element => {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <TransferStartScreen />
        </ScrollView>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
