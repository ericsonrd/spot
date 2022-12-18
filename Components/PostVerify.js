import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Email verification component, after verification //
const PostVerify = () => {
    return (
        <View style={Style.postMain}>
            <Text style={Style.successIcon}>✔︎</Text>
            <Text style={Style.postTitle}>Thank you for verifying your email.</Text>
            <Text style={Style.postRedirect}>Redirecting...</Text>
        </View>
    )
};

// Styles //
const Style = StyleSheet.create ({

    postMain: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%', 
        height: '100%', 
        padding: 95, 
        backgroundColor: 'black'
    },
        successIcon: {
            color: 'green', 
            fontSize: 34, 
            marginBottom: 20
        },
        postTitle: {
            color: 'white', 
            textAlign: 'center', 
            fontSize: 18, 
            fontWeight: 300, 
            lineHeight: 22, 
            marginBottom: 16
        },
        postRedirect: {
            color: 'grey', 
            textAlign: 'center', 
            fontSize: 14, 
            fontWeight: 300,
            lineHeight: 18
        }

});

export default PostVerify;
