import React, { useContext } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from "./auth";


const Home = () => {

    const { name, user } = useContext<any>(AuthContext);
    return (<
        View style={styles.body}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{user.email}</Text>

    </View>)
}

const styles = StyleSheet.create({

    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        width: '80%',
        Color: '#0000ff',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,

    },
    button: {
        width: '80%',
        alignItems: 'center',
        backgroundColor: '@0000ff'
    }
})

export default Home;

