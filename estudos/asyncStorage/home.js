import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from "../custom/customButton";
import GlobalStyle from '../utils/GlobalStyle';

export default function Home({ navigation, route }) {


    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const getData = () => {

        try {
            AsyncStorage.getItem('UserData')
                .then(value => {

                    if (value != null) {

                        let user = JSON.parse(value)

                        setName(user.Name);
                        setAge(user.Age);
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }, []);


    const updadateData = async () => {

        if (name.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
               
                var user = {Name: name}
                await AsyncStorage.mergeItem('UserData', JSON.stringify(user))

                Alert.alert('Success!', ' Your datahas been updated.');

            } catch (error) {
                console.log(error)
            }
        }
    }

    const removeData = async () => {

        try {
            console.log('The user name is:' + name)
            await AsyncStorage.removeItem('UserName')
            navigation.navigate('Login')
        } catch (error) {
            console.log(error)
        }


    }
    return (
        <View style={styles.body}>
            <Text style={[
                GlobalStyle.CustomFont,
                styles.text
            ]}>
                Welcome {name}
            </Text>
            <Text style={[
                GlobalStyle.CustomFont,
                styles.text
            ]}>
                Your age is {age}
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                value={name}
                onChangeText={(value) => setName(value)}
            />
            <CustomButton
                title='Update'
                color='#ff7f00'
                onPressFunction={updadateData}
            /><Text></Text>
            <CustomButton
                title='Remove'
                color='#f40100'
                onPressFunction={removeData}
            />
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
        },
        input: {
            width: 300,
            borderWidth: 1,
            borderColor: '#555',
            borderRadius: 10,
            backgroundColor: '#ffffff',
            textAlign: 'center',
            fontSize: 20,
            marginTop: 50,
            marginBottom: 10
        }
    }
)

