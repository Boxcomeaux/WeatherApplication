import {View, StyleSheet, Text, TextInput, Alert} from "react-native";
import React, {useCallback, useEffect} from "react";
import Colors from "../_globals/Colors";
import axios from "axios";
import Icon from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';
import {API_KEY, API_URL} from "../_globals/global";

let searchTimer: NodeJS.Timer;
const Stack: React.FC<{
    navigation: (name: string) => void,
    name: string, currentScreen: string,
    defaultLocation: string, onSearch: (data: any) => void}> = ({navigation,name, currentScreen, defaultLocation, onSearch}) => {

    const getSearchData = useCallback((text: string) => {
        clearTimeout(searchTimer);
         searchTimer = setTimeout(async () => {
            await axios(`${API_URL}locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${text}`)
                .then((data: any) => {
                    if(data.data){
                        onSearch(data.data);
                    }else{
                        Alert.alert(
                            'Error',
                            'Unable to retrieve valid autocomplete Information',
                            [{text: 'Ok', style: 'cancel'}],
                        );
                    }
                }).catch(() => {
                    Alert.alert(
                        'Error',
                        'Unable to retrieve autocomplete Information',
                        [{text: 'Ok', style: 'cancel'}],
                    );
                });
        }, 300);
    }, []);

    useEffect(() => {
        if(currentScreen === 'Search'){
            getSearchData(defaultLocation.split(',')[0]);
        }
    }, [currentScreen])

    const inputTextHandler = (text) => {
        if(text.length > 0){
            getSearchData(text);
        }
    }

    return (
        <View style={_s.navBar}>
            {(currentScreen !== 'Search') && <Text style={_s.title}>{name}</Text>}
            {(currentScreen === 'Details') && <Ripple style={_s.backArrow} onPress={() => {navigation('Search')}}><Icon name="arrow-back-circle-outline" size={36} color="#fff"/></Ripple>}
            {(currentScreen === 'Search') && <TextInput style={_s.input} maxLength={35} placeholderTextColor="#999" placeholder="Search..." defaultValue={defaultLocation.split(',')[0]} onChangeText={inputTextHandler} autoFocus/>}
        </View>
    )
};

export default Stack;

const _s = StyleSheet.create({
    navBar: {
        height: 60,
        backgroundColor: Colors.wedding,
        width: '100%',
        elevation: 30,
        flexDirection: 'row',
        alignItems: 'center',
        color: '#fff',
        zIndex: 10,
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 4,
            width: 0
        },
        shadowRadius: 3,
        shadowColor: '#000'
    },
    backArrow: {
        position:'absolute',
        paddingHorizontal: 20,
        height:'100%',
        alignItems: 'center',
        paddingTop:12
    },
    title: {
        color: '#fff',
        fontSize: 20,
        flex: 1,
        textAlign: 'center'
    },
    input: {
        paddingHorizontal: 20,
        color: '#fff',
        fontSize: 24,
        flex:1
    }

});
