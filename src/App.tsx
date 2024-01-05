import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ThemeProvider from './providers/ThemeProvider.tsx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransferStartScreen from './screens/TransferStartScreen.tsx';
import CurrenciesListScreenByCountry from './screens/CurrenciesListScreenByCountry.tsx';

const Stack = createNativeStackNavigator();

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator
            initialRouteName={'TransferStartScreen'}
            screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen
              name="TransferStartScreen"
              options={{ title: 'Start Transfer' }}
              component={TransferStartScreen}
            />
            <Stack.Screen
              name="CurrenciesListScreen"
              options={{ title: 'Select Currency' }}
              component={CurrenciesListScreenByCountry}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </ThemeProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
