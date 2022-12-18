import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

// Backend call to log in user //
const url = "https://x8ki-letl-twmt.n7.xano.io/api:i1afkiPC";
const query = "/auth/login";

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

// Login Component //
const Login = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    // Function Calling Backend endpoint //
    const handleLogin = async () => {
        if (email && password) {
        const endpoint = `${url}${query}`;
        const data = JSON.stringify({"email": email, "password": password});
        try {
            const response = await fetch(endpoint, {
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) {
                const jsonResponse = await response.json();
                setEmail("");
                setPassword("");
                setErrorMsg("");
                renderResponse(jsonResponse)
            } else {
                const errorMessage = await response.json();
                setErrorMsg(errorMessage.message);
            };
        }
        catch (error) {
            console.log(error);
        }} else {
            setErrorMsg("All fields must be completed")
        };
    };

    const renderResponse = (response) => {
        global.token = response.authToken;
        navigation.navigate("Channels", {toSpot: false});
    };

    // Function to Autodirect to Verification page after email verification//
    const goToVerify = () => {
        navigation.navigate("Verify")
    };

    return (
        <>
            { magicToken ? goToVerify() :
                <View style={Style.main}>
                    <View 
                        style={Style.content} 
                        accessibilityRole="form">
                            <Text style={Style.logo}>Spot</Text>
                            <Text style={Style.authText}>Log in</Text>
                            <View style={Style.form}>
                                <Text style={Style.fieldTitle}>Email</Text>
                                <TextInput 
                                    style={Style.Input}
                                    onChangeText={setEmail}
                                    value={email} />
                                <Text style={Style.fieldTitle}>Password</Text>
                                <TextInput 
                                    style={Style.Input}
                                    secureTextEntry={true}
                                    onChangeText={setPassword}
                                    value={password} />
                                <View style={Style.errorView}>
                                    {errorMsg ? 
                                        <Text style={Style.errorMsg}>{errorMsg}</Text>
                                        :
                                        null}
                                </View>
                            </View>
                            <View style={Style.buttonSection}>
                                <TouchableOpacity 
                                    style={Style.button}
                                    onPress={handleLogin}>
                                        <Text style={Style.buttonText}>Log in</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={Style.signupNav}
                                    onPress={() => navigation.navigate("Signup")}>
                                        <Text style={Style.signupText}>Signup</Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                </View>
            }
        </>
    )
};

// Styles //
const Style = StyleSheet.create ({
    main: {
        flex: 1, 
        backgroundColor: 'black', 
        width: '100%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
        content: {
            alignItems: 'center', 
            width: '60%', 
            height: '70%'
        },
            logo: {
                flex: 1, 
                color: 'grey', 
                fontSize: 55, 
                fontWeight: 100
            },

            authText: {
                color: 'grey',
                fontSize: 28,
                fontWeigth: 400
            },

            form: {
                flex: 5, 
                justifyContent: 'center', 
                alignItems: 'center'
            },
                fieldTitle: {
                    color: 'grey', 
                    fontSize: 14, 
                    fontWeight: 300, 
                    marginBottom: 8
                },
                    Input: {
                        width: 175, 
                        height: 40, 
                        backgroundColor: 'grey',
                        padding: 8,
                        textAlign: 'center',
                        marginBottom: 14
                    },

            errorView: {
                flex: 0.2
            },
                errorMsg: {
                    color: 'red',
                    fontSize: 11,
                    fontStyle: "italic"
                },

            buttonSection: {
                flex: 0.6, 
                justifyContent: 'center', 
                alignItems: 'center'
            },
                button: {
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    width: 230, 
                    height: 60, 
                    backgroundColor: 'lightblue',
                    marginBottom: 26 
                },
                    buttonText: {
                        color: 'black', 
                        fontSize: 25, 
                        fontWeight: 300
                    },

            signupNav: {
                padding: 8, 
                justifyContent: "center", 
                alignItems: "center"
            },
                signupText: {
                    color: "grey", 
                    fontSize: 14, 
                    fontWeight: "700"
                }

});

export default Login;
