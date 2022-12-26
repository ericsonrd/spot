import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fonts, colors} from '../assets/theme/Theme.js'


// Loading status component //
const Loading = () => {
    return (
        <View style={Style.loadingView}>
            <Text style={Style.loadingText}>Loading...</Text>
        </View>
    )
};

// Styles //
const Style = StyleSheet.create({

    loadingView: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingTop: 160
    },
        loadingText: {
            fontFamily: fonts.medium,
            color: colors.metalBlue,
            fontSize: 14,
            letterSpacing: 0.3
        },

})

export default Loading;
