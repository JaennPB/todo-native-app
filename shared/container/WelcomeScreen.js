import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import Button from '../UI/Button';
import Input from '../UI/Input';
import theme from '../theme/theme';

import { setUsername } from '../../store/reducer';

const WelcomeScreen = (props) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState('');

  const startApp = () => {
    if (!user) {
      Alert.alert('Please add a name');
      return;
    }
    dispatch(setUsername(user));
    props.navigation.navigate('mainApp');
  };

  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Input
        label="How should I call you?"
        onChangeText={(value) => setUser(value)}
        value={user}
      />
      <Text>Select theme:</Text>
      <View style={styles.themeContainer}>
        <Button>Dark</Button>
        <Button>Light</Button>
      </View>
      <Button title="begin" pressed={startApp}>
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
