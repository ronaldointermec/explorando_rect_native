import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ScreenA from './screenA'
import ScreenB from './screenB'

const Drawer = createDrawerNavigator();


const GlobalStyleCustom = () => {

    return (
        <NavigationContainer >
            <Drawer.Navigator 
                initialRouteName='Screen_A'
                drawerPosition='right'
                drawerType='front'
                edgeWidth={100}
                hidestatusBar={false}
                overlayColor='#00000090'
                drawerStyle={{
                    backgroundColor: '#e6e6e6',
                    width: 250
                }}
                screenOptions={{
                    headerShown: true,
                    swipeEnabled: true,
                    gestureEnabled: true,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#0080ff'
                    },
                    //headerTintColor: '@ffffff',                
                    headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: 'bold'
                    }

                }}

            >
                <Drawer.Screen
                    name="Screen_A"
                    component={ScreenA}
                    options={{
                        title: 'Screen A',
                        drawerIcon: ({ focused }) => (
                            <FontAwesome5
                                name='autoprefixer'
                                size={focused ? 25 : 20}
                                color={focused ? '#008044' : '#999999'}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name="Screen_B"
                    component={ScreenB}
                    options={{
                        title: 'Screen B',
                        drawerIcon: ({ focused }) => (
                            <FontAwesome5
                                name='btc'
                                size={focused ? 25 : 20}
                                color={focused ? '#008044' : '#999999'}
                            />
                        )
                    }}
                    initialParams={{ ItemName: 'Item from Drawer', ItemId: 19 }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}


export default GlobalStyleCustom;