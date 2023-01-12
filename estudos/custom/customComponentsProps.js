import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../custom/customButton'
import CustomHeader from '../custom/customHeader';

const CustomComponentsProps = () => {

    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState('Ronaldo')

    const onPressHendler = () => {
        if (name.length > 3) {
            setSubmitted(!submitted)
        } else {

            setShowWarning(true)
        }

    }

    return (<View style={styles.body}>
        <CustomHeader
        title={'React Native Tutorial'}
        />
        <CustomButton
            onPressFunction={onPressHendler}
            title={submitted ? 'Clear' : 'Submit'}
            color={'#00ff00'}
        ></CustomButton>
    
        <CustomButton
            onPressFunction={() =>{ console.log('Hello world!')}}
            title={submitted ? 'Clear' : 'Next'}
            color={'#ff00ff'}
            style={{margin:10}}
        ></CustomButton>

    </View>)
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        alignItems: 'center',
      //  justifyContent: 'center'

    }
});
export default CustomComponentsProps;