import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts, colors} from '../assets/theme/Theme.js'

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

const logo = require("../assets/images/spot-logo.png");
const loginArrow = require("../assets/images/spot-main-arrow-top-right.png");

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
            setErrorMsg("All fields must be completed.")
        };
    };

    const renderResponse = (response) => {
        global.token = response.authToken;
        navigation.navigate("Spots", {toSpot: false});
    };

    // Function to Autodirect to Verification page after email verification//
    const goToVerify = () => {
        navigation.navigate("Verify")
    };

    return (
        <>
            { magicToken ? goToVerify() :
                <View style={Style.main}>
                    <View style={Style.content}>
                        <View style={Style.topView}>
                                <Image 
                                    style={Style.logo}
                                    source={logo} />
                                <Text style={Style.authText}>Log in</Text>
                        </View>
                        <View 
                            style={Style.formView}
                            accessibilityRole="form">
                                <View>
                                    <TextInput 
                                        style={Style.input}
                                        placeholder="Email"
                                        onChangeText={setEmail}
                                        value={email} />
                                    <TextInput 
                                        style={Style.input}
                                        placeholder="Password"
                                        secureTextEntry={true}
                                        onChangeText={setPassword}
                                        value={password} />
                                    {/* <Text style={Style.forgotPassword}>I don't remember my password</Text> */}
                                </View>
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
                                    <Image style={Style.buttonArrow} source={loginArrow}/>
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
        backgroundColor: colors.plomo, 
        width: '100%', 
        height: '100%', 
        minHeight: 630,
        justifyContent: 'center', 
        alignItems: 'center'
    },
        content: {
            flex: 1,
            width: '100%',
            maxWidth: 700,
            padding: 35,
        },
            topView: {
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                width: '100%',
                maxWidth: 700,
                marginBottom: 48,
            },
                logo: {
                    width: '60%',
                    height: '48%',
                    minWidth: 250,
                    maxWidth: 280,
                    minHeight: 90,
                    resizeMode: 'contain',
                    marginBottom: 4
                },
                authText: {
                    color: colors.metalBlue,
                    fontSize: 24,
                    lineHeight: 24,
                    letterSpacing: 0.3,
                    fontFamily: fonts.semibold,
                },

            formView: {
                flex: 2, 
                justifyContent: 'space-between', 
                alignItems: 'flex-start',
                marginBottom: 16,
                maxWidth: 700,
            },
                input: {
                    width: 190, 
                    height: 45, 
                    color: colors.lightGrey,
                    placeholderTextColor: colors.metalBlue,
                    borderBottomColor: colors.metalBlue,
                    borderBottomWidth: 1,
                    padding: 14,
                    paddingLeft: 0,
                    fontFamily: fonts.regular,
                    fontSize: 15,
                    textAlign: 'left',
                    letterSpacing: 0.3,
                    marginBottom: 40
                },
                forgotPassword: {
                    width: '70%',
                    color: colors.green,
                    fontFamily: fonts.medium,
                    fontSize: 14,
                    letterSpacing: 0.4,
                    marginLeft: 14
                },

            errorView: {
                flex: 0.2,
                justifyContent: 'flex-end'
            },
                errorMsg: {
                    color: colors.zapote,
                    fontSize: 12,
                    letterSpacing: 0.3,
                    fontFamily: fonts.medium
                },

            buttonSection: {
                flex: 1, 
                justifyContent: 'flex-start', 
                alignItems: 'flex-start',
            },
                button: {
                    flexDirection: 'row',
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start', 
                    width: 180, 
                    height: 60, 
                    paddingVertical: 8,
                    paddingRight: 14,
                    marginBottom: 24 
                },
                    buttonText: {
                        color: colors.green, 
                        fontFamily: fonts.semibold,
                        fontSize: 40,
                        lineHeight: 25,
                        alignSelf: 'flex-end'
                    },
                    buttonArrow:{
                        width: 20, 
                        height: 20,
                        resizeMode: 'contain',
                        marginTop: 4
                    },

            signupNav: {
                justifyContent: "center", 
                alignItems: "center"
            },
                signupText: {
                    color: colors.purple, 
                    fontFamily: fonts.medium,
                    fontSize: 16,
                    letterSpacing: 0.3
                }

});

export default Login;

// ercsn //
