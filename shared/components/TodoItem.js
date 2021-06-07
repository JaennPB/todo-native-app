import React from 'react';
import { Text, StyleSheet, Pressable, View } from 'react-native';

import theme from '../theme/theme';

const TodoItem = (props) => {
  const textStyles = () => {
    let textStyles = [styles.text];
    if (props.isCompleted) {
      textStyles.push({ textDecorationLine: 'line-through', opacity: 0.6 });
    } else {
      textStyles.push({ textDecorationLine: 'none' });
    }
    return textStyles;
  };

  return (
    <View style={styles.todoItem}>
      <View style={styles.titleSection}>
        <Pressable onPress={props.onToggleComplete} style={styles.complete}>
          {props.isCompleted ? <View style={styles.checked} /> : null}
        </Pressable>
        <Text style={textStyles()}>{props.title}</Text>
      </View>
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
    width: '100%',
    marginHorizontal: 20,
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  titleSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
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
    borderColor: theme.colorsLight.accent2,
    borderWidth: 2,
    borderRadius: 5,
    height: 20,
    width: 20,
    marginRight: 10,
    padding: 2,
  },
  checked: {
    backgroundColor: theme.colorsLight.accent1,
    height: '100%',
    width: '100%',
    borderRadius: 2,
  },
});

export default TodoItem;
