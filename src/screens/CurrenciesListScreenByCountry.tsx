import * as React from 'react';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { appTheme } from '../providers/ThemeProvider.tsx';
import { List, Searchbar, Text } from 'react-native-paper';
import { Countries } from '../services/api.ts';
import { Country } from '../types/finance.ts';
import { useDebounce } from '../hooks/useDebounce.tsx';

const CurrenciesListScreenByCountry = ({ navigation }: any) => {
  const [countriesFiltered, setCountriesFiltered] = useState(Countries);
  const [searchQuery, setSearchQuery] = React.useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 100);

  const onChangeSearch = (query: string) => setSearchQuery(query);
  const onPressCurrency = (country: Country) => {
    navigation.navigate('TransferStartScreen', {
      selectedCurrency: { ...country.currency, emoji: country.emoji },
    });
  };

  useEffect(() => {
    if (debouncedSearchQuery) {
      // TODO: Extract and write tests
      setCountriesFiltered(
        Countries.filter(country => {
          return [
            ...Object.values(country),
            ...Object.values(country.currency),
          ].some(property => {
            if (typeof property === 'string') {
              return property
                .toUpperCase()
                .includes(debouncedSearchQuery.toUpperCase());
            }
          });
        }),
      );

      return;
    }

    setCountriesFiltered(Countries);
  }, [debouncedSearchQuery]);

  return (
    <View style={styles.container}>
      <View style={styles.containerAction}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.containerList}>
        {countriesFiltered.map(country => (
          <List.Item
            style={styles.containerListItem}
            left={() => (
              <View style={styles.containerFlag}>
                <Text>{country.emoji}</Text>
              </View>
            )}
            onPress={() => onPressCurrency(country)}
            key={country.code}
            title={`(${country.currency.code}) ${country.name}`}
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
  containerListItem: {
    paddingHorizontal: appTheme.spacing.base,
  },
  containerAction: {
    padding: appTheme.spacing.base,
  },
  containerFlag: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CurrenciesListScreenByCountry;
