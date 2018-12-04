import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen.js';
import HomeScreenTabNavigator from './HomeScreenTabNavigator.js';

const InnerStackNavigator = createStackNavigator({
    TabNavigator: {
        screen: HomeScreenTabNavigator,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.id}'s Profile'`,
        })
    }
});

export default InnerStackNavigator;
// export default DrawerNavigator;
// const app = createAppContainer(NavigationStack);
// export default app;