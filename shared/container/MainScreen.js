import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Alert,
} from 'react-native';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import TodoItem from '../components/TodoItem';
import theme from '../theme/theme';
import AddItemButton from '../UI/addItemButton';
import Button from '../UI/Button';
import Input from '../UI/Input';

import {
  addingToggle,
  addTodo,
  deleteTodo,
  completeTodo,
} from '../../store/reducer';

// =================================================================================

const mainApp = (props) => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user);
  const isAdding = useSelector((state) => state.adding);
  const todosArray = useSelector((state) => state.todos);
  const completedTodosArray = useSelector((state) => state.completedTodos);

  const [newTodo, setNewTodo] = useState('');

  const { navigation } = props;

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });
  }, [navigation]);

  const toggleAddTodo = () => {
    dispatch(addingToggle());
  };

  const addTodoHandler = () => {
    if (!newTodo) {
      Alert.alert('Please add something');
      return;
    }
    dispatch(addTodo(newTodo));
    dispatch(addingToggle());
    setNewTodo('');
  };

  const deleteItemHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const completeItemHandler = (id) => {
    dispatch(completeTodo(id));
  };

  const todos = todosArray.map((item, index) => (
    <TodoItem
      title={item}
      key={item}
      onDelete={() => deleteItemHandler(index)}
      onComplete={() => completeItemHandler(index)}
      isCompleted={completedTodosArray.includes(item)}
    />
  ));

  return (
    <>
      <StatusBar
        backgroundColor={theme.colorsLight.primary}
        barStyle="dark-content"
      />
      <SafeAreaView style={styles.main}>
        <Text>Welcome {username}</Text>
        <Text>{moment().format('MMM Do YYYY')}</Text>
        <View style={styles.allSection}>
          {todos.length !== 0 ? todos : <Text>please add something to do</Text>}
        </View>
        {isAdding ? (
          <View style={styles.buttonSection}>
            <Button pressed={toggleAddTodo}>Cancel</Button>
            <Input
              onChangeText={(value) => setNewTodo(value)}
              value={newTodo}
              autoFocus={isAdding}
              isAddItemInput
            />
            <Button pressed={addTodoHandler}>Add</Button>
          </View>
        ) : null}
        {isAdding ? null : <AddItemButton pressed={toggleAddTodo} />}
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
    backgroundColor: theme.colorsLight.inputField,
    width: '100%',
    height: '60%',
    paddingVertical: 20,
  },
  buttonSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20,
  },
});

export default mainApp;
