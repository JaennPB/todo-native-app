import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Button from '../UI/Button';
import Input from '../UI/Input';
import theme from '../theme/theme';

const WelcomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Input label="How should I call you?" />
      <Text>Select theme:</Text>
      <View style={styles.themeContainer}>
        <Button>Dark</Button>
        <Button>Light</Button>
      </View>
      <Button
        title="begin"
        pressed={() => props.navigation.navigate('mainApp')}
      >
        Begin
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorsLight.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  themeContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default WelcomeScreen;
