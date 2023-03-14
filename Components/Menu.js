import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {fonts, colors} from '../assets/theme/Theme.js';

const addIcon = require('../assets/images/spot-icon-add.png');

const Menu = () => {
    return (
        <View style={Style.main}>
            <TouchableOpacity style={Style.menuItem}>
                <Text style={Style.menuText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.menuAdd}>
                <Image style={Style.addIcon}
                    source={addIcon}
                />
            </TouchableOpacity>
            <TouchableOpacity style={Style.menuItem}>
                <Text style={Style.menuText}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const Style = StyleSheet.create ({

    main: {
        width: '100%',
        height: 60, 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        padding: 16
    },
        menuItem: {
            width: 100, 
            justifyContent: 'center', 
            alignItems: 'center'
        },
            menuText: {
                fontFamily: fonts.semibold, 
                fontSize: 14,
                letterSpacing: 0.3, 
                color: colors.green
            },
        menuAdd: {
            justifyContent: 'center',
            alignItems: 'center',
            width: 30, 
            height: 30
        },
            addIcon: {
                width: 20, 
                height: 20
            }

});

export default Menu;
