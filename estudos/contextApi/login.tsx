import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { AuthContext } from './auth'

const Login = ({navigation}:{navigation: any}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signIn} = useContext<any>(AuthContext);

    function handleSingIn() {
        signIn(email, password, navigation)
    }

    return (<
        View style={styles.body}>
        <Text style={styles.text}>Hello user</Text>
        <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)} placeholder='Digite seu e-mail' />
        <TextInput style={styles.input} value={password} onChangeText={(text) => setPassword(text)} placeholder='Digite sua senha' />
        <Pressable style={styles.button}
            onPress={handleSingIn}
        ><Text style={styles.text}>Acessar</Text></Pressable>
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

export default Login;

