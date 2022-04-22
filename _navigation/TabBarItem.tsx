import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ripple from 'react-native-material-ripple';
import Search from '../_pages/Search';
import Icon from 'react-native-vector-icons/Ionicons';

const size = 20;
const TabBarItem: React.FC<{
  name: string;
  onNavigation: (name: string) => void;
  selected: string,
  checkActive: string,
}> = ({name, onNavigation, checkActive}) => {
  let [color, setColor] = useState("#fff");

  const navigation = () => {
    onNavigation(name);
  };

  useEffect(() => {
    if(name !== checkActive){
      setColor('#aaa');
    }else{
      setColor('#fff');
    }
  }, [checkActive]);

  return (
    <View style={_s.tabBarItem}>
      <Ripple onPress={navigation} rippleColor="#fff" rippleSize={100}>
        <View style={_s.button}>
          {name === 'Today' && (
            <Icon style={_s.icon} size={size} color={color} name="today-outline" />
          )}
          {name === 'Search' && (
            <Icon style={_s.icon} size={size} color={color} name="search-outline" />
          )}
          <Text style={[_s.title, {color: color}]}>{name}</Text>
        </View>
      </Ripple>
    </View>
  );
};

export default TabBarItem;

const _s = StyleSheet.create({
  tabBarItem: {
    flex: 1,
    height: '100%',
  },
  button: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
      justifyItems:'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 8,
  },
    icon:{
      textAlign:'center'
    }
});
