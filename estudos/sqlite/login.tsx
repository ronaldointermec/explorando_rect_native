import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, TextInput, Alert } from 'react-native';
import CustomButton from "../custom/customButton";
import { openDatabase } from "react-native-sqlite-storage";
import { useNavigation } from '@react-navigation/native'

//const navigation = useNavigation();


const db = openDatabase(
    {
        name: 'MainDb',
        location: 'default'
    },
    () => { console.log('banco de dados criado com sucesso') },
    error => {
        console.log(error)
    }
)

export default function Login({ navigation }: { navigation: any }) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        createTable();
        getData();
    }, []);


    const createTable = () => {
        db.transaction(tx => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                + "Users "
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER )",
                [],
                () => {
                    console.log('Table created successfully');
                },
                error => {
                    console.log('error on creating table ');
                }
            )
        })
    }


    const getData = () => {

        try {
            db.transaction(tx => {
                tx.executeSql(
                    "SELECT * FROM Users",
                    [],
                    (tx, results) => {                        
                        let len = results.rows.length;
                        if (len > 0) {
                            navigation.navigate('Home');
                        }
                    },
                    error =>{
                        console.log('error to retriving data')
                    }
                )
            })
        } catch (error) {
            console.log(error)
        }
    }


    const setData = async () => {

        if (name.length == 0 || age.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            
            try {                
                await db.transaction(async tx => {              
                    await tx.executeSql(
                        "INSERT INTO Users (Name, Age) VALUES (?,?)",
                        [name, age],
                        () => {console.log('data inserted successfully') },
                        error => { console.log('error on edding data') }
                    )
                })
                navigation.navigate('Home')
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <View style={styles.body}>
            <Image
                style={styles.logo}
                source={require('../assets/sqlite.png')}
            />
            <Text style={styles.text}></Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                onChangeText={(value) => setName(value)}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter your ange'
                onChangeText={(value) => setAge(value)}
            />
            <CustomButton 
            onPress={() =>{}}
                title='Login'
                color='#1eb900'
                onPressFunction={setData}
            />
        </View>)

}

const styles = StyleSheet.create({

    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0080ff',
    },
    logo: {
        width: 100,
        height: 100,
        margin: 20,
    },
    text: {
        fontSize: 30,
        color: '#ffffff',
        marginBottom: 130
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10

    }
})