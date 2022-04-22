import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {DailyForecastModel} from "../_models/DailyForecastModel";
import DailyForecastItem from "./DailyForecastItem";
import AnimateMe from "../_animation/AnimateMe";

const DailyForecast: React.FC<{dataObj: DailyForecastModel[]}> = ({
  dataObj,
}) => {
  return (
    <View style={_s.main}>
      <View style={_s.bg} />
      <Text style={_s.title}>5-Day Forecast</Text>
      {dataObj.length > 0 && <View style={_s.container}>
        {
              dataObj?.map((item, index: number) => (
                  <AnimateMe
                      style={index < 3 ? _s.anim : _s.anim2}
                      from={0}
                      to={1}
                      delay={200 * index}
                      duration={600}
                      type="opacity" key={item.MobileLink}>
                    <DailyForecastItem forecastData={item} index={index}/>
                  </AnimateMe>
              ))
          }
      </View>}
    </View>
  );
};

export default DailyForecast;

const _s = StyleSheet.create({
  main: {
    position: 'absolute',
    bottom: '5%',
    right: '5%',
    width: '65%',
    minWidth: 200,
    alignItems:'center'
  },
  bg: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    backgroundColor: '#000',
    opacity: 0.4,
    position: 'absolute',
  },
  container: {
    flex: 1,
    top: 0,
    left: 0,
    zIndex:20,
    width:'86%',
    paddingBottom:5,
    alignItems:'center',
    flexDirection:'row',
    flexWrap:'wrap',
  },
  anim: {
    borderBottomColor: 'rgba(255,255,255,0.2)',
    borderBottomWidth: 1,
    flexBasis: '30%',
    flexGrow:1,
    alignItems:'center',
    paddingVertical:10,
    flexShrink:0,
  },
  anim2: {
    flexBasis: '30%',
    flexGrow:1,
    alignItems:'center',
    paddingVertical:10,
    flexShrink:0,
  },
  title: {
    color:'#fff',
    marginTop:10
  }
});
