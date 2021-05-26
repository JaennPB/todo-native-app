import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

import theme from '../theme/theme';

const Button = (props) => {
  return (
    <Pressable onPress={props.pressed} style={styles.button}>
      <Text style={styles.text}>{props.children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colorsLight.accent1,
    paddingHorizontal: theme.margins.paddingH,
    paddingVertical: theme.margins.paddingV,
    borderRadius: theme.margins.borderRadius,
  },
  text: {
    color: 'white',
  },
});

export default Button;
