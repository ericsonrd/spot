import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Email verification component, before verification //
const PreVerify = () => {
    return (
        <View style={Style.preMain}>
            <Text style={Style.successIcon}>✔︎</Text>
            <Text style={Style.preTitle}>Sign up successful. Please check your email to continue.</Text>
            <Text style={Style.preText}>If you can't find a verification email from Spot, check you Spam of Promotion folders.</Text>
        </View>
    )
};

// Styles //
const Style = StyleSheet.create ({

    preMain: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%', 
        height: '100%', 
        padding: 95, 
        backgroundColor: 'black'
    },
        successIcon: {
            color: 'white', 
            fontSize: 34, 
            marginBottom: 20
        },
        preTitle: {
            color: 'white', 
            textAlign: 'center', 
            fontSize: 16, 
            fontWeight: 300, 
            lineHeight: 22, 
            marginBottom: 16
        },
        preText: {
            color: 'grey', 
            textAlign: 'center', 
            fontSize: 12, 
            fontWeight: 300,
            lineHeight: 18
        }

});


export default PreVerify;
