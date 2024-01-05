import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

interface Props {
  children: React.ReactNode;
}

const DismissKeyboard = ({ children }: Props) => (
  <TouchableWithoutFeedback
    accessible={false}
    onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
export default DismissKeyboard;
