import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts, colors} from '../assets/theme/Theme.js';

const ChatTop = (props) => {
    return (
        <View style={Style.main}>
            <View style={Style.header}>
                <Image 
                    style={Style.headerImage}
                    source={props.spotAvatar}
                />
                <View style={Style.headerText}>
                    <Text style={Style.title}>{props.spotTitle}</Text>
                    <Text style={Style.subtitle}>by {props.spotOwner}</Text>
                </View>
            </View>
            <Text style={Style.members}>{props.members}</Text>
        </View>
    );
};

const Style = StyleSheet.create ({

    main: {
        width: '100%', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
        header: {
            flex: 1,
            flexDirection: 'row'
        },
            headerImage: {
                width: 45,
                height: 60,
                marginRight: 8,
                borderRadius: 4
            },
            headerText: {
                justifyContent: 'flex-end',
                width: '70%'
            },
                title: {
                    fontFamily: fonts.semibold,
                    color: colors.bariumGrey,
                    fontSize: 16,
                    lineHeight: 17,
                    letterSpacing: 0.3,
                    width: '80%',
                    marginBottom: 2
                },
                subtitle: {
                    fontFamily: fonts.medium,
                    color: colors.bariumGrey,
                    fontSize: 11,
                    letterSpacing: 0.3
                },

        members: {
            fontFamily: fonts.medium,
            color: colors.bariumGrey, 
            fontSize: 9,
            letterSpacing: 0.3
        },

})

export default ChatTop;
