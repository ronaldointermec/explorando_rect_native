import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';


export default function ScreenB({ navigation, route }) {

    const { ItemName, ItemId } = route.params;

    const onPressHandler = () => {
        navigation.navigate('Screen_A', { Message: 'message from B' })
        //navigation.goBack();
        //navigation.setParams({ItemId:14})
    }
    return (
        <View style={styles.body}>
            <Text style={[
                GlobalStyle.CustomFont,
                styles.text
            ]}> Screen B </Text>
            <Pressable style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })} onPress={onPressHandler} >
                <Text style={
                    GlobalStyle.ButtomText
                }> Go back to Screen A </Text>
            </Pressable>
            <Text style={[
                GlobalStyle.CustomFont,
                styles.text
            ]}>{ItemName}</Text>
            <Text style={[
                GlobalStyle.CustomFont,
                styles.text
            ]}>ID: {ItemId}</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        body: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            fontSize: 40,
            margin: 10,
        }
    }
)

