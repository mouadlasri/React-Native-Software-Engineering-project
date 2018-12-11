import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreenOne from '../Screens/Tabs/ScreenOne.js';
import ScreenTwo from '../Screens/Tabs/ScreenTwo.js';
import ScreenThree from '../Screens/Tabs/ScreenThree.js';
import ScreenFour from '../Screens/Tabs/ScreenFour.js';
import ScreenFive from '../Screens/Tabs/ScreenFive.js';

export default HomeScreenTabNavigator = createBottomTabNavigator({
    ScreenOne: {
        screen: ScreenOne,
        navigationOptions: {
            tabBarLabel: 'Restaurants',
            tabBarIcon: () => (
                <Ionicons name="md-compass" size={24} />
            )
        }
    },
    ScreenTwo: {
        screen: ScreenTwo,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: () => (
                <Ionicons name="md-contact" size={24} />
            )
        }
    },
    ScreenThree: {
        screen: ScreenThree,
        navigationOptions: {
            tabBarLabel: 'Log out',
            tabBarIcon: () => (
                <Ionicons name="md-wallet" size={24} />
            )
        }
    },
    ScreenFour: {
        screen: ScreenFour,
        navigationOptions: {
            tabBarLabel: 'Shop',
            tabBarIcon: () => {
                <Ionicons name="md-wallet" size={24} />
            }
        }
    },
    ScreenFive: {
        screen: ScreenFive,
        navigationOptions: {
            tabBarLabel: 'Make Order'
        }
    }
}
);

// export default HomeScreenTabNavigator;