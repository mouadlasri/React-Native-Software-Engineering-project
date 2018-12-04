import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from '../Screens/LoginScreen.js';
import SignupScreen from '../Screens/SignupScreen.js';
import WelcomeScreen from '../Screens/WelcomeScreen.js';
import DrawerNavigator from './DrawerNavigator.js';
import HomeScreenTabNavigator from './HomeScreenTabNavigator.js';
import InnerStackNavigator from './DrawerNavigator';
import React from 'react';


const NavigationStack = createStackNavigator({
    WelcomeScreen: { screen: WelcomeScreen },
    LoginScreen: { screen: LoginScreen },    
    SignupScreen: { screen: SignupScreen},
    InnerStackNavigator: { screen: HomeScreenTabNavigator,
        navigationOptions: {
            header: null
        },
        }
    // DrawerNavigator: { screen: DrawerNavigator,
    //     navigationOptions: {
    //         header: null
    //     } }
    // Restaurants: { screen: Restaurants }
}, {
    navigationOptions: {
        gesturesEnabled: false,
        header: null
    }
}
); 

const app = createAppContainer(NavigationStack);
export default app;