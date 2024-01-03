import React from 'react';
import {SafeAreaView, ScrollView, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {PaperProvider} from 'react-native-paper';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <PaperProvider>
      <SafeAreaView style={backgroundStyle}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <MaterialCommunityIcons name="bell" size={30} color="#333" />
            <ActivityIndicator animating={true} color={MD2Colors.red800} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
