import * as React from 'react';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { appTheme } from '../providers/ThemeProvider.tsx';
import { List, Searchbar } from 'react-native-paper';
import { Currencies } from '../services/api.ts';
import { Currency } from '../types/finance.ts';

const CurrenciesListScreen = () => {
  const [currenciesFiltered, setCurrenciesFiltered] = useState(Currencies);
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);
  const onPressCurrency = (currency: Currency) => {
    console.log(currency);
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
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {currenciesFiltered.map(currency => (
          <List.Item
            onPress={() => onPressCurrency(currency)}
            key={currency.code}
            title={`(${currency.code}) ${currency.name}`}
          />
        ))}
      </ScrollView>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    padding: appTheme.spacing.base,
  },
});

export default CurrenciesListScreen;
