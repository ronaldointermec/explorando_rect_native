import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'



import ScreenA from '../navigation/screenA'
import ScreenB from '../navigation/screenB'

//const Tab = createBottomTabNavigator();
//const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

const TabNabNavigator = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator

                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, size, color }) => {
                        let iconName;

                        if (route.name == 'Screen_A') {
                            iconName = 'autoprefixer';
                            size = focused ? 25 : 20
                            color = focused ? '#f0f' : '#555'
                        } else if (route.name === 'Screen_B') {
                            iconName = 'btc';
                            size = focused ? 25 : 20
                            color = focused ? '#f0f' : '#555'
                        }
                        return (
                            <FontAwesome5
                                name={iconName}
                                size={size}
                                color={color}
                            />

                        )
                    }
                })}
                //depende da versão
                 tabBarOptions={{
                    activeTintColor: '#f0f',
                    inactiveTintColor: '#555',
                    activeBackgroundColor: '#fff',
                    activeBackgroundColor: '#999',
                    showLabel: true,
                    labelStyle: { fontSize: 14 },
                    showIcon: true

                }} 
                activeColor='#f0edf6'
                inactiveColor='#3e2465'
                barStyle={{ backgroundColor: '#694fad' }}

            >
                <Tab.Screen name="Screen_A" component={ScreenA} />
                <Tab.Screen name="Screen_B" component={ScreenB} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}


export default TabNabNavigator;