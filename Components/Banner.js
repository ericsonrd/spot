import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts, colors} from '../assets/theme/Theme.js'

const spotIcon = require('../assets/images/spot-icon.png')
const Banner = () => {
    return (
        <TouchableOpacity style={Style.main}>
            <Image
                style={Style.icon} 
                source={spotIcon} 
            />
            <Text style={Style.text}>
                Questions, help or feedback here
            </Text>
        </TouchableOpacity>
    );
};

const Style = StyleSheet.create ({

    main: {
        width: '49.7%', 
        aspectRatio: 7/4, 
        backgroundColor: colors.decayingBlue, 
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '0.1%',
        position: 'absolute'
    },
        icon: {
            width: 50, 
            height: 50, 
            marginBottom: 12
        },
        text: {
            fontFamily: fonts.medium, 
            color: colors.metalBlue, 
            letterSpacing: 0.3, 
            fontSize: 11
        }

});

export default Banner;
