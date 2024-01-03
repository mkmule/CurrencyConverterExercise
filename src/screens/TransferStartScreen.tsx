import * as React from 'react';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import { useAppTheme } from '../providers/ThemeProvider.tsx';

const TransferStartScreen = () => {
  const theme = useAppTheme();

  return (
    <View style={{ padding: theme.spacing.base }}>
      <Text variant="displayLarge">Display Large</Text>
    </View>
  );
};

export default TransferStartScreen;
