// Navigation.js
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen'; // Importe suas telas
import LoginScreen from './screens/LoginScreen'; // Importe suas telas
import RegisterScreen from './screens/RegisterScreen'; // Importe suas telas

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home', // Nome da guia
        },
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            tabBarLabel: 'Login', // Nome da guia
        },
    },
    Register: {
        screen: RegisterScreen,
        navigationOptions: {
            tabBarLabel: 'Register', // Nome da guia
        },
    },
});

export default createAppContainer(TabNavigator);
