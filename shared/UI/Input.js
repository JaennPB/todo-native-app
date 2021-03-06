import React from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';

import theme from '../theme/theme';

const Input = (props) => {
  const inputStyles = () => {
    let updatedStyles = {};

    if (props.isAddItemInput) {
      updatedStyles = { width: '55%', marginHorizontal: 10 };
    }
    return [styles.input, updatedStyles];
  };

  return (
    <>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={inputStyles()}
        onChangeText={props.onChangeText}
        value={props.value}
        autoFocus={props.autoFocus}
        autoCapitalize="sentences"
      />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 16,
  },
  input: {
    borderRadius: theme.margins.borderRadius,
    backgroundColor: theme.colorsLight.secondary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '70%',
  },
});

export default Input;
