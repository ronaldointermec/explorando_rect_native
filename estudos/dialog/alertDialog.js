import React from 'react';
import { View, Button, Alert, StyleSheet, Text, ToastAndroid } from 'react-native';

const AlertDialog = () => {


    function handleDialog() {
        Alert.alert('Warning', 'Hello Ronaldo', [
            {
                text: 'Dot not show again',
                onPress: () => console.warn('Dot not show again Pressed!')
            },
            {
                text: 'Cancel',
                onPress: () => console.warn('Cancel Pressed!')
            },
            {
                text: 'OK',
                onPress: () => console.warn('Ok Pressed!')
            }
        ], {
            cancelable: true,
            onDismiss: () => console.warn('Alert dismissed!')
        })
    }

    function handleToast() {

        ToastAndroid.showWithGravity(
            'Hello Ronaldo',
            ToastAndroid.LONG,
            ToastAndroid.CENTER
        )
    }

    return (
        <View style={styles.body}>

            <Button
                title='Dialog'
                onPress={handleDialog}
            ></Button>
            <Text></Text>
            <Button
                title='Toast'
                onPress={handleToast}
            ></Button>


        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },

}
);

export default AlertDialog;


