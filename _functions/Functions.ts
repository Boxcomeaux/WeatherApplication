import axios from "axios";
import {API_KEY, API_URL} from "../_globals/global";
import {CurrentConditions} from "../_models/CurrentConditions";
import {Alert, PermissionsAndroid, Platform} from 'react-native';

export const getLocalWeather = async (key: string | number) => {
    const data: any = await axios(
        `${API_URL}currentconditions/v1/${key}?apikey=${API_KEY}`,
    ).catch((err) => {
        Alert.alert(
            'Error',
            err.message,
            [{text: 'Ok', style: 'cancel'}],
        );
    });

    const currentData: CurrentConditions = data?.data[0];
    return currentData;
};

export const getLocation = async (coordinates: any) => {
    return await axios(
        `${API_URL}locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${coordinates}`,
    ).then((data: any) => {
        return data;
    }).catch(() => {
        Alert.alert(
            'Error',
            'Unable to retrieve Location Information',
            [{text: 'Ok', style: 'cancel'}],
        );
    });
};

export const getPermissions = async () => {
    if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Weather App Permission',
                message: 'Weather App would like to access your location',
                buttonNeutral: 'Ask Me Later',
                buttonPositive: 'OK',
            },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
};

export const getForecast = async (key: any) => {
    return await axios(
        `${API_URL}forecasts/v1/daily/5day/${key}?apikey=${API_KEY}`,
    ).then((forecastData: any) => {
        return forecastData;
    }).catch(() => {
        Alert.alert('Error', 'Unable to retrieve forecast information.', [{text: 'Ok', style: 'cancel'}]);
    });
};

export const isNightTime = new Date(Date.now()).getHours() >= 18;
