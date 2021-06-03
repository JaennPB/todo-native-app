import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

import theme from '../theme/theme';

const Button = (props) => {
  const buttonStyles = (pressed) => {
    let updatedStyles = {};

    if (props.isWelcomeButton) {
      updatedStyles = { width: '50%' };
    }

    return [styles.button, updatedStyles];
  };

  return (
    <Pressable
      onPress={props.pressed}
      style={({ pressed }) => buttonStyles(pressed)}
    >
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
    textAlign: 'center',
    color: 'white',
  },
});

export default Button;
