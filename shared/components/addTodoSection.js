import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, dispatch, useDispatch } from 'react-redux';

import Button from '../UI/Button';
import Input from '../UI/Input';
import AddItemButton from '../UI/addItemButton';

import { addingToggle, addTodo } from '../../store/reducer';

const addTodoSection = (props) => {
  const dispatch = useDispatch();
  const isAdding = useSelector((state) => state.adding);
  const todosArray = useSelector((state) => state.todos);

  const [newTodo, setNewTodo] = useState('');

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

  return (
    <>
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
    </>
  );
};

const styles = StyleSheet.create({
  buttonSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20,
  },
});

export default addTodoSection;
