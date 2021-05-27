import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TodoItem = (props) => {
  return <Text>{props.title}</Text>;
};

export default TodoItem;
