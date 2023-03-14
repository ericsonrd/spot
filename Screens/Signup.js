import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts, colors} from '../assets/theme/Theme.js'

// Backend call to Sign up user //
const url = "https://x8ki-letl-twmt.n7.xano.io/api:i1afkiPC";
const query = "/auth/verify_email/signup";

const logo = require("../assets/images/spot-logo.png");
const loginArrow = require("../assets/images/spot-main-arrow-top-right.png");

// Signup Component //
const Signup = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    // Function to call Backend endpoint //
    const handleLogin = async () => {
        if (password !== confirmPass) {
            setErrorMsg("Passwords must match");
            return;
        }
        if (name && email && password && confirmPass) {
        const endpoint = `${url}${query}`;
        const data = JSON.stringify({"name": name, "email": email, "password": password});
        try {
            const response = await fetch(endpoint, {
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) {
                setName("");
                setEmail("");
                setPassword("");
                setConfirmPass("");
                setErrorMsg("")
                navigation.navigate("Verify");
            } else {
                const errorMessage = await response.json();
                setErrorMsg(errorMessage.message);
            };
        }
        catch (error) {
            console.log(error);
        }} else {
            setErrorMsg("All fields must be completed.")
        }
    };

    return (
        <View style={Style.main}>
            <View style={Style.content}>
                <View style={Style.topView}>
                    <Image 
                        style={Style.logo}
                        source={logo} />
                    <Text style={Style.authText}>Sign up</Text>
                </View>
                <View 
                    style={Style.formView}
                    accessibilityRole="form">
                    <View>
                        <TextInput 
                            style={Style.input}
                            placeholder="Name"
                            onChangeText={setName}
                            value={name} />
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
                        <TextInput 
                            style={Style.input}
                            placeholder="Confirm password"
                            secureTextEntry={true}
                            onChangeText={setConfirmPass}
                            value={confirmPass} />
                    </View>
                    <View style={Style.errorView}>
                        {errorMsg ? <Text style={Style.errorMsg}>{errorMsg}</Text> : null}
                    </View>
                </View>
                <View style={Style.buttonSection}>
                    <TouchableOpacity 
                        style={Style.button}
                        onPress={handleLogin}>
                            <Text style={Style.buttonText}>Sign up</Text>
                            <Image style={Style.buttonArrow} source={loginArrow}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={Style.loginNav}
                        onPress={() => navigation.navigate("Login")}>
                            <Text style={Style.loginText}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

// Styles //

const Style = StyleSheet.create ({
    main: {
        flex: 1, 
        backgroundColor: colors.plomo, 
        width: '100%', 
        height: '100%', 
        minHeight: 850,
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
                    width: 210, 
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

            loginNav: {
                justifyContent: "center", 
                alignItems: "center"
            },
                loginText: {
                    color: colors.purple, 
                    fontFamily: fonts.medium,
                    fontSize: 16
                }

});

export default Signup;
