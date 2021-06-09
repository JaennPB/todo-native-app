import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import WelcomeScreen from './shared/container/WelcomeScreen';
import MainApp from './shared/container/MainScreen';
import store from './store';
import theme from './shared/theme/theme';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor={theme.colorsLight.secondary}
        barStyle="dark-content"
      />

      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="welcomeScreen">
            <Stack.Screen
              name="welcomeScreen"
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="mainApp"
              component={MainApp}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
