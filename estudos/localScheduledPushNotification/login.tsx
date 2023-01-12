import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Text, TextInput, Alert } from 'react-native';
import CustomButton from "../custom/customButton";
import { openDatabase } from "react-native-sqlite-storage";
import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge } from './redux/actions'
import PushNotification, { Importance } from "react-native-push-notification";


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

    const { name, age }: any = useSelector<any>(state => state.userReducer);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        createTable();
        getData();
        createChannels();
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



    const createChannels = () => {
        PushNotification.createChannel(
            {
                channelId: "channel-id", // (required)
                channelName: "My channel", // (required)
                channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
                playSound: false, // (optional) default: true
                soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
                importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
                vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
            },
            (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
        );
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
                    error => {
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

                dispatch(setName(name));
                dispatch(setAge(age));
                await db.transaction(async tx => {
                    await tx.executeSql(
                        "INSERT INTO Users (Name, Age) VALUES (?,?)",
                        [name, age],
                        () => { console.log('data inserted successfully') },
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

            <Text style={styles.text}>Redux</Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                onChangeText={(value) => dispatch(setName(value))}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter your ange'
                onChangeText={(value) => dispatch(setAge(value))}
            />
            <CustomButton
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