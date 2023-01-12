import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native';


const Flat_List = () => {

    const [Items, setItems] = useState([{ name: 'Item 1' }]);    

    const [Refreshing, setRefreshing] = useState(false);

    const [number, setIncrement] = useState(2);

    const onRefresh = () => {
        setRefreshing(true)
        setItems([...Items, { name: `Item ${number} ` }])
        setIncrement(number + 1)
        setRefreshing(false)
    }


    return (
        <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={Items}
            renderItem={({ item }) => (
                <View style={styles.item} >
                    <Text style={styles.text} >{item.name} </Text>
                </View>
            )}

            refreshControl={
                <RefreshControl
                    refreshing={Refreshing}
                    onRefresh={onRefresh}
                />
            }
        />
    );
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },

    text: {
        alignItems: 'center',
        color: '#000000',
        fontSize: 35,
        fontStyle: 'italic',
        margin: 10
    },
    item: {
        margin: 10,
        backgroundColor: '#4ae1fa',
        justifyContent: 'center',
        alignItems: 'center',
    }
});


export default Flat_List;