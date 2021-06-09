import React, { useEffect } from 'react';
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
import MainDashboard from '../components/mainDashboard';
import AddTodoSection from '../components/addTodoSection';
import theme from '../theme/theme';

import { deleteTodo, completeTodo, incompleteTodo } from '../../store/reducer';

// =================================================================================

const mainApp = (props) => {
  const dispatch = useDispatch();
  const todosArray = useSelector((state) => state.todos);
  const completedTodosArray = useSelector((state) => state.completedTodos);

  const { navigation } = props;

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
    });
  }, [navigation]);

  const deleteItemHandler = (item) => {
    dispatch(deleteTodo(item));
  };

  const toggleCompleteHandler = (item) => {
    if (completedTodosArray.includes(item)) {
      dispatch(incompleteTodo(item));
    } else {
      dispatch(completeTodo(item));
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

  const completedTodos = completedTodosArray.map((item, index) => (
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
      <SafeAreaView style={styles.main}>
        <MainDashboard />
        <View style={styles.todosSection}>
          {todosArray.length > 0 ? (
            <View style={styles.tasksContainer}>
              <Text style={styles.tasksTitle}>Tasks</Text>
              {todos}
            </View>
          ) : (
            <Text>Add Tasks</Text>
          )}
          {completedTodosArray.length > 0 ? (
            <View style={styles.completedContainer}>
              <Text style={styles.completedTitle}>Completed</Text>
              {completedTodos}
            </View>
          ) : null}
        </View>
        <AddTodoSection />
      </SafeAreaView>
    </>
  );
};

const defaultContainerStyles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    marginBottom: 10,
  },
});

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.colorsLight.primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : null,
    paddingBottom: 10,
  },
  todosSection: {
    backgroundColor: theme.colorsLight.secondary,
    width: '100%',
    height: '65%',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  tasksTitle: {
    ...defaultContainerStyles.title,
  },
  completedTitle: {
    ...defaultContainerStyles.title,
    marginTop: 10,
  },
  tasksContainer: {
    ...defaultContainerStyles.container,
  },
  completedContainer: {
    ...defaultContainerStyles.container,
    borderTopColor: 'white',
    borderTopWidth: 1,
    marginTop: 10,
  },
});

export default mainApp;
