
import React, { useState } from 'react';

import {
    StyleSheet, View, Text,
    TextInput, TouchableHighlight,
    Modal, Pressable
} from 'react-native';

const FieldInput = () => {

    const [name, setName] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [showWarning, setShowWarning] = useState(false)

    const onPressHendler = () => {
        if (name.length > 3) {
            setSubmitted(!submitted)
        } else {

            setShowWarning(true)
        }

    }
    const getName = (value) => {
        setName(value);
    }

    return <View style={styles.body} >
        <Modal
            visible={showWarning}
            transparent
            onRequestClose={() =>
                setShowWarning(false)
            }
            animationType='slide'
            hardwareAccelerated
        >
            <View style={styles.center_view}>

                <View style={styles.warning_modal}>
                    <View style={styles.warning_title}>
                        <Text
                            style={styles.text}
                        >WARNING
                        </Text>
                    </View>
                    <View style={styles.warning_body}>
                        <Text style={styles.text}>
                            The name must be longer than 3 charachters</Text>
                    </View>
                    <Pressable
                        onPress={() => setShowWarning(false)}
                        style={styles.warning_buttom}
                        android_ripple={{ color: 'fff' }}
                    >
                        <Text style={styles.text} >OK</Text>
                    </Pressable>
                </View>
            </View>

        </Modal>
        <Text style={styles.text}>
            Please write your name:
        </Text>
        <TextInput
            style={styles.input}
            placeholder='e.g Ronaldo'
            onChangeText={getName}
        />
        {

        }

        <TouchableHighlight
            style={styles.buttom}
            onPress={onPressHendler}
            activeOpacity={0.5}
            underlayColor='#dddddd'
        >

            <Text style={styles.text}>
                {submitted ? 'clear' : 'submit'}

            </Text>
        </TouchableHighlight>
        {
            submitted ? <Text style={styles.text}>
                You are registered as  {name}
            </Text> : null
        }

    </View>


};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        // justifyContent: 'center'

    },
/*     item: {
        margin: 10,
        backgroundColor: '#4ae1fa',
        alignItems: 'center',
        justifyContent: 'center',
    },  */
/*     scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    }, */
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

export default FieldInput;
