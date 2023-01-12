import React, {useState} from 'react';

import { View, SectionList, StyleSheet, Text, RefreshControl } from 'react-native';


const Section_list = () => {

   const [DATA, setData] = useState([{title: 'Title 1', data: ['Item 1-1', 'Item 1-2', 'Item 1-3']}]);

   const [Refreshing, setRefreshing] = useState(false);

   const [number, setIncrement] = useState(2);

   const onRefresh = () => {
     setRefreshing(true)
     setData([...DATA, { title: `Title ${number}`, data: [`Item ${number}-1`, `Item ${number}-2`, `Item ${number}-3`] }])
     setIncrement(number + 1)
     setRefreshing(false)
   }

   return (
     <SectionList
       keyExtractor={(item, index) => index.toString()}
       sections={DATA}
       renderItem={({ item }) => (
         <Text style={styles.text} >{item} </Text>
       )}
       renderSectionHeader={({ section }) => (
         <View style={styles.item} >
           <Text style={styles.text} >{section.title} </Text>
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

export default Section_list;