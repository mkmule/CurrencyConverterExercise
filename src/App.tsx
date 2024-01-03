import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import TransferStartScreen from './screens/TransferStartScreen.tsx';

const App = (): React.JSX.Element => {
  return (
    <PaperProvider>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <TransferStartScreen />
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
