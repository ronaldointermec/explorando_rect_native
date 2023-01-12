import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import CustomButton from "../custom/customButton";
import GlobalStyle from '../utils/GlobalStyle';
import SQLite from 'react-native-sqlite-storage';



const db = SQLite.openDatabase(

    {
        name: 'MainDb',
        location: 'default'
    },

    () => { },
    error => {
        console.log(error)
    }
)

export default function Home({ navigation }: { navigation: any }) {


    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const getData = () => {

        try {

            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT Name, Age   FROM Users",
                    [],
                    (tx, results) => {
                        var len = results.rows.length;
                        if (len > 0) {
                            var userName = results.rows.item(0).Name;
                            var userAge = results.rows.item(0).Age;
                            setName(userName);
                            setAge(userAge);
                        }
                    },
                    error => {
                        console.log('error to retriving data')
                    }
                )
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

                db.transaction((tx) => {
                    tx.executeSql(
                        "UPDATE Users SET Name=?",
                        [name],
                        () => { Alert.alert('Success!', ' Your data has been updated.'); },
                        error => {
                            console.log(error);
                        }
                    )
                })


            } catch (error) {
                console.log(error)
            }
        }
    }

    const removeData = async () => {

        try {

            db.transaction((txt) => {

                txt.executeSql(
                    "DELETE FROM Users",
                    [],
                    () => {
                        navigation.navigate('Login')
                    },
                    error => {
                        console.log('error removing data');
                    }
                )
            })

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

