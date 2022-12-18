import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// Topic Element component //
const Topic = (props) => {
    return (
        <View style={Style.topicMain}>
            <Text style={Style.topicText}>{props.topic}</Text>
        </View>
    )
};

// Spot Component //
const Spot = (props) => {
    return (
    <TouchableOpacity 
        style={Style.spotMain}
        onPress={props.destination}>
        <View style={Style.spotDescription}>
            <Text style={Style.spotTitle}>{props.title}</Text>
            <Text style={Style.spotSub}>{props.subtitle}</Text>
            <Topic topic={props.topic}/>
        </View>
        <View style={Style.spotArrowView}>
            <Text style={Style.spotArrow}>⌍</Text>
        </View>
    </TouchableOpacity>
    )
};

// Styles //
const Style = StyleSheet.create ({


    // Topic Component //

    topicMain: {
        alignSelf: 'flex-start', 
        backgroundColor: "#202020", 
        padding: 6
    },
        topicText: {
            fontSize: 11, 
            textAlign: "left",
            color: 'grey'
        },


    // Spot Component //

    spotMain: {
        width: '100%', 
        marginTop: 8,
        padding: 12,
        backgroundColor: "#707070",
        flexDirection: 'row'
    },
        spotDescription: {
            flex: 1, 
            alignItems: "left"
        },
            spotTitle: {
                color: "#EEEEEE", 
                fontSize: 30, 
                fontWeight: 200, 
                marginBottom: 4
            },
            spotSub: {
                color: "#101010", 
                fontSize: 16, 
                fontWeight: 300, 
                lineHeight: 20, 
                marginBottom: 14
            },
            spotArrowView: {
                width: 30, 
                height: "100%", 
                padding: 4
            },
                spotArrow: {
                    fontSize: 34,
                    fontWeight: "800"
                },

})

export default Spot;
