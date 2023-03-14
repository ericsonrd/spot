import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts, colors} from '../assets/theme/Theme.js'

const backArrow = require('../assets/images/spot-second-arrow-top-left.png');
const forwardArrow = require('../assets/images/spot-second-arrow-top-right.png');

const SpotCoverBottom = (props) => {
    return (
        <View style={Style.main}>
            <TouchableOpacity 
                style={Style.homeButton}
                onPress={props.goHome}>
                    <Image 
                        style={Style.backArrow}
                        source={backArrow} />
                    <Text style={Style.backButtonText}>Home</Text>
            </TouchableOpacity>
            <View style={Style.JoinView}>
                <TouchableOpacity style={Style.joinLinkView}>
                    <Text style={Style.joinLink}>Agree to rules and Join</Text>
                </TouchableOpacity>
                <Text style={Style.bottomMessage}>{props.members} like-minded people have joined</Text>
            </View>
            <TouchableOpacity style={Style.shareButton} 
                onPress={props.shareSpot}>
                    <Text style={Style.shareButtonText}>Share</Text>
                    <Image 
                        style={Style.shareArrow}
                        source={forwardArrow} />
            </TouchableOpacity>
        </View>
    );
};

const Style = StyleSheet.create ({

    main: {
        width: '100%',
        height: 75,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        maxWidth: 700,
        padding: 20,
        marginBottom: 35
    },
        homeButton: {
            flexDirection: 'row',
            alignItems: 'center',
            width: 55,
            height: 60
        },
            backArrow: {
                width: 7, 
                height: 7,
                marginRight: 6,
                marginBottom: 3
            },
            backButtonText: {
                fontFamily: fonts.medium,
                fontSize: 14,
                letterSpacing: 0.3,
                color: colors.bariumGrey,
            },

        JoinView: {
            flex: 1,
            height: 60, 
            alignItems: 'center'
        }, 
            joinLinkView: {
                height: 55,
                justifyContent: 'center',
                alignItems: 'center'
            },
                joinLink: {
                    color: colors.green,
                    fontFamily: fonts.semibold,
                    fontSize: 20,
                    letterSpacing: 0.3,
                },
            bottomMessage: {
                fontFamily: fonts.medium,
                color: colors.purple,
                fontSize: 11,
                letterSpacing: 0.3
            },
        shareButton: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: 55,
            height: 60 
        },
            shareArrow: { 
                width: 7, 
                height: 7,
                marginLeft: 6,
                marginBottom: 3
            },
            shareButtonText: {
                fontFamily: fonts.medium,
                fontSize: 14,
                letterSpacing: 0.3,
                color: colors.bariumGrey,
            }

})
       
export default SpotCoverBottom;
