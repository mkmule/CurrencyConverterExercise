import React from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native-paper';
import { useAppTheme } from '../providers/ThemeProvider.tsx';

interface Props {
  displayTime: string;
}

const ProcessingTimeInfo = ({ displayTime }: Props): React.JSX.Element => {
  const theme = useAppTheme();

  return (
    <View style={styles.container}>
      <View style={styles.containerWithIcon}>
        <MaterialCommunityIcons
          name="lightning-bolt"
          size={30}
          color={theme.colors.onBackground}
        />
        <Text variant="bodyMedium">Processing time - {displayTime}</Text>
      </View>
      <Text variant="bodySmall" style={styles.textSubtitle}>
        *Normal working hours & public holidays apply
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  containerWithIcon: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textSubtitle: {
    opacity: 0.5,
  },
});

export default ProcessingTimeInfo;
