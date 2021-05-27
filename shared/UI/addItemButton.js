import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import theme from '../theme/theme';

const AddItemButton = (props) => {
  return (
    <Pressable onPress={props.pressed} style={styles.button}>
      <Text style={styles.text}>+</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colorsLight.accent1,
    borderRadius: theme.margins.borderRadius,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});

export default AddItemButton;
