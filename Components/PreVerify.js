import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {fonts, colors} from '../assets/theme/Theme.js'

const logo = require("../assets/images/spot-logo.png");
const success = require("../assets/images/spot-icon-success.png");
// Email verification component, before verification //
const PreVerify = () => {
    return (
        <View style={Style.main}>
            <View style={Style.content}>
                <View style={Style.topView}>
                    <Image 
                        style={Style.logo}
                        source={logo} />
                </View>
                <View style={Style.successMsgView}>
                    <Image 
                        style={Style.successIcon}
                        source={success}/>
                    <Text style={Style.successMsg}>Sign up successful!</Text>
                </View>
                <View style={Style.successTextView}>
                    <Text style={Style.successTitle}>Please check your email to continue.</Text>
                    <Text style={Style.successText}>An email has been sent to the provided email, it should arrive in about 10 seconds.</Text>
                    <Text style={Style.successText}>If you don't see a verification email from Spot, please check your Promotions or Spam folders.</Text>
                </View>
            </View>
        </View>
    )
};

// Styles //
const Style = StyleSheet.create ({

    main: {
        flex: 1, 
        backgroundColor: colors.darkGrey, 
        width: '100%', 
        height: '100%', 
        minHeight: 630,
        justifyContent: 'center', 
        alignItems: 'center'
    },
        content: {
            flex: 1,
            width: '100%',
            maxWidth: 700,
            padding: 35,
        },
            topView: {
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                width: '100%',
                maxWidth: 700,
                marginBottom: 48,
            },
                logo: {
                    width: '70%',
                    height: '48%',
                    minWidth: 250,
                    maxWidth: 350,
                    minHeight: 100,
                    resizeMode: 'contain',
                },
        successMsgView: {
            flex: 0.2,
            width: '80%',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 48
        },
            successIcon: {
                width: 20,
                height: 20,
                resizeMode: 'contain',
                marginRight: 6
            },
            successMsg: {
                color: colors.green,
                fontFamily: fonts.medium,
                fontSize: 18,
                letterSpacing: 0.3
            },
        successTextView: {
            flex: 3,
            width: '80%',
            alignItems: 'flex-start',
        },
            successTitle: {
                color: colors.peptoPink,
                fontFamily: fonts.semibold,
                fontSize: 28, 
                letterSpacing: 0.4,
                lineHeight: 32, 
                marginBottom: 16,
            },
            successText: {
                color: colors.metalBlue, 
                fontFamily: fonts.medium,
                fontSize: 17,
                letterSpacing: 0.3,
                lineHeight: 22, 
                fontWeight: 300,
                marginBottom: 16
            }

});


export default PreVerify;
