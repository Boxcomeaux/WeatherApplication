import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native';
import Colors from '../_globals/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoadingModal = () => {
  return (
    <View style={_s.main}>
        <View style={_s.container}>
          <Icon name="weather-sunny" size={40} color={Colors.beige}/>
            <Text style={_s.loadingText}>Loading...</Text>
        </View>
    </View>
  );
};

export default LoadingModal;

const _s = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    flex: 1,
    zIndex: 100,
    height: '100%',
    width: '100%',
    backgroundColor: Colors.teal,
    position: 'absolute',
  },
  container: {
    width: 600,
    flex: 1,
    position: 'relative',
    maxWidth: '80%',
    minHeight: 200,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop:10,
    color: Colors.beige,
  },
});
