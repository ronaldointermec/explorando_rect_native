
import React, { useState } from 'react';

import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';

const List = () => {

    const [Items, setItems] = useState([
        { key: 1, item: 'Item 1' },
        { key: 2, item: 'Item 2' },
        { key: 3, item: 'Item 3' },
        { key: 4, item: 'Item 4' },
        { key: 5, item: 'Item 5' },
        { key: 6, item: 'Item 6' },
        { key: 7, item: 'Item 7' },
        { key: 8, item: 'Item 8' },
    ]);

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        //add an object at the end of the array
        setItems([...Items, { key: 69, item: 'item 69' }])
        setRefreshing(false);
    }

    return (
        <ScrollView
            horizontal={false}
            style={styles.body}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={['#ff00ff']}
                />
            }
        >
            {
                Items.map((i) => {
                    return (<View style={styles.item} key={i.key}>
                        <Text style={styles.text}> {i.item} </Text>
                    </View>)
                })
            }
        </ScrollView>

    )
};


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


export default List;