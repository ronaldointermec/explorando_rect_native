import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button,  } from "react-native"


const Counter = () => {

    const [numero, setNume] = useState(0)

    const buttonHendler = () => {
        setNume(numero + 1)
    }

    useEffect(() => {
        console.log(numero)
    }, [numero])

    return <View
        style={styles.body}>
        {
            <Text
                style={styles.text}>
                {numero}
            </Text>}
        <Button
            onPress={buttonHendler}
            title="state"

        />

    </View >
};


const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        alignItems: 'center',
        color: '#000000',
        margin: 10
    },
    buttom: {
        width: 300,
        backgroundColor: '#ff0'

    }
});

export default Counter;