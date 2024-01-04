import * as React from 'react';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { appTheme } from '../providers/ThemeProvider.tsx';
import { List, Searchbar } from 'react-native-paper';
import { Currencies } from '../services/api.ts';
import { Currency } from '../types/finance.ts';

const CurrenciesListScreen = ({ navigation }: any) => {
  const [currenciesFiltered, setCurrenciesFiltered] = useState(Currencies);
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);
  const onPressCurrency = (currency: Currency) => {
    navigation.navigate('TransferStartScreen', {
      selectedCurrency: currency,
    });
  };

  useEffect(() => {
    if (searchQuery) {
      // TODO: Extract and write tests
      setCurrenciesFiltered(
        Currencies.filter(currency => {
          return Object.values(currency).some(property => {
            if (typeof property === 'string') {
              return property.toUpperCase().includes(searchQuery.toUpperCase());
            }
          });
        }),
      );

      return;
    }

    setCurrenciesFiltered(Currencies);
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <View style={styles.containerAction}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.containerList}>
        {currenciesFiltered.map(currency => (
          <List.Item
            onPress={() => onPressCurrency(currency)}
            key={currency.code}
            title={`(${currency.code}) ${currency.name}`}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
  },
  containerList: {
    flexGrow: 1,
  },
  containerAction: {
    padding: appTheme.spacing.base,
  },
});

export default CurrenciesListScreen;
