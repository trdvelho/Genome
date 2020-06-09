import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';

export default function Profile() {
    const image = require('../resources/img/Background.png');
    return (
        <ImageBackground source={image} style={{flex: 1}}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require(`../resources/img/profilePhoto.png`)} style={styles.profilePhoto}></Image>
                <Text style={styles.userName}>Lottie Curtis</Text>
                <Text style={styles.userDescription}>I really like this app. It helps me to find what I like and it has an awesome user interaction</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    profilePhoto: {
      width: 150,
      height: 150
    },
    userName:{
        color: '#424A93',
        marginTop: 50,
        fontSize: 30,
        fontWeight: 'bold'
    },
    userDescription: {
        color: '#A0A9B8',
        width:300,
        height: 'auto',
        marginTop: 20,
        fontSize: 15
    }
});