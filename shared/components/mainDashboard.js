import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import moment from 'moment';
import { useSelector } from 'react-redux';

const mainDashboard = (props) => {
  const username = useSelector((state) => state.user);
  const [time, setTime] = useState();
  const [day, setDay] = useState();
  const [date, setDate] = useState();

  const getTimeAndDate = () => {
    setDay(moment().format('dddd'));
    setDate(moment().format('MMMM Do YYYY'));
    setTime(moment().format('LT'));
  };

  const getTime = () => {
    setTime(moment().format('LT'));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      getTime();
    }, 1000);
    getTimeAndDate();
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Text>Welcome {username}</Text>
      <Text>{time}</Text>
      <View style={styles.dateContainer}>
        <Text>{`${day}, ${date}`}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default mainDashboard;
