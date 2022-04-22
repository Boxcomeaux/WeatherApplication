import {View, StyleSheet} from 'react-native';
import React,{useState} from 'react';
import TabBarItem from './TabBarItem';
import Colors from '../_globals/Colors';

const TabBar: React.FC<{navigation: (name: string) => void}> = ({
  navigation,
}) => {
  const [currentlyActive, setCurrentlyActive] = useState('Today');

  const navigateAndCheckActive = (nameVal: string) => {
    setCurrentlyActive(nameVal);
    navigation(nameVal);
  };

  return (
    <View style={_s.tabBar}>
      <TabBarItem name="Today" onNavigation={navigateAndCheckActive} checkActive={currentlyActive}/>
      <TabBarItem name="Search" onNavigation={navigateAndCheckActive} checkActive={currentlyActive}/>
    </View>
  );
};

export default TabBar;

const _s = StyleSheet.create({
  tabBar: {
    height: 50,
    backgroundColor: Colors.wedding,
    width: '100%',
    elevation: 30,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#fff',
    zIndex:50,
    shadowOpacity: 0.3,
    shadowOffset: {
      height: -4,
      width: 0,
    },
    shadowRadius: 3,
    shadowColor: '#000',
  },
});
