import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// External User Message component //
const UserMsg = (props) => {
    return (
    <View style={Style.main}>
        <Text style={Style.username}>{props.userName}</Text>
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
        username: {
            fontSize: 12, 
            color: 'grey', 
            textAlign: 'left', 
            marginLeft: 12, 
            marginTop: 6,
            marginBottom: 4
        },
        messageView: {
            backgroundColor: 'grey', 
            borderRadius: 8, 
            alignSelf: 'flex-start',
            flexWrap: 'wrap', 
            marginRight: 72, 
        },
            message: {
                padding: 12, 
                textAlign: 'left'
            },
    
});

export default UserMsg;
