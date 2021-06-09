import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';
import { useSelector } from 'react-redux';

const mainDashboard = (props) => {
  const username = useSelector((state) => state.user);

  return (
    <>
      <Text>Welcome {username}</Text>
      <Text>{moment().format('MMM Do YYYY')}</Text>
    </>
  );
};

export default mainDashboard;
