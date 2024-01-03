import * as React from 'react';
import { Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { appTheme } from '../providers/ThemeProvider.tsx';
import ProcessingTimeInfo from '../components/ProcessingTimeInfo.tsx';

const TransferStartScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="displaySmall" style={styles.title}>
        How much do you want to transfer?
      </Text>

      <View>
        <Text>This is main form</Text>
      </View>

      <ProcessingTimeInfo displayTime={'1 Hour'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: appTheme.spacing.base,
  },
  title: {
    textAlign: 'center',
  },
});

export default TransferStartScreen;
