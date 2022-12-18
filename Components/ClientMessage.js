import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Client Message component //
const ClientMsg = (props) => {
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
            fontSize: 12, 
            color: 'grey', 
            textAlign: 'right', 
            marginRight: 12, 
            marginTop: 4,
            marginBottom: 4
        },
        messageView: {
            backgroundColor: 'lightblue',
            borderRadius: 8, 
            alignSelf: 'flex-end', 
            marginLeft: 72, 
        },
            message: {
                padding: 12, 
                textAlign: 'right'
            },

})
export default ClientMsg;
