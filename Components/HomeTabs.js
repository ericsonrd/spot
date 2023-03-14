import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fonts, colors} from '../assets/theme/Theme.js';

const HomeTabs = () => {
    return (
        <View style={Style.main}>
            <View style={Style.menuItem}>
                <Text style={Style.menuText}>Discover</Text>
            </View>
            <View style={Style.menuItem}>
                <Text style={Style.menuText}>Joined</Text>
            </View>
            <View style={Style.menuItem}>
                <Text style={Style.menuText}>Chats</Text>
            </View>
        </View>
    );
};

const Style = StyleSheet.create ({

    main: {
        width: '100%',
        height: 40, 
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        padding: 16,
        paddingBottom: 4
    },
        menuItem: {
            width: 60, 
            justifyContent: 'flex-end', 
            alignItems: 'center'
        },
            menuText: {
                fontFamily: fonts.medium, 
                fontSize: 12,
                letterSpacing: 0.5, 
                color: colors.metalBlue
            },

});

export default HomeTabs;
