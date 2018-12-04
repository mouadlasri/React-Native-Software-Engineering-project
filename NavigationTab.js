import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
// import Login from './Login.js';
import Profile from './Profile.js';
import Restaurants from './Restaurants.js';
import About from './About.js';

const NavigationTab = createBottomTabNavigator({
    // Restaurants: { screen: Restaurants },
    Profile: { screen: Profile },
    About: { screen: About },       
    // Logout: { screen: Login }
}
);

const app = createAppContainer(NavigationTab);
export default app;