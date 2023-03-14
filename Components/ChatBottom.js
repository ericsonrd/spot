import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts, colors} from '../assets/theme/Theme.js'

const backArrow = require('../assets/images/spot-main-arrow-top-left.png');
const forwardArrow = require('../assets/images/spot-main-arrow-top-right.png');

const ChatBottom = (props) => {
    return (
        <View style={Style.main}>
            <TouchableOpacity 
                style={Style.backButton}
                onPress={props.close}>
                    <Image 
                        style={Style.backArrow}
                        source={backArrow} />
                    <Text style={Style.backButtonText}>Back</Text>
            </TouchableOpacity>
            <View style={Style.inputView}>
                <TextInput 
                    style={Style.textInput}
                    onChangeText={props.setInput}
                    multiline={true}
                    placeholder="Type your message..."
                    value={props.input} />
                <View style={Style.inputLine} />
                <Text style={Style.inputMessage}>Messages will dissappear after 48 hours</Text>
            </View>
            <TouchableOpacity style={Style.sendButton} 
                onPress={props.sendMessage}>
                    <Text style={Style.sendButtonText}>Send</Text>
                    <Image 
                        style={Style.sendArrow}
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
    },
        backButton: {
            flexDirection: 'row',
            alignItems: 'center',
            width: 48,
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
                color: colors.green,
            },

        inputView: {
            flex: 1,
            height: 60, 
            marginHorizontal: 8,
        }, 
            textInput: {
                width: '100%', 
                height: '100%', 
                placeholderTextColor: colors.bariumGrey,
                color: colors.lightGrey,
                fontFamily: fonts.regular,
                fontSize: 13,
                letterSpacing: 0.3,
                paddingVertical: 22
            },
            inputLine: {
                width: '100%',
                height: 0.5,
                marginVertical: 8,
                backgroundColor: colors.bariumGrey,
            },
            inputMessage: {
                fontFamily: fonts.medium,
                color: colors.metalBlue,
                fontSize: 11,
                letterSpacing: 0.3
            },
        sendButton: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: 48,
            height: 60 
        },
            sendArrow: { 
                width: 7, 
                height: 7,
                marginLeft: 6,
                marginBottom: 3
            },
            sendButtonText: {
                fontFamily: fonts.medium,
                fontSize: 14,
                color: colors.green,
                }

})
       
export default ChatBottom;
