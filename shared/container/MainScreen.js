import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import TodoItem from '../components/TodoItem';
import theme from '../theme/theme';
import AddItemButton from '../UI/addItemButton';

import { addTodo } from '../../store/reducer';
import Input from '../UI/Input';

// =================================================================================

const mainApp = (props) => {
  const dispatch = useDispatch();
  const todosArray = useSelector((state) => state.todos);
  const username = useSelector((state) => state.user);

  const [newTodo, setNewTodo] = useState('');

  const { navigation } = props;

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });
  }, [navigation]);

  const todos = todosArray.map((item) => <TodoItem title={item} key={item} />);

  const addTodoHandler = () => {
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  return (
    <>
      <StatusBar
        backgroundColor={theme.colorsLight.primary}
        barStyle="dark-content"
      />
      <SafeAreaView style={styles.main}>
        <Text>Welcome {username}</Text>
        <View style={styles.allSection}>{todos}</View>
        <View style={styles.buttonSection}>
          <Input onChangeText={(value) => setNewTodo(value)} value={newTodo} />
          <AddItemButton pressed={addTodoHandler} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.colorsLight.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : null,
  },
  allSection: {
    backgroundColor: 'white',
    width: '90%',
    height: '80%',
  },
  buttonSection: {
    paddingBottom: 20,
  },
});

export default mainApp;
