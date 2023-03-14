import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {fonts, colors} from '../assets/theme/Theme.js'

// External User Message component //
const OwnerUserMsg = (props) => {
    return (
    <View style={Style.main}>
        <View style={Style.user}>
            <Image 
                style={Style.userImage}
                source={props.userImg} 
            />
            <Text style={Style.username}>{props.userName}</Text>
        </View>
        <View style={Style.messageView}>
            <Text style={Style.message}>{props.msg}</Text>
        </View>
    </View>
    )
};

// Style //
const Style = StyleSheet.create ({

    main: {
        width: '100%', 
    },
        user: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'baseline',
            marginTop: 16,
            marginLeft: 12,
            marginBottom: 4
        },
            userImage: {
                width: 14, 
                height: 20, 
                borderRadius: 1,
                marginRight: 4
            },
            username: {
                fontFamily: fonts.medium,
                color: colors.bariumGrey, 
                fontSize: 12, 
                letterSpacing: 0.3,
                textAlign: 'left', 
            },
        messageView: {
            backgroundColor: colors.yellow,
            borderRadius: 8, 
            alignSelf: 'flex-start',
            flexWrap: 'wrap', 
            marginRight: 72, 
            marginBottom: 2
        },
            message: {
                fontFamily: fonts.regular,
                color: colors.darkGrey,
                fontSize: 15,
                letterSpacing: 0.3,
                padding: 12, 
                textAlign: 'left'
            },
    
});

export default OwnerUserMsg;
