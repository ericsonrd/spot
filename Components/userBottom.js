import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts, colors} from '../assets/theme/Theme.js'

const backArrow = require('../assets/images/spot-second-arrow-top-left.png');
const forwardArrow = require('../assets/images/spot-second-arrow-top-right.png');

const UserBottom = (props) => {
    return (
        <View style={Style.main}>
            <View style={{width: '100%', height: 1, backgroundColor: colors.darkGrey}} />
            <View style={Style.content}>
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
                        <Text style={Style.joinLink}>Send a message</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={Style.shareButton} 
                    onPress={props.shareSpot}>
                        <Text style={Style.shareButtonText}>Share</Text>
                        <Image 
                            style={Style.shareArrow}
                            source={forwardArrow} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const Style = StyleSheet.create ({

    main: {
        width: '100%',
        height: 80,
        alignItems: 'center',
        alignSelf: 'center',
        maxWidth: 700,
    },
        content: {
            width: '100%',
            height: 75,
            flexDirection: 'row',
            alignItems: 'center'
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
       
export default UserBottom;
