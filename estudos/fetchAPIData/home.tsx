import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';
import SQLite from 'react-native-sqlite-storage';
import { useSelector, useDispatch } from 'react-redux';
import { setName, getCities } from './redux/actions'



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

    const { name, cities }: any = useSelector<any>(state => state.userReducer);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        getData();
        dispatch(getCities());
    }, []);

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
                            dispatch(setName(userName));
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

    return (
        <View style={styles.body}>
            <Text style={[GlobalStyle.CustomFont, styles.text]}>Welcome {name}</Text>
            <FlatList
                data={cities}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.country}</Text>
                        <Text style={styles.subTitle}>{item.city}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
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
        title: {
            fontSize: 30,
            margin: 10,
        },
        subTitle: {
            fontSize: 20,
            margin: 10,
            color: '#999999'
        },
        text: {
            fontSize: 40,
            margin: 10,
        },
        item: {
            backgroundColor: '#ffffff',
            borderWidth: 2,
            borderColor: '#cccccc',
            borderRadius: 5,
            margin: 7,
            width: 350,
            justifyContent: 'center',
            alignItems: 'center',
        }

    }
)

