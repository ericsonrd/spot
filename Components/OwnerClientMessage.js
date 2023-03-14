import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {fonts, colors} from '../assets/theme/Theme.js'

// Client Message component //
const OwnerClientMsg = (props) => {
    return (
        <View style={Style.main}>
            <View style={Style.user}>
                <Text style={Style.username}>{props.userName}</Text>
                <Image 
                    style={Style.userImage}
                    source={props.userImg} 
                />
            </View>
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
        user: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'baseline',
            marginTop: 16,
            marginRight: 12,
            marginBottom: 4
        },
            username: {
                fontFamily: fonts.medium,
                color: colors.bariumGrey, 
                fontSize: 12, 
                letterSpacing: 0.3,
                textAlign: 'right', 
                marginRight: 4, 
            },
            userImage: {
                width: 14, 
                height: 20, 
                borderRadius: 1
            },
        messageView: {
            backgroundColor: colors.yellow,
            borderRadius: 8, 
            alignSelf: 'flex-end', 
            flexWrap: 'wrap', 
            marginLeft: 72, 
            marginBottom: 2
        },
            message: {
                fontFamily: fonts.regular,
                color: colors.darkGrey,
                fontSize: 15,
                letterSpacing: 0.3,
                padding: 12, 
                textAlign: 'right'
            },

});

export default OwnerClientMsg;
