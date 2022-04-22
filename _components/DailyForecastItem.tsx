import {StyleSheet, Image, Text} from 'react-native';
import React from 'react';
import {DailyForecastModel} from "../_models/DailyForecastModel";
import {isNightTime} from "../_functions/Functions";

const DailyForecastItem: React.FC<{ forecastData: DailyForecastModel}> = ({forecastData}) => {

    const dateVal = Date.parse(forecastData.Date);

    const newDate = new Date(dateVal);

    const dateString = Number(newDate.getMonth() + 1).toString() + '/' + newDate.getDate().toString();

    const aS = isNightTime ? forecastData.Night.Icon : forecastData.Day.Icon;

    return (
        <>
            <Text style={_s.weatherText}>{forecastData.Temperature.Minimum.Value}&deg;/{forecastData.Temperature.Maximum.Value}&deg;</Text>
            {(aS === 1) && <Image style={_s.icon} source={require('../_assets/_icons/Sunny.png')}/>}
            {(aS === 2) && <Image style={_s.icon} source={require('../_assets/_icons/Mostly_Sunny.png')}/>}
            {(aS === 3) && <Image style={_s.icon} source={require('../_assets/_icons/Partly_Sunny.png')}/>}
            {(aS === 4) && <Image style={_s.icon} source={require('../_assets/_icons/Intermittent_Clouds.png')}/>}
            {(aS === 5) && <Image style={_s.icon} source={require('../_assets/_icons/Hazy_Sunshine.png')}/>}
            {(aS === 6) && <Image style={_s.icon} source={require('../_assets/_icons/Mostly_Cloudy.png')}/>}
            {(aS === 7) && <Image style={_s.icon} source={require('../_assets/_icons/Cloudy.png')}/>}
            {(aS === 8) && <Image style={_s.icon} source={require('../_assets/_icons/Dreary_(Overcast).png')}/>}
            {(aS === 11) && <Image style={_s.icon} source={require('../_assets/_icons/Fog.png')}/>}
            {(aS === 12) && <Image style={_s.icon} source={require('../_assets/_icons/Showers.png')}/>}
            {(aS === 13) && <Image style={_s.icon} source={require('../_assets/_icons/Mostly_Cloudy_w-_Showers.png')}/>}
            {(aS === 14) && <Image style={_s.icon} source={require('../_assets/_icons/Partly_Cloudy_w-_Showers.png')}/>}
            {(aS === 15) && <Image style={_s.icon} source={require('../_assets/_icons/T-Storms.png')}/>}
            {(aS === 16) && <Image style={_s.icon} source={require('../_assets/_icons/Mostly_Cloudy_w-T-Storms.png')}/>}
            {(aS === 17) && <Image style={_s.icon} source={require('../_assets/_icons/Partly_Sunny_w-_T-Storms.png')}/>}
            {(aS === 18) && <Image style={_s.icon} source={require('../_assets/_icons/Rain.png')}/>}
            {(aS === 19) && <Image style={_s.icon} source={require('../_assets/_icons/Flurries.png')}/>}
            {(aS === 20) && <Image style={_s.icon} source={require('../_assets/_icons/Mostly_Cloudy_w-_Flurries.png')}/>}
            {(aS === 21) && <Image style={_s.icon} source={require('../_assets/_icons/Partly_Sunny_w-_Flurries.png')}/>}
            {(aS === 22) && <Image style={_s.icon} source={require('../_assets/_icons/Snow.png')}/>}
            {(aS === 23) && <Image style={_s.icon} source={require('../_assets/_icons/Mostly_Cloudy_w-_Snow.png')}/>}
            {(aS === 24) && <Image style={_s.icon} source={require('../_assets/_icons/Ice.png')}/>}
            {(aS === 25) && <Image style={_s.icon} source={require('../_assets/_icons/Sleet.png')}/>}
            {(aS === 26) && <Image style={_s.icon} source={require('../_assets/_icons/Freezing_Rain.png')}/>}
            {(aS === 29) && <Image style={_s.icon} source={require('../_assets/_icons/Rain_and_Snow.png')}/>}
            {(aS === 30) && <Image style={_s.icon} source={require('../_assets/_icons/Hot.png')}/>}
            {(aS === 31) && <Image style={_s.icon} source={require('../_assets/_icons/Cold.png')}/>}
            {(aS === 32) && <Image style={_s.icon} source={require('../_assets/_icons/Windy.png')}/>}
            {(aS === 33) && <Image style={_s.icon} source={require('../_assets/_icons/Clear.png')}/>}
            {(aS === 34) && <Image style={_s.icon} source={require('../_assets/_icons/Mostly_Clear.png')}/>}
            {(aS === 35) && <Image style={_s.icon} source={require('../_assets/_icons/Partly_Cloudy.png')}/>}
            {(aS === 36) && <Image style={_s.icon} source={require('../_assets/_icons/Intermittent_Clouds_Night.png')}/>}
            {(aS === 37) && <Image style={_s.icon} source={require('../_assets/_icons/Hazy_Moonlight.png')}/>}
            {(aS === 38) && <Image style={_s.icon} source={require('../_assets/_icons/Mostly_Cloudy_Night.png')}/>}
            {(aS === 39) && <Image style={_s.icon} source={require('../_assets/_icons/Partly_Cloudy_w-_Showers.png')}/>}
            {(aS === 40) && <Image style={_s.icon} source={require('../_assets/_icons/Mostly_Cloudy_w-_Showers.png')}/>}
            {(aS === 41) && <Image style={_s.icon} source={require('../_assets/_icons/Partly_Cloudy_w-_T-Storms.png')}/>}
            {(aS === 42) && <Image style={_s.icon} source={require('../_assets/_icons/Mostly_Cloudy_w-_T-Storms.png')}/>}
            {(aS === 43) && <Image style={_s.icon} source={require('../_assets/_icons/Mostly_Cloudy_w-_Flurries_Night.png')}/>}
            {(aS === 44) && <Image style={_s.icon} source={require('../_assets/_icons/Mostly_Cloudy_w-_Snow.png')}/>}
            <Text style={_s.weatherText}>{isNightTime ? forecastData.Night.IconPhrase : forecastData.Day.IconPhrase}</Text>
            <Text style={_s.weatherText}>{dateString}</Text>
        </>
    );
};

export default DailyForecastItem;


const _s = StyleSheet.create({
    block2: {
        alignItems:'center',
    },
    weatherText: {
        position: 'relative',
        color: '#ddd',
        fontSize:8,
        textAlign:'center'
    },
    icon: {
        width:50,
        height:30
    }
});
