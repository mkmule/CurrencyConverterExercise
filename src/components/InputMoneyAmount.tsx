import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';

interface Props {
  value: number;
  onChangeAmount: (amount: number) => void;
  decimals: number;
}

// TODO: Merge jsons into a single one and read as configuration

const InputMoneyAmount = ({
  value,
  decimals,
  onChangeAmount,
}: Props): React.JSX.Element => {
  // const [amount, setAmount] = React.useState<string>('');
  const placeholder = useMemo(() => {
    return Number(0).toLocaleString('en', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }, [decimals]);

  const onChange = (val: string) => {
    // setAmount(val);
    onChangeAmount(Number(val));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType="decimal-pad"
        mode="outlined"
        value={String(value)}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  input: {
    textAlign: 'right',
    width: '100%',
  },
});

export default InputMoneyAmount;
