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
  incompleteTodo,
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
    } else if (todosArray.includes(newTodo)) {
      Alert.alert('Todo already added!');
      setNewTodo('');
      return;
    }

    dispatch(addTodo(newTodo));
    dispatch(addingToggle());
    setNewTodo('');
  };

  const deleteItemHandler = (item) => {
    dispatch(deleteTodo(item));
  };

  const toggleCompleteHandler = (item) => {
    if (completedTodosArray.includes(item)) {
      dispatch(incompleteTodo(item));
      console.log('incomplete');
    } else {
      dispatch(completeTodo(item));
      console.log('complete');
    }
  };

  const todos = todosArray.map((item, index) => (
    <TodoItem
      title={item}
      key={item}
      onDelete={() => deleteItemHandler(item)}
      onToggleComplete={() => toggleCompleteHandler(item)}
      isCompleted={completedTodosArray.includes(item)}
    />
  ));

  return (
    <>
      <StatusBar
        backgroundColor={theme.colorsLight.secondary}
        barStyle="dark-content"
      />
      <SafeAreaView style={styles.main}>
        <Text>Welcome {username}</Text>
        <Text>{moment().format('MMM Do YYYY')}</Text>
        <View style={styles.allSection}>
          {todos.length !== 0 ? todos : <Text>Please add something to-do</Text>}
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
    backgroundColor: theme.colorsLight.primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : null,
    paddingBottom: 10,
  },
  allSection: {
    backgroundColor: theme.colorsLight.secondary,
    width: '100%',
    height: '60%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
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
