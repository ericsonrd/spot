import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts, colors} from '../assets/theme/Theme.js'

const spotArrowGreen = require("../assets/images/spot-main-arrow-top-right.png");

// Welcome Component for Spot when no messages present //
const Welcome = (props) => {
    return (
        <View style={Style.main}>
            <View style={Style.content}>
                <View style={Style.topView}>
                    <Text style={Style.titleWelcome}>Welcome to</Text>
                    <Text style={Style.title}>{props.title}</Text>
                    <Text style={Style.titleOwner}>by {props.owner}</Text>
                </View>
                <View style={Style.centerMessages}>
                    <Text style={Style.centerText}>Start typing at the bottom.</Text>
                    <Text style={Style.centerText}>Messages dissappear after 48 hours so come back often.</Text>
                </View>
                <TouchableOpacity 
                    style={Style.buttonCreateSpot}
                    onPress={props.handlePressSpot}>
                        <Text style={Style.bottomText}>Create your own Spot</Text>
                        <Image 
                            style={Style.arrowGreen}
                            source={spotArrowGreen} />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={Style.buttonQuestionFeedback}
                    onPress={props.handlePressQuest}>
                        <Text style={Style.bottomText}>Ask questions or leave feedback</Text>                        
                        <Image 
                            style={Style.arrowGreen}
                            source={spotArrowGreen} />
                </TouchableOpacity>            
            </View>
        </View>
    )
};

// Styles //
const Style = StyleSheet.create ({

    main: {
        width: '100%', 
        height: '100%',
        minHeight: 450,
        alignItems: 'flex-start',
    },
        content: {
            flex: 1,
            alignItems: 'flex-start',
            width: '75%',
            maxWidth: 700,
            marginTop: '25%'
        },
            topView: {
                marginBottom: 40
            },
                titleWelcome: {
                    fontFamily: fonts.medium,
                    color: colors.bariumGrey, 
                    fontSize: 16,
                    letterSpacing: 0.3,
                    marginBottom: 14
                },
                title: {
                    fontFamily: fonts.semibold,
                    color: colors.lightGrey, 
                    fontSize: 38,
                    lineHeight: 40,
                    letterSpacing: 0.3,
                    marginBottom: 14,
                    
                },
                titleOwner: {
                    fontFamily: fonts.medium,
                    color: colors.bariumGrey, 
                    fontSize: 16,
                    letterSpacing: 0.4
                },
        centerMessages: {
            marginBottom: 80,
            width: 280
        },
            centerText: {
                fontFamily: fonts.medium,
                color: colors.lightGrey,
                fontSize: 16, 
                lineHeight: 24, 
                letterSpacing: 0.3,
            },

        buttonCreateSpot: {
            height: 35, 
            marginBottom: 2,
            flexDirection: 'row',
            alignItems: 'top'

        },
        buttonQuestionFeedback: {
            height: 35, 
            flexDirection: 'row',
            alignItems: 'top'
        },
            bottomText: {
                fontFamily: fonts.medium,
                color: colors.green, 
                fontSize: 12,
                lineHeight: 10,
                letterSpacing: 0.3,
                fontWeight: 500,
            },
            arrowGreen: {
                width: 7,
                height: 7,
                resizeMode: 'contain',
                marginLeft: 8
            },

});

export default Welcome;
