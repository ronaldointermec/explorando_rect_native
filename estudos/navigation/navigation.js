import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenA from '../navigation/screenA'
import ScreenB from '../navigation/screenB'

const Stack = createStackNavigator();

const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
            //remove header for all screens
            //screenOptions={{header:() => null}}
            >
                
                <Stack.Screen
                    name="Screen_A"
                    component={ScreenA}
                    //remove de headr from screen A
                    options={{header:()=> null}}
                />
                <Stack.Screen
                    name="Screen_B"
                    component={ScreenB}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Navigation;