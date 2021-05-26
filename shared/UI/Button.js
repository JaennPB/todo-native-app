import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

import theme from '../theme/theme';

const Button = (props) => {
  return (
    <Pressable onPress={props.pressed} style={styles.button}>
      <Text>{props.children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colorsLight.accent1,
  },
});

export default Button;
