import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home'
import Login from './login';
import {Provider} from 'react-redux';
import { Store } from './redux/store';

const Stack = createStackNavigator();


const LocalScheduledPushNotification = () => {
    return (
        <Provider store={Store}>
        <NavigationContainer >
            <Stack.Navigator
                initialRouteName='Login'
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#0080ff'
                    },
                    headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: 'bold'
                    }
                }}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                />

            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    )
}

export default LocalScheduledPushNotification;