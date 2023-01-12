import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home'
import Login from './login';

const Stack = createStackNavigator();


const AsyncStorage = () => {

    return (
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
    )
}


export default AsyncStorage;