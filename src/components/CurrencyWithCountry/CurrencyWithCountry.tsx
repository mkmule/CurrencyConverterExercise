import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

interface Props {
  countryAlpha2: string;
  currencyAlpha3: string;
}

// TODO: Merge jsons into a single one and read as configuration

const CurrencyWithCountry = ({
  countryAlpha2,
  currencyAlpha3,
}: Props): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.containerWithIcon}>
        <Text variant="bodyMedium">{countryAlpha2}</Text>
        <Text variant="bodyMedium">{currencyAlpha3}</Text>
      </View>
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
});

export default CurrencyWithCountry;
