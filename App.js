
import React, { useState } from 'react';

import {
  RefreshControl, StyleSheet, View, Text, SafeAreaView, ScrollView, FlatList,
  SectionList, TextInput, Button, TouchableOpacity, TouchableHighlight, Alert, ToastAndroid,
  Modal, Pressable
} from 'react-native';

const App = () => {
  return (<View style={styles.body} >
  </View>)

};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    // justifyContent: 'center'

  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10
  },
  buttom: {
    width: 150,
    height: 50,
    backgroundColor: '#00ff00',
    alignItems: 'center',

  },
  center_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    //padding: 20
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  warning_buttom: {
    backgroundColor: '#00ffff',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  }

});

export default App;
