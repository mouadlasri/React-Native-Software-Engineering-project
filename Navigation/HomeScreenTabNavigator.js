import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreenOne from '../Screens/Tabs/ScreenOne.js';
import ScreenTwo from '../Screens/Tabs/ScreenTwo.js';
import ScreenThree from '../Screens/Tabs/ScreenThree.js';

// class AppTabNavigator extends React.Component {

//     // static navigationOptions = ({navigation}) => {
//     //     return {
//     //         headerLeft: (
//     //             <View style={{padding: 10}}>
//     //                 <Ionicons name="md-menu" onPress={() => this.props.navigation.navigation('DrawerOpen')} />
//     //             </View>
//     //         )
//     //     }
//     // }
//     render() {
//         return (
//             <HomeScreenTabNavigator />
//         )
//     }
// }

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
    }
}
);

// export default HomeScreenTabNavigator;