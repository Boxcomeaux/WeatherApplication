import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import TabBar from './_navigation/TabBar';
import React, {useContext, useEffect, useState} from 'react';
import Details from './_pages/Details';
import Search from './_pages/Search';
import Stack from './_navigation/Stack';
import LoadingModal from './_modals/LoadingModal';
import Colors from './_globals/Colors';
import {Context} from './_globals/global';

let defaultLocation = '';
const App = () => {
    const [screen, setScreen] = useState('Today');
    const [loading, setLoading] = useState(true);
    const [searchData, setSearchData] = useState([]);
    const [details, setDetails] = useState(true);
    const [loadingTimer, setLoadingTimer] = useState(true);
    const _c = useContext(Context)

    const navigation = (selectedScreen: string) => {
        setScreen(selectedScreen);
    };

    const searchDataHandler = (data: any) => {
        setSearchData(data);
    }

    const searchSelectHandler = (details: any) => {
        setDetails(details);
        setScreen('Details');
        setLoading(false);
        setTimeout(() => {
            setLoadingTimer(false);
            // GIVE THE DOM A SECOND TO GET ITS SELF TOGETHER
        },500);
    };

    useEffect(() => {
        _c.retrieveData();
    }, []);

    useEffect(() => {
        if (_c.dailyForecast !== null && _c.dailyForecast !== undefined) {
            defaultLocation = _c.locationData?.ParentCity?.EnglishName + ', ' + _c.locationData?.AdministrativeArea?.ID;
            setLoading(false);
            setTimeout(() => {
                setLoadingTimer(false);
                // GIVE THE DOM A SECOND TO GET ITS SELF TOGETHER
            },500);
        }
    }, [_c.dailyForecast]);

    return (
        <>
            <StatusBar barStyle="default"/>
            <SafeAreaView style={_s.main}>
                {!loading &&
                    <>
                        <Stack name="Weather App" navigation={navigation} currentScreen={screen} defaultLocation={defaultLocation} onSearch={searchDataHandler}/>
                        {(screen === 'Today') && <Details weatherData={_c.weatherData} locationData={_c.locationData} dailyForecast={_c.dailyForecast}/>}
                        {(screen === 'Search') && <Search defaultLocation={defaultLocation} searchData={searchData} onNavigation={searchSelectHandler}/>}
                        {(screen === 'Details') && <Details weatherData={details.weatherData} locationData={details.locationData} dailyForecast={details.dailyForecast}/>}
                        <TabBar navigation={navigation}/>
                    </>
                }
            </SafeAreaView>
            {(loading && loadingTimer) && <LoadingModal/>}
        </>
    );
};

export default App;

const _s = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: Colors.teal,
    },
});
