import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TextInput, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import ClientMsg from '../Components/ClientMessage.js';
import ClientMsgNn from '../Components/ClientMessageNn.js';
import UserMsg from '../Components/UserMessage.js';
import UserMsgNn from '../Components/UserMessageNn.js';
import OwnerUserMsg from '../Components/OwnerUserMessage.js';
import OwnerUserMsgNn from '../Components/OwnerUserMessageNn';
import OwnerClientMsg from '../Components/OwnerClientMessage.js';
import OwnerClientMsgNn from '../Components/OwnerClientMessageNn.js';
import Loading from '../Components/Loading.js';
import Welcome from '../Components/WelcomeMessage.js'
import {fonts, colors} from '../assets/theme/Theme.js'

// Backend Token & Spot query endpoint //
const url = "https://x8ki-letl-twmt.n7.xano.io/api:i1afkiPC";
const tokenQuery = "/auth/token";
const spotQuery = /chatrooms/;

const backArrow = require("../assets/images/spot-main-arrow-top-left.png");
const sendArrow = require("../assets/images/spot-main-arrow-top-right.png");

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
    const [spotTitle, setSpotTitle] = useState("");
    const [spotOwner, setSpotOwner] = useState("");
    const [spotOwnerId, setSpotOwnerId] = useState("");
    const [loading, setLoading] = useState(true);
    const [members, setMembers] = useState("");
    const {id} = route.params;
    const scrollViewRef = useRef();

    // Call to Backend to refresh Ably Token before expiring //
    const freshToken = async () => {
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
                return jsonResponse.ablyToken
            } else {
                const errorMessage = await response.json();
                console.log(`Not able to connect. Try again later.`)
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
    };

    // Function to set Spot data //
    const renderSpotData = (response) => {
        setSpotTitle(response.spot.title);
        setSpotOwner(response.spot.owner.name);
        setSpotOwnerId(response.spot.owner.id);
    }

    // Calling function for Connection, Retrieving Channel, Previous History & Messages Subscription //
    useEffect(() => {
        connect();
    }, []);
    
    // ---------- Calling Ably Chat Connection Function ---------- //
    const connect = () => {
        client = new Ably.Realtime({authCallback: async (tokenParams, callback) => {
            try {
                const tokenRequest = await freshToken();
                callback(null, tokenRequest)
            }
            catch (error) {
                callback(error, null)
            }
        }});
        // Client connection //
        client.connection.on('connected', () => {
        console.log(`Connected to Ably Realtime!`);
        // Channel Function call //
        getChannel(client);
        });
    };

    useEffect(() => {
        if (msgHistory.length >= 1) {
            const lastMsg = msgHistory.length - 1;
            const prevMsgUser = msgHistory[lastMsg].clientId;
            global.previousUser = prevMsgUser;
        } else {
            global.previousUser = "";
        }
    }, [msgHistory])

    // Calling Channel Function for Retrieving Channel //
    const getChannel = (client) => {
        let channelOpts = {params: {occupancy: 'metrics.connections'}};
        channel = client.channels.get(("spots:"+id), channelOpts);
        console.log(`Subscribed to channel ${id}!`); 
        // History Function call //
        getHistory(channel); 
        // Subscribing to Channel Messages //
        channel.subscribe(message => {
            console.log(message);
            // Sorting Ocuppancy data from incoming messages, and push last incoming message to History array //
            if (message.data.metrics) {
                setMembers(membersCount(message.data.metrics.connections));
                return;
            }
            if (global.previousUser === message.clientId) {
                message.data.cont = true;
                setMsgHistory((previous) => [...previous, message])
            } else {
                setMsgHistory((previous) => [...previous, message])
            }
        });
    };
    
    // History Function called from Channel retrieval //
    let msgsHistory = [];
    const getHistory = (channel) => {
        channel.history((err, messagesPage) => {
            let messages = messagesPage.items;
            console.log(messages);
            for (let i = 0; i < messages.length; i++) {
            // Identifying follow up messages to remove username //
                let message = {...messages[i]};
                let lastMessage = {...messages[i + 1]};
                if (message.clientId === lastMessage.clientId) {
                    message.data.cont = true;
                } else {
                    message.data.cont = false;
                }
                msgsHistory.unshift(message)
            };
            // Setting Previous History Array //
            setMsgHistory(msgsHistory);
            setLoading(false);
        });
    };
    // Sending Messages to channel //
    const sendMessage = () => {
        // Conditional assigning values to help sorting messages from logged in user from external users //
        if (input === "")
            return;
        if (userId === spotOwnerId) {
            channel.publish("new-message", {user: username, message: input, owner: true, cont: false});
        } else {
            channel.publish("new-message", {user: username, message: input, owner: false, cont: false});
        }
        setInput("")
    };

    // Function to Close Ably Connection //
    const handleClose = () => {
        client.close();
        console.log("Connection ended!");
        navigation.navigate("Spots", {token})
    };

    // Function closing connection when clicking "Add spot" link and navigation out //
    const handleAddSpot = () => {
        client.close();
        console.log("Connection ended!");
        navigation.navigate("Spots", {toSpot: false});
    };

    // Function closing connection when clicking "Ask question" link and navigating out //
    const handleAskQuest = () => {
        client.close();
        console.log("Connection ended!");
        navigation.navigate("Spots", {toSpot: true});
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
    // console.log(msgHistory)
    // console.log(userId)
    // Function for rendering according to logged-in user and if message is a follow-up from same user //
    const renderItem = ({item}) => (
        userId === JSON.parse(item.clientId) ?
            item.data.owner === true ?
                item.data.cont !== true ?
                    <OwnerClientMsg
                        key={item.id}
                        userName={item.data.user}
                        msg={item.data.message}/>
                    :
                    <OwnerClientMsgNn
                        key={item.id}
                        msg={item.data.message}/>
            :
                item.data.cont !== true ?
                    <ClientMsg
                        key={item.id}
                        userName={item.data.user} 
                        msg={item.data.message}/>
                    :
                    <ClientMsgNn
                        key={item.id}
                        msg={item.data.message}/>
        :
            item.data.owner === true ?
                item.data.cont !== true ?
                    <OwnerUserMsg
                        key={item.id}
                        userName={item.data.user}
                        msg={item.data.message}/>
                    :
                    <OwnerUserMsgNn
                        key={item.id}
                        msg={item.data.message}/>
            :
                item.data.cont !== true ?
                    <UserMsg
                        key={item.id}
                        userName={item.data.user} 
                        msg={item.data.message}/>
                    :
                    <UserMsgNn
                        key={item.id}
                        msg={item.data.message}/>
    )
    
    
    // const renderItemm = ({item}) => (
    //     item.data.cont === false ?
    //         item.data.owner === true ?
    //             userId === item.clientId ?
    //                 <OwnerClientMsg
    //                     key={item.id}
    //                     userName={item.data.user}
    //                     msg={item.data.message}/>
    //                     : 
    //                 <OwnerUserMsg
    //                     key={item.id}
    //                     userName={item.data.user}
    //                     msg={item.data.message}/>
    //             :
    //             username !== item.data.user ?
    //                 <UserMsg
    //                     key={item.id}
    //                     userName={item.data.user} 
    //                     msg={item.data.message}/>
    //                     : 
    //                 <ClientMsg
    //                     key={item.id}
    //                     userName={item.data.user} 
    //                     msg={item.data.message}/>
    //     : 
    //         item.data.owner === true ?
    //             userId === item.clientId ?
    //                 <OwnerClientMsg
    //                     key={item.id}
    //                     msg={item.data.message}/>
    //                     : 
    //                 <OwnerUserMsg
    //                     key={item.id}
    //                     msg={item.data.message}/>
    //             :
    //             username !== item.data.user ?
    //                 <UserMsg
    //                     key={item.id}
    //                     msg={item.data.message}/>
    //                     : 
    //                 <ClientMsg
    //                     key={item.id}
    //                     msg={item.data.message}/>
    // );
    // const renderItem = ({item}) => (
    //     item.data.cont === true ?
    //         username === item.data.user ?
    //             <ClientMsg
    //                 key={item.id}
    //                 msg={item.data.message}/>
    //             : 
    //             <UserMsg
    //                 key={item.id}
    //                 msg={item.data.message}/>
    //         :
    //         username !== item.data.user ?
    //             <UserMsg
    //                 key={item.id}
    //                 userName={item.data.user} 
    //                 msg={item.data.message}/>
    //                 : 
    //             <ClientMsg
    //                 key={item.id}
    //                 userName={item.data.user} 
    //                 msg={item.data.message}/>
    // );


    // Rendering Component //
    return (
    <View style={Style.main}>
        <View style={Style.content}>
            <View style={Style.top}>
                <View style={Style.header}>
                    <Text style={Style.title}>{spotTitle}</Text>
                </View>
                <View style={Style.subOcupView}>
                    <Text style={Style.subtitle}>by {spotOwner}</Text>
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
                        <Image 
                            style={Style.backArrow}
                            source={backArrow} />
                        <Text style={Style.backButtonText}>Back</Text>
                </TouchableOpacity>
                <View style={Style.inputView}>
                    <TextInput 
                        style={Style.textInput}
                        onChangeText={setInput}
                        multiline={true}
                        placeholder="Type your message..."
                        value={input} />
                    <TouchableOpacity style={Style.sendButton} 
                        onPress={sendMessage}>
                            <Image 
                                style={Style.sendButtonIcon}
                                source={sendArrow} />
                            <Text style={Style.sendButtonText}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
    );
};


// ----- Styles ----- //

const Style = StyleSheet.create ({
    main: {
        flex: 1, 
        backgroundColor: colors.darkGrey, 
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
            top: {
                width: '100%', 
                justifyContent: 'space-between',
            },
                header: {
                    flex: 1,
                    justifyContent: 'flex-start',
                },
                    title: {
                        fontFamily: fonts.semibold,
                        color: colors.metalBlue,
                        fontSize: 26,
                        lineHeight: 28,
                        letterSpacing: 0.3,
                        width: '80%',
                        marginBottom: 8
                    },
                    subOcupView: {
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'baseline'
                    },
                        subtitle: {
                            fontFamily: fonts.medium,
                            color: colors.decayingBlue,
                            fontSize: 12,
                            letterSpacing: 0.3
                        },
                        usersNumber: {
                            fontFamily: fonts.medium,
                            color: colors.decayingBlue, 
                            fontSize: 10,
                            letterSpacing: 0.2
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
                justifyContent: 'space-between',
                backgroundColor: colors.bariumGrey, 
                padding: 6, 
                width: 50,
                height: 50, 
            },
                backArrow: {
                    width: 14, 
                    height: 14,
                    resizeMode: 'contain',
                },
                backButtonText: {
                    fontFamily: fonts.medium,
                    fontSize: 13,
                    color: colors.blue,
                    alignSelf: 'flex-end'
                },

            inputView: {
                flexDirection: 'row', 
                flex: 1,
                height: 50, 
            }, 
                textInput: {
                    width: '100%', 
                    height: '100%', 
                    fontFamily: fonts.regular,
                    fontSize: 15,
                    letterSpacing: 0.3,
                    backgroundColor: colors.metalBlue, 
                    marginLeft: 4, 
                    paddingHorizontal: 8,
                    paddingVertical: 16
                },
                sendButton: {
                    justifyContent: 'space-between',
                    width: 50, 
                    height: 50, 
                    padding: 6, 
                    alignItems: 'flex-end', 
                    backgroundColor: colors.green
                },
                    sendButtonIcon: { 
                        width: 14,
                        height: 14,
                        resizeMode: 'contain',
                    },
                    sendButtonText: {
                        fontFamily: fonts.medium,
                        color: colors.blue,
                        fontSize: 13, 
                        alignSelf: 'flex-start',
                        letterSpacing: 0.3
                        }

});

export default Chat;
