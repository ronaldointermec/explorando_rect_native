import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import GlobalStyle from '../utils/GlobalStyle';

export default function ScreenA({ navigation, route }) {

  
    const onPressHandler = () => {
        navigation.navigate('Screen_B'/*, {ItemName: 'Item from Screen A', ItemId: 12 }*/)
        // navigation.replace('Screen_B')
    }

    return (
        <View style={styles.body}>
            <Text style={[
                GlobalStyle.CustomFont,
                styles.text
                ]}> Screen A </Text>
            <Pressable onPress={onPressHandler} style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}>
                <Text style={GlobalStyle.ButtomText}> Go to Screen B</Text>
            </Pressable>
            <Text style={styles.text}> {route.params?.Message}</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        body: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        text: {
            fontSize: 40,
            margin: 10,
        }
    }
)

