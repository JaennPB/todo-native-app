import React from 'react';
import { TextInput, Text, StyleSheet } from 'react-native';

const Input = (props) => {
  return (
    <>
      <Text>{props.label}</Text>
      <TextInput style={styles.input} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
  },
});

export default Input;
