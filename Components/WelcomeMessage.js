import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts, colors} from '../assets/theme/Theme.js'

const spotArrowGreen = require("../assets/images/spot-green-arrow-top-right.png");
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
                <Text style={Style.centerMessage}>Start writing on the field at the bottom. Messages will dissappear after 24 hours, make sure to come back often.</Text>
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
        flex: 1, 
        backgroundColor: colors.darkGrey, 
        position: 'absolute',
        width: '100%', 
        minHeight: 450,
        alignItems: 'flex-start'
    },
        content: {
            flex: 1,
            alignItems: 'flex-start',
            width: '78%',
            maxWidth: 700,
            paddingTop: 62
        },
            topView: {
                marginBottom: 40
            },
                titleWelcome: {
                    fontFamily: fonts.medium,
                    color: colors.metalBlue, 
                    fontSize: 16,
                    letterSpacing: 0.3,
                    marginBottom: 14
                },
                title: {
                    fontFamily: fonts.semibold,
                    color: colors.peptoPink, 
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

        centerMessage: {
            fontFamily: fonts.medium,
            color: colors.metalBlue,
            fontSize: 16, 
            lineHeight: 24, 
            letterSpacing: 0.3,
            marginBottom: 80
        },

        buttonCreateSpot: {
            height: 35, 
            marginBottom: 2,
            flexDirection: 'row'
        },
        buttonQuestionFeedback: {
            height: 35, 
            flexDirection: 'row',
            alignItems: 'baseline'
        },
            bottomText: {
                fontFamily: fonts.medium,
                color: colors.green, 
                fontSize: 12,
                letterSpacing: 0.3,
                fontWeight: 500,
            },
            arrowGreen: {
                width: 10,
                height: 10,
                resizeMode: 'contain',
                marginLeft: 10
            },

});

export default Welcome;
