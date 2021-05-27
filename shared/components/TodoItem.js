import React from 'react';
import { Text, StyleSheet, Pressable, View } from 'react-native';
import theme from '../theme/theme';

const TodoItem = (props) => {
  return (
    <View style={styles.todoItem}>
      <Pressable onPress={props.onComplete} style={styles.complete}></Pressable>
      <Text>{props.title}</Text>
      <Pressable onPress={props.onDelete} style={styles.delete}>
        <Text style={styles.textButton}>X</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    marginHorizontal: 20,
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  delete: {
    backgroundColor: theme.colorsLight.accent1,
    height: 20,
    width: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: 'white',
  },
  complete: {
    borderColor: theme.colorsLight.accent1,
    borderWidth: 2,
    borderRadius: 5,
    height: 20,
    width: 20,
  },
});

export default TodoItem;
