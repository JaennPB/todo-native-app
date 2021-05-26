import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import theme from '../theme/theme';

const mainApp = () => {
  return (
    <View style={styles.main}>
      <Text>Main</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.colorsLight.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default mainApp;
