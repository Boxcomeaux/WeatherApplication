import React, {useState} from 'react';
import axios from 'axios';
import {Alert} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {getLocalWeather, getPermissions} from "../_functions/Functions";

export const API_URL: string = 'http://dataservice.accuweather.com/';
export const API_KEY: string = '1PDhUfBAVN4AKYUheEBkL2Ms0B4uRd2b';

const init = {
  locationData: null,
  weatherData: null,
  dailyForecast: null,
  loading: true,
  retrieveData: () => {},
};

export const Context = React.createContext(init);


export const DataProvider: React.FC<{children: any}> = ({children}) => {
  const [locationData, setLocationData] = useState({});
  const [weatherData, setWeatherData] = useState({});
  const [dailyForecast, setDailyForecast] = useState(null);
  const [loading, setLoading] = useState(true);

  const startLoadingHandler = () => {
    setLoading(true);
  }
  const stopLoadingHandler = () => {
    setLoading(false);
  }
  const retrieveDataHandler = async () => {
    getPermissions().then(obj => {
      if (obj) {
        Geolocation.getCurrentPosition(
          async pos => {
            await axios(
                `${API_URL}locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${pos.coords.latitude}%2C${pos.coords.longitude}`
            ).then(async (data: any) => {
              if (data) {
                setLocationData(data?.data);
                await getLocalWeather(data.data.ParentCity.Key | 351197).then(
                  async wData => {
                    setWeatherData(wData);
                  },
                ).finally(async () => {
                  await axios(
                      `${API_URL}forecasts/v1/daily/5day/${data.data.ParentCity.Key}?apikey=${API_KEY}`,
                  ).then(async (forecastData: any) => {
                    if (forecastData.data.DailyForecasts) {
                      setDailyForecast(forecastData.data.DailyForecasts);
                    } else {
                      Alert.alert(
                          'Error',
                          'Unable to retrieve valid Daily Forecast Information',
                          [{text: 'Ok', style: 'cancel'}],
                      );
                    }
                  }).catch(() => {
                    Alert.alert(
                        'Error',
                        'Unable to retrieve Daily Forecast Information',
                        [{text: 'Ok', style: 'cancel'}],
                    );
                  });
                });
              } else {
                Alert.alert(
                  'Error',
                  'Unable to retrieve location Information',
                  [{text: 'Ok', style: 'cancel'}],
                );
              }
            }).catch(() => {
              Alert.alert(
                  'Error',
                  'Network Error',
                  [{text: 'Ok', style: 'cancel'}],
              );
            });
          },
          err => {
            Alert.alert('Error', err.message, [{text: 'Ok', style: 'cancel'}]);
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
          },
        );
      }
    });
  };

  const data = {
    locationData,
    weatherData,
    dailyForecast,
    loading,
    startLoading: startLoadingHandler,
    stopLoading: stopLoadingHandler,
    retrieveData: retrieveDataHandler,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};
