import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// Welcome Component for Spot when no messages present //
const Welcome = (props) => {
    return (
        <View style={Style.main}>
            <View style={Style.topView}>
                <Text style={Style.titleWelcome}>Welcome to</Text>
                <Text style={Style.title}>{props.title}</Text>
                <Text style={Style.titleOwner}>by {props.owner}</Text>
            </View>
            <Text style={Style.centerMessage}>Start writing on the field at the bottom. Messages will dissappear after 24 hours, make sure to come back often.</Text>
            <View style={Style.bottomView}>
                <TouchableOpacity 
                    style={Style.buttonCreateSpot}
                    onPress={props.handlePressSpot}>
                        <Text style={Style.createSpotText}>Create your own Spot</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={Style.buttonQuestionFeedback}
                    onPress={props.handlePressQuest}>
                        <Text style={Style.questionFeedbackText}>Ask question or leave feedback</Text>
                </TouchableOpacity>            
            </View>
        </View>
    )
};

// Styles //
const Style = StyleSheet.create ({

    main: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'black', 
        padding: 80
    },
        topView: {
            alignItems: 'center', 
            marginBottom: '35%'
        },
            titleWelcome: {
                color: 'grey', 
                textAlign: 'center', 
                marginBottom: 16
            },
            title: {
                color: 'white', 
                textAlign: 'center', 
                fontSize: 36, 
                fontWeight: 300, 
                marginBottom: 4
            },
            titleOwner: {
                color: 'grey', 
                textAlign: 'center', 
                fontSize: 18
            },

    centerMessage: {
        color: 'grey', 
        textAlign: 'center', 
        fontStyle: 'italic', 
        fontSize: 14, 
        lineHeight: 22, 
        marginBottom: '35%'
    },
    
    bottomView: {
        alignItems: 'center'
    },
    buttonCreateSpot: {
        height: 35, 
        justifyContent: 'center', 
        padding: 8, 
        marginBottom: 2
    },
        createSpotText: {
            color: 'white', 
            textAlign: 'center', 
            fontSize: 12, 
            fontWeight: 500
        },
    buttonQuestionFeedback: {
        height: 35, 
        justifyContent: 'center', 
        padding: 8
    },
        questionFeedbackText: {
            color: 'white', 
            textAlign: 'center', 
            fontSize: 12, 
            fontWeight: 500
        }

});

export default Welcome;
