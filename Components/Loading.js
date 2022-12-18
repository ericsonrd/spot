import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

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
        backgroundColor: 'black', 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingVertical: 146
    },
        loadingText: {
            color: 'white'
        },

})

export default Loading;
