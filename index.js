/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {DataProvider} from './_globals/global';
import React from 'react';

const Root = () => {
    return <DataProvider>
        <App/>
    </DataProvider>
};

AppRegistry.registerComponent(appName, () => Root);
