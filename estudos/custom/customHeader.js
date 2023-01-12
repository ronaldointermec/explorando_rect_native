import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CustomHeader = (props) => {
    return (
        <View
            style={styles.view}
        >
            <Text
                style={styles.text}
            >
                {props.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 50,
        backgroundColor: '#00f',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 10
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ffffff'
    }
});
export default CustomHeader;