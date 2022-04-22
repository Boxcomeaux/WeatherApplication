import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import {CurrentConditions} from '../_models/CurrentConditions';
import AnimateMe from '../_animation/AnimateMe';
import {CurrentLocation} from "../_models/CurrentLocation";
import DailyForecast from "../_components/DailyForecast";
import {DailyForecastModel} from "../_models/DailyForecastModel";
import Colors from "../_globals/Colors";
import {isNightTime} from "../_functions/Functions";
import {Context} from "../_globals/global";

const Details: React.FC<{
  weatherData: CurrentConditions;
  locationData: CurrentLocation;
  dailyForecast: DailyForecastModel
}> = ({weatherData, locationData, dailyForecast}) => {

  const city = locationData?.ParentCity?.EnglishName === undefined ? locationData?.LocalizedName : locationData?.ParentCity?.EnglishName;
  const weatherText = weatherData?.WeatherText?.toUpperCase();
  const _c = useContext(Context);

  useEffect(() => {
    _c.stopLoading();
  },[]);
  return (
    <View style={_s.main}>
      <View style={_s.headerRow}>
        <AnimateMe
            style={_s.titleContainer}
            from={20}
            to={0}
            duration={1000}
            type="fadeUp">
          <Text style={_s.temp}>
            {weatherData?.Temperature?.Imperial?.Value}
          </Text>
        </AnimateMe>
        <View style={_s.detailsColumn}>
          <Text style={_s.subTemp}>&deg;{weatherData?.Temperature?.Imperial?.Unit}</Text>
          <Text style={_s.weatherText}>{weatherData?.WeatherText}</Text>
          <Text style={_s.weatherText}>{city + ', ' + locationData?.AdministrativeArea?.ID}</Text>
        </View>
      </View>
      {weatherText === 'SUNNY' && (
          <Image style={_s.img} source={require('./../_assets/_images/sunny.jpg')}/>
      )}
      {weatherText === 'MOSTLY SUNNY' && (
          <Image style={_s.img} source={require('./../_assets/_images/mostlysunny.jpg')}/>
      )}
      {weatherText === 'PARTLY SUNNY' && (
          <Image style={_s.img} source={require('./../_assets/_images/partlysunny.jpeg')}/>
      )}
      {(weatherText=== 'INTERMITTENT CLOUDS' && !isNightTime) && (
          <Image style={_s.img} source={require('./../_assets/_images/intermittentclouds.jpeg')}/>
      )}
      {weatherText === 'HAZY SUNSHINE' && (
          <Image style={_s.img} source={require('./../_assets/_images/hazy.jpg')}/>
      )}
      {weatherText === 'MOSTLY CLOUDY' && (
          <Image style={_s.img} source={require('./../_assets/_images/mostlycloudy.jpeg')}/>
      )}
      {weatherText === 'CLOUDY' && (
          <Image style={_s.img} source={require('./../_assets/_images/cloudy.jpeg')}/>
      )}
      {weatherText === 'DREARY (OVERCAST)' && (
          <Image style={_s.img} source={require('./../_assets/_images/dreary.jpg')}/>
      )}
      {weatherText === 'FOG' && (
          <Image style={_s.img} source={require('./../_assets/_images/fog.jpg')}/>
      )}
      {weatherText === "SHOWERS" && (
          <Image style={_s.img} source={require('./../_assets/_images/showers.jpg')}/>
      )}
      {weatherText === 'MOSTLY CLOUDY W/ SHOWERS' && (
          <Image style={_s.img} source={require('./../_assets/_images/rain.jpg')}/>
      )}
      {weatherText === 'PARTLY SUNNY W/ SHOWERS' && (
          <Image style={_s.img} source={require('./../_assets/_images/partlysunnyandshowers.jpeg')}/>
      )}
      {weatherText === 'T-STORMS' && (
          <Image style={_s.img} source={require('./../_assets/_images/tstorm.jpg')}/>
      )}
      {weatherText === 'MOSTLY CLOUDY W/T-STORMS' && (
          <Image style={_s.img} source={require('./../_assets/_images/mostlycloudywtstorms.jpeg')}/>
      )}
      {weatherText === 'PARTLY SUNNY W/T-STORMS' && (
          <Image style={_s.img} source={require('./../_assets/_images/partlysunnywtstorms.jpeg')}/>
      )}
      {weatherText === 'RAIN' && (
          <Image style={_s.img} source={require('./../_assets/_images/mostlycloudywshowers.jpeg')}/>
      )}
      {weatherText === 'FLURRIES' && (
          <Image style={_s.img} source={require('./../_assets/_images/flurries.jpeg')}/>
      )}
      {weatherText === 'MOSTLY CLOUDY W/ FLURRIES' && (
          <Image style={_s.img} source={require('./../_assets/_images/mostlycloudywflurries.jpeg')}/>
      )}
      {weatherText === 'PARTlY SUNNY W/ FLURRIES' && (
          <Image style={_s.img} source={require('./../_assets/_images/partlysunnywflurries.jpeg')}/>
      )}
      {weatherText === 'SNOW' && (
          <Image style={_s.img} source={require('./../_assets/_images/snow.jpg')}/>
      )}
      {weatherText === 'MOSTLY CLOUDY W/ SNOW' && (
          <Image style={_s.img} source={require('./../_assets/_images/mostlycloudywsnow.jpeg')}/>
      )}
      {weatherText === 'ICE' && (
          <Image style={_s.img} source={require('./../_assets/_images/ice.jpg')}/>
      )}
      {weatherText === 'SLEET' && (
          <Image style={_s.img} source={require('./../_assets/_images/sleet.jpeg')}/>
      )}
      {weatherText === 'FREEZING RAIN' && (
          <Image style={_s.img} source={require('./../_assets/_images/freezingrain.jpeg')}/>
      )}
      {weatherText === 'RAIN AND SNOW' && (
          <Image style={_s.img} source={require('./../_assets/_images/rainandsnow.jpeg')}/>
      )}
      {weatherText === 'HOT' && (
          <Image style={_s.img} source={require('./../_assets/_images/hot.jpg')}/>
      )}
      {weatherText === 'COLD' && (
          <Image style={_s.img} source={require('./../_assets/_images/cold.jpg')}/>
      )}
      {weatherText === 'WINDY' && (
          <Image style={_s.img} source={require('./../_assets/_images/windy.jpg')}/>
      )}
      {weatherText=== 'CLEAR' && (
          <Image style={_s.img} source={require('./../_assets/_images/clear.jpg')}/>
      )}
      {weatherText=== 'MOSTLY CLEAR' && (
          <Image style={_s.img} source={require('./../_assets/_images/mostlyclear.jpeg')}/>
      )}
      {weatherText === 'PARTLY CLOUDY' && (
          <Image style={_s.img} source={require('./../_assets/_images/partlycloudy.jpg')}/>
      )}
      {weatherText === 'INTERMITTENT CLOUDS' && (
          <Image style={_s.img} source={require('./../_assets/_images/intermittentcloudsnight.jpeg')}/>
      )}
      {weatherText === 'HAZY MOONLIGHT' && (
          <Image style={_s.img} source={require('./../_assets/_images/hazy.jpg')}/>
      )}
      {(weatherText === 'MOSTLY CLOUDY' && !isNightTime) && (
          <Image style={_s.img} source={require('./../_assets/_images/mostlycloudynight.jpg')}/>
      )}
      {weatherText === 'PARTLY CLOUDY W/ SHOWERS' && (
          <Image style={_s.img} source={require('./../_assets/_images/mostlycloudynight.jpg')}/>
      )}
      {(weatherText === 'MOSTLY CLOUDY W/ SHOWERS' && !isNightTime) && (
          <Image style={_s.img} source={require('./../_assets/_images/mostlycloudynight.jpg')}/>
      )}
      {weatherText === 'PARTLY CLOUDY W/ T-STORMS' && (
          <Image style={_s.img} source={require('./../_assets/_images/mostlycloudynight.jpg')}/>
      )}
      {(weatherText === 'MOSTLY CLOUDY W/ T-STORMS' && !isNightTime) && (
          <Image style={_s.img} source={require('./../_assets/_images/mostlycloudynight.jpg')}/>
      )}
      {(weatherText === 'MOSTLY CLOUDY W/ FLURRIES' && !isNightTime) && (
          <Image style={_s.img} source={require('./../_assets/_images/mostlycloudynight.jpg')}/>
      )}
      {(weatherText === 'MOSTLY CLOUDY W/ SNOW' && !isNightTime) && (
          <Image style={_s.img} source={require('./../_assets/_images/mostlycloudynight.jpg')}/>
      )}
      <DailyForecast dataObj={dailyForecast}/>
    </View>
  );
};

export default Details;

const scale = Dimensions.get('window').width;

const _s = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.wedding,
  },
  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
    zIndex: -1,
    opacity: 0.7,
  },
  headerRow: {
    flexDirection:'row',
    width:'100%',
    left:0,
    top:0
  },
  detailsColumn:{
    flexGrow:1,
    flexShrink:0,
    flexBasis:'30%',
    flex:1,
  },
  temp: {
    color: '#fff',
    fontSize: scale * 0.26,
    paddingLeft: 20,
    top:0,
    left:0,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  weatherText: {
    position: 'relative',
    fontSize:12,
    color: '#ddd',
    textShadowColor: 'rgba(0, 0, 0, 0.55)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
  },
  titleContainer: {
    flexBasis: scale * .36
  },
  subTemp: {
    color: '#fff',
    paddingLeft: 0,
    marginTop:28,
    marginBottom:10,
    left:-5,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontSize:26
  }
});
