
import React from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';


const Images = () => {

    return (

        <ImageBackground style={styles.body}
        source={{ uri: 'https://imagensemoldes.com.br/wp-content/uploads/2020/04/Figura-Homem-Aranha-PNG-1024x1002.png' }}
        >
            <View style={styles.body}>
                <Image
                    style={styles.image}
                    //source={require('./assets/done.png')}
                    source={require('../assets/done.png')}
                    //source={{ uri: 'https://imagensemoldes.com.br/wp-content/uploads/2020/04/Figura-Homem-Aranha-PNG-1024x1002.png' }}
                    resizeMode='stretch'
                />
            </View>
        </ImageBackground>)

}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 100,
        height: 100,
        alignContent: 'center',
        justifyContent: 'center',
        margin: 10

    }
})
export default Images;