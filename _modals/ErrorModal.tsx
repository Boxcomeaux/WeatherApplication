import {StyleSheet, View} from 'react-native';
import React from 'react';
import Colors from '../_globals/Colors';

const ErrorModal = () => {
  return (
    <View style={_s.main}>
      <View style={_s.bg} />
      <View style={_s.menu} />
    </View>
  );
};

export default ErrorModal;

const _s = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    flex: 1,
    position: 'absolute',
    backgroundColor: Colors.teal,
    opacity: 0.5,
  },
  menu: {
    width: 600,
    maxWidth: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});
