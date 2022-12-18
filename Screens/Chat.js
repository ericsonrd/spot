import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import ClientMsg from '../Components/ClientMessage.js';
import UserMsg from '../Components/UserMessage.js';
import Loading from '../Components/Loading.js';
import Welcome from '../Components/WelcomeMessage.js'

// Backend Token & Spot query endpoint //
const url = "https://x8ki-letl-twmt.n7.xano.io/api:i1afkiPC";
const tokenQuery = "/auth/token";
const spotQuery = /chatrooms/;

// Requiring Ably to enable Chat service connection //
const Ably = require('ably');

// Ably variables //
let 
client, 
channel

// Chat component //
const Chat = ({route, navigation}) => {
    const [input, setInput] = useState("");
    const [msgHistory, setMsgHistory] = useState("");
    const [username, setUsername] = useState(null);
    const [userId, setUserId] = useState(null);
    const [ablyToken, setAblyToken] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [spotTitle, setSpotTitle] = useState(null);
    const [spotDescription, setSpotDescription] = useState(null);
    const [spotOwner, setSpotOwner] = useState("");
    const [loading, setLoading] = useState(true);
    const [members, setMembers] = useState("");
    const {id} = route.params;
    const scrollViewRef = useRef();

    // Call to Backend for logged user data, Ably token and calling Spot Query function //
    const fetchUser = async () => {
        const endpoint = `${url}${tokenQuery}`;
        try {
            const response = await fetch(endpoint, {
                method : "GET",
                headers: {
                    "accept": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            if (response.ok) {
                const jsonResponse = await response.json();
                renderResponse(jsonResponse);
                getSpot();
            } else {
                const errorMessage = await response.json();
                setErrorMsg(errorMessage.message);
                console.log(`Not able to connect. Try again later.`)
            }
        }
        catch (error) {
            console.log(error);
        }
    };   
        
    // Call to Backend to refresh Ably Token before expiring //
    const refreshToken = async () => {
        const endpoint = `${url}${tokenQuery}`;
        try {
            const response = await fetch(endpoint, {
                method : "GET",
                headers: {
                    "accept": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse.ablyToken
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    // Function to call to Backend to get Spot data ----- //
    const getSpot = async () => {
        const endpoint = `${url}${spotQuery}${id}`;
        try {
            const response = await fetch(endpoint, {
                method : "GET",
                headers: {
                    "accept": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            if (response.ok) {
                const jsonResponse = await response.json();
                renderSpotData(jsonResponse);
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    // Function to set user name //
    const renderResponse = (response) => {
        setUsername(response.user.name);
        setUserId(response.user.id);
        setAblyToken(response.ablyToken);
    };

    // Function to set Spot data //
    const renderSpotData = (response) => {
        setSpotTitle(response.title);
        setSpotDescription(response.description);
        setSpotOwner(response.owner.name)
    }

    // Calling function to query endpoint on first render //
    useEffect(() => {
        fetchUser();
    }, []);

    // Calling function for Connection, Retrieving Channel, Previous History & Messages Subscription //
    useEffect(() => {
        connect();
    }, [ablyToken]);
    
    // ---------- Calling Ably Chat Connection Function ---------- //
    const connect = () => {
        if (ablyToken !== null) {
            client = new Ably.Realtime({authCallback: async (tokenParams, callback) => {
                try {
                    const tokenRequest = await refreshToken();
                    callback(null, tokenRequest)
                }
                catch (error) {
                    callback(error, null)
                }
            }});
            // Client connection //
            client.connection.on('connected', () => {
            console.log(`${username} has connected to Ably Realtime!`);
            // Channel Function call //
            getChannel(client);
            });
        }
    };

    // Calling Channel Function for Retrieving Channel //
    const getChannel = (client) => {
        let channelOpts = {params: {occupancy: 'metrics.connections'}};
        channel = client.channels.get(("spots:"+id), channelOpts);
        console.log(`${username} has subscribed to channel ${id}!`); 
        // History Function call //
        getHistory(channel); 
        // Subscribing to Channel Messages //
        channel.subscribe(message => {
            // Sorting Ocuppancy data from incoming messages, and push last incoming message to History array //
            if (!message.data.metrics) {
                setMsgHistory((previous) => [...previous, message])
            } else {
                setMembers(membersCount(message.data.metrics.connections));
            }
        });
    };

    // History Function called from Channel retrieval //
    let msgsHistory = [];
    const getHistory = (channel) => {
        channel.history((err, messagesPage) => {
            let messages = messagesPage.items;
            for (let i = 0; i < messages.length; i++) {
                msgsHistory.unshift(messages[i])
            };
            // Setting Previous History Array //
            setMsgHistory(msgsHistory);
            setLoading(false);
        });
    };
    // Sending Messages to channel //
    const sendMessage = () => {
        // Identifying follow up messages to remove username //
        let lastMessageId = msgHistory.length - 1;
        let lastMessageUser;
        if (msgHistory.length !== 0) {
            lastMessageUser = msgHistory[lastMessageId].data.user;
        };
        // Conditional assigning values to help sorting messages from logged in user from external users //
        if (username === lastMessageUser) {
            channel.publish("new-message", {user: username, message: input, cont: true});
        } else {
            channel.publish("new-message", {user: username, message: input, cont: false});
        }
        setInput("")
    };

    // Function to Close Ably Connection //
    const handleClose = () => {
        client.close();
        console.log("Connection ended!");
        navigation.navigate("Channels", {token})
    };

    // Function closing connection when clicking "Add spot" link and navigation out //
    const handleAddSpot = () => {
        handleClose();
        navigation.navigate("Channels", {toSpot: false});
    };

    // Function closing connection when clicking "Ask question" link and navigating out //
    const handleAskQuest = () => {
        handleClose();
        navigation.navigate("Channels", {toSpot: true});
    };

    // Function for for rounding members connections number and assigning relative string //
    const membersCount = (members) => {
        if (members > 0 && members <= 1) {
            return members + " person present";
        } else if (members >= 2 && members <= 999) {
            return members + " people present";
        } else if (members >= 1000 && members <= 999999) {
            return Math.floor(members / 1000) + "k people present";
        } else if (members >= 1000000 && members <= 999999999) {
            return Math.floor(members / 1000000) + "m people present";
        } else if (members >= 1000000000 && members <= 999999999999) {
            return Math.floor(members / 1000000000) + "b people present";
        } else {
            return null;
        }
    };
 
    // Function for rendering according to logged-in user and if message is a follow-up from same user //
    const renderItem = ({item}) => (
        item.data.cont === true ?
            username === item.data.user ?
                <ClientMsg
                    key={item.id}
                    msg={item.data.message}/>
                : 
                <UserMsg
                    key={item.id}
                    msg={item.data.message}/>
            :
            username !== item.data.user ?
                <UserMsg
                    key={item.id}
                    userName={item.data.user} 
                    msg={item.data.message}/>
                    : 
                <ClientMsg
                    key={item.id}
                    userName={item.data.user} 
                    msg={item.data.message}/>
    );


    // Rendering Component //
    return (
    <View style={Style.main}>
        <View style={Style.top}>
            <View style={Style.header}>
                <Text style={Style.title}>{spotTitle}</Text>
                <Text style={Style.subtitle}>{spotDescription}</Text>
            </View>
            <View style={Style.usersView}>
                <Text style={Style.usersNumber}>{members}</Text>
            </View>
        </View>
        <ScrollView
            style={Style.chatContainer}
            ref={scrollViewRef}
            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({animated: true})}>
            {msgHistory.length !== 0?
                <FlatList 
                    data={msgHistory}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}/>
                : loading === true ? 
                <Loading /> 
                : <Welcome 
                    title={spotTitle}
                    owner={spotOwner}
                    handlePressSpot={handleAddSpot}
                    handlePressQuest={handleAskQuest}/>
            }
        </ScrollView>
        <View style={Style.bottomContainer}>
            <TouchableOpacity 
                style={Style.backButton}
                onPress={handleClose}>
                    <Text style={Style.backArrow}>⌌</Text>
                    <Text style={Style.backButtonText}>Back</Text>
            </TouchableOpacity>
            <View style={Style.inputView}>
                <TextInput 
                    style={Style.textInput}
                    onChangeText={setInput}
                    placeholder="Type your message..."
                    value={input} />
                <TouchableOpacity style={Style.inputButton} 
                    onPress={sendMessage}>
                        <Text style={Style.inputButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
         </View>
    </View>
    );
};


// ----- Styles ----- //

const Style = StyleSheet.create ({
    main: {
        flex: 1, 
        backgroundColor: 'black', 
        alignItems: 'stretch',
        padding: 16
    },
        top: {
            width: '100%', 
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
            header: {
                flex: 1,
                justifyContent: 'flex-start',
                marginTop: 4
            },
                title: {
                    fontSize: 34,
                    lineHeight: 36,
                    fontWeight: 100, 
                    color: 'grey',
                    marginBottom: 4
                },
                subtitle: {
                    color: 'grey'
                },
            usersView: {
                width: 90, 
                height: 50, 
                justifyContent: "flex-end"
            },
                usersNumber: {
                    color: 'grey', 
                    fontSize: 11, 
                    textAlign: "right", 
                },
                    usersLetter: {
                        fontSize: 14, 
                        fontWeight: 500
                    },


        chatContainer: {
            flex: 1, 
            marginVertical: 16
        },

        bottomContainer: {
            width: "100%", 
            flexDirection: 'row'
        },
            backButton: {
                width: 50, 
                height: 50, 
                backgroundColor: 'grey' 
            },
            backArrow: {
                fontSize: 30,
                lineHeight: 20,
                fontWeight: 800,
            },
            backButtonText: {
                fontSize: 14, 
                fontWeight: 600,
                alignSelf: "center",
                marginTop: 6
            },
            
            inputView: {
                flexDirection: 'row', 
                flex: 1,
                height: 50, 
            }, 
                textInput: {
                    width: '100%', 
                    height: '100%', 
                    backgroundColor: 'grey', 
                    marginLeft: 4, 
                    padding: 8
                },
                inputButton: {
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    width: 100, 
                    height: 50, 
                    backgroundColor: 'lightblue', 
                    alignSelf: 'right', 
                },
                    inputButtonText: {
                        fontSize: 16,
                        color: 'black',
                        fontWeight: 600
                    }
});

export default Chat;
