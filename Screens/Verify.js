import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PreVerify from '../Components/PreVerify.js'
import PostVerify from '../Components/PostVerify.js'

// Backend endpoint for verifing email //
const url = "https://x8ki-letl-twmt.n7.xano.io/api:i1afkiPC";
const query = "/auth/verify_email/magic_login";

// Function to get parameter from url address //
const getParam = (param) => {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] === param) {
            return pair[1];
        }
    }
    return(false);
};
const magicToken = getParam("token");

// Verify component //
const Verify = ({navigation}) => {

    // Function to call Backend and send token for verification //
    const handleVerify = async () => {
        const endpoint = `${url}${query}`;
        const data = JSON.stringify({"magic_token": magicToken});
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                body: data,
                headers: {
                    'Content-Type': "application/json",
                }
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                getResponse(jsonResponse);
            }
        }
        catch (error) {
            console.log(error)
        }
    };

    // Handling response form Backend //
    const getResponse = (response) => {
        global.token = response.authToken;
        navigation.navigate("Spots", {toSpot: false});
    };

    // Conditional to call Backend Verification function //
    if (magicToken === false) {
        console.log("no token yet");
    } else {
        handleVerify();
    };

    return (
        <View style={{flex: 1}}>
            {magicToken !== false ? 
                <PreVerify /> : <PostVerify /> 
            }
        </View>
    )
};

// Styles //
export default Verify;
