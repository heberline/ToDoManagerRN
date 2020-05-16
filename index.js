/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {initializeFirebaseApi} from './src/services/FirebaseApi';
import { AppRegistry, SafeAreaView } from 'react-native';
import Routes from './src/routes/Routes';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';

console.disableYellowBox = true;

const wrappedRoutes = () => {
    return (
        <NavigationContainer>
            <SafeAreaView style={{flex: 1}}>
                <Routes />
            </SafeAreaView>
        </NavigationContainer>
    );
};

AppRegistry.registerComponent(appName, () => {
    initializeFirebaseApi();
    return wrappedRoutes;
});
