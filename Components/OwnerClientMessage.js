import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fonts, colors} from '../assets/theme/Theme.js'

// Client Message component //
const OwnerClientMsg = (props) => {
    return (
        <View style={Style.main}>
            <Text style={Style.username}>{props.userName}</Text>
            <View style={Style.messageView}>
                <Text style={Style.message}>{props.msg}</Text>
            </View>
        </View>
    )
};

// Styles //
const Style = StyleSheet.create ({

    main: {
        width: '100%', 
    },
        username: {
            fontFamily: fonts.medium,
            color: colors.metalBlue, 
            fontSize: 12, 
            letterSpacing: 0.3,
            textAlign: 'right', 
            marginRight: 12, 
            marginTop: 16,
            marginBottom: 4
        },
        messageView: {
            backgroundColor: colors.yellow,
            borderRadius: 8, 
            alignSelf: 'flex-end', 
            flexWrap: 'wrap', 
            marginLeft: 72, 
            marginBottom: 4
        },
            message: {
                fontFamily: fonts.regular,
                color: colors.blue,
                fontSize: 15,
                letterSpacing: 0.3,
                padding: 12, 
                textAlign: 'right'
            },

});

export default OwnerClientMsg;
