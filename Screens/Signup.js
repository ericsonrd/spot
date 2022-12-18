import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

// Backend call to Sign up user //
const url = "https://x8ki-letl-twmt.n7.xano.io/api:i1afkiPC";
const query = "/auth/verify_email/signup";

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
        <View 
            style={Style.main} 
            accessibilityRole="form">
                <View style={Style.content} >
                    <Text style={Style.logo}>Spot</Text>
                    <Text style={Style.authText}>Sign up</Text>
                    <View style={Style.form}>
                        <Text style={Style.fieldTitle}>Name</Text>
                        <TextInput 
                            style={Style.Input}
                            onChangeText={setName}
                            value={name} />
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
                        <Text style={Style.fieldTitle}>Confirm password</Text>
                        <TextInput 
                            style={Style.Input}
                            secureTextEntry={true}
                            onChangeText={setConfirmPass}
                            value={confirmPass} />
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
                                <Text style={Style.buttonText}>Sign up</Text>
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

            loginNav: {
                padding: 8, 
                justifyContent: "center", 
                alignItems: "center"
            },
                loginText: {
                    color: "grey", 
                    fontSize: 14, 
                    fontWeight: "700"
                }

});

export default Signup;
