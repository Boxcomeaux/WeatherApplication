import React, {useContext} from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import {AutoComplete} from "../_models/AutoComplete";
import Colors from "../_globals/Colors";
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/Ionicons';
import {Alert} from'react-native';
import {getForecast, getLocalWeather} from "../_functions/Functions";
import {Context} from "../_globals/global";

const Search: React.FC<{ searchData: AutoComplete , onNavigation: (data: {}) => void}> = ({searchData, onNavigation}) => {
    const _c = useContext(Context);

    const searchItemHandler = (key: string) => {
        _c.startLoading();
        const locationData = searchData.find(x => x.Key === key);
        getLocalWeather(key).then((weatherData: any) => {
            getForecast(key).then((dailyForecast: any) => {
                if(dailyForecast.data.DailyForecasts){
                    onNavigation({locationData, weatherData, dailyForecast: dailyForecast.data.DailyForecasts});
                }else{
                    _c.stopLoading();
                    Alert.alert(
                        'Error',
                        'Unable to retrieve Daily Forecast Information',
                        [{text: 'Ok', style: 'cancel'}],
                    );
                }
            })
        });
    };

    return (
        <View style={_s.main}>
            <FlatList style={_s.listContainer} data={searchData} keyExtraction={(item) => item.Key}
                      renderItem={(itemData) => {
                          return (
                              <Ripple rippleColor="#fff" rippleSize={450} onPress={() => {searchItemHandler(itemData.item.Key)}}>
                                  <View style={_s.row}>
                                      <Icon style={_s.icon} name="location-outline" size={20} color='#fff'/>
                                      <Text style={_s.address}>{itemData.item.LocalizedName + ', ' + itemData.item.AdministrativeArea?.ID}</Text>
                                  </View>
                              </Ripple>
                          )
                      }}/>
            <View/>
        </View>
    );
};

export default Search;

const _s = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
    },
    listContainer: {
        flex: 1,
        backgroundColor: Colors.wedding,
    },
    row: {
        flexDirection:'row',
        left:0,
        width:'100%',
        paddingHorizontal:15,
        paddingVertical: 18
    },
    icon: {
        textAlign:'center'
    },
    address: {
        color:'#fff',
        paddingLeft:10
    }
});
