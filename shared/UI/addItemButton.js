import React from 'react';
import { Pressable, Text } from 'react-native';

const AddItemButton = (props) => {
  return (
    <Pressable onPress={props.pressed}>
      <Text>+</Text>
    </Pressable>
  );
};

export default AddItemButton;
