import React from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';
import theme from '../theme/theme';

const Input = (props) => {
  return (
    <>
      <Text>{props.label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    width: '60%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: theme.margins.borderRadius,
  },
});

export default Input;
