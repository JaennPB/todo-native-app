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
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.description}>
            We will help you complete all your tasks.
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Input
            label="What is your name?"
            onChangeText={(value) => setUser(value)}
            value={user}
          />
        </View>
        <Button title="begin" pressed={startApp} isWelcomeButton>
          Let's go
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorsLight.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 120,
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
  description: {
    fontSize: 16,
    color: 'black',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
