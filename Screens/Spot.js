import React, {useState, useEffect, useRef} from 'react';
import {View, Image, FlatList, StyleSheet, ScrollView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import ClientMsg from '../Components/ClientMessage.js';
import ClientMsgNn from '../Components/ClientMessageNn.js';
import UserMsg from '../Components/UserMessage.js';
import UserMsgNn from '../Components/UserMessageNn.js';
import OwnerUserMsg from '../Components/OwnerUserMessage.js';
import OwnerUserMsgNn from '../Components/OwnerUserMessageNn';
import OwnerClientMsg from '../Components/OwnerClientMessage.js';
import OwnerClientMsgNn from '../Components/OwnerClientMessageNn.js';
import Loading from '../Components/Loading.js';
import Welcome from '../Components/WelcomeMessage.js';
import ChatTop from '../Components/ChatTop.js';
import ChatBottom from '../Components/ChatBottom.js';
import {colors} from '../assets/theme/Theme.js'

// Backend Token & Spot query endpoint //
const url = "https://x8ki-letl-twmt.n7.xano.io/api:i1afkiPC";
const tokenQuery = "/auth/token";
const spotQuery = "/spot/";
const messageQuery = "/message";

const token = "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.1sKZI059ViZcgmpITd-N930uCLFjFwZv0nJNAXvTA6ylNR0ieuU2PHnhccxKUR6K-ntyVvJTwRfmX5mIn4LPW-mMm9KWInRf.RCVNYqp-5abrO7tg6Qoufg.1JxDhvbTIS0atVOePtA9rx_2qI1sOgb98j65vKUDIgL3REUkCWX_7mMo4W3xLomAycDZxZyH7r5D_bk1DutHW2h2anLf64rnbzNjiDz6E94cACDYL6yMf7hSR-zlQVj7etApr-eun6kNIoZXhuwTIpRntt9lMSAytLh00485T70.ecdWPiqzWx8OvUbtDRdcrJWG_fJU5d66frJHBKrmOno";

// Requiring Ably to enable Chat service connection //
const Ably = require('ably');

// Ably variables //
let client, channel;

// Chat component //
const Spot = ({route, navigation}) => {
    const [input, setInput] = useState("");
    const [allMessages, setAllMessages] = useState("")
    const [userId, setUserId] = useState(null);
    const [spotAvatar, setSpotAvatar] = useState("");
    const [spotBackground, setSpotBackground] = useState("");
    const [spotTitle, setSpotTitle] = useState("");
    const [spotOwner, setSpotOwner] = useState("");
    const [spotOwnerId, setSpotOwnerId] = useState("");
    const [loading, setLoading] = useState(true);
    const [members, setMembers] = useState("");
    // const {id} = route.params;
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
        const endpoint = `${url}${spotQuery}${1}`;
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

   // Sending Messages to Xano //
    const sendMessage = async () => {
        if (input === "")
            return;
        const endpoint = `${url}${messageQuery}`;
        const data = JSON.stringify({
            "text": input,
            "image": [],
            "stream_id": 1,
            "owner": spotOwnerId
        });
        try {
            const response = await fetch(endpoint, {
                method : "POST",
                body: data,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            if (response.ok) {
                const jsonResponse = await response.json();
                setInput("");
            } else {
                const errorMessage = await response.json();
                setErrorMsg(errorMessage.message);
                console.log(errorMessage.message);
            }
        }
        catch (error) {
            console.log(error);
        };
    };

    // Function to set user id //
    const renderResponse = (response) => {
        setUserId(response.user.id);
    };

    // Function to set Spot data //
    const renderSpotData = (response) => {
        setSpotAvatar(response.spot.spot_avatar.url);
        setSpotBackground(response.spot.spot_back);
        setSpotTitle(response.spot.title);
        setSpotOwner(response.spot.owner.name);
        setSpotOwnerId(response.spot.owner.id);
        const messages = (response.messages);
        const owner = (response.spot.owner.id)
        setHistory(messages, owner);
    };

    const setHistory = (messages, owner) => {
        if (messages.length >= 1) {
            let msgsHistory = [];
            for (let i = 0; i < messages.length; i++) {
                let message = {...messages[i]};
                let lastMessage = {...messages[i - 1]};
                if (message.user_id === lastMessage.user_id) {
                    message.cont = true;
                };
                if (message.user_id === owner) {
                    message.owner = true;
                }
                msgsHistory.push(message); 
            };
            setAllMessages(msgsHistory);
            setLoading(false);
        } else {
            return;
        };
    };
    
    // Calling function for Connection, Retrieving Channel, Previous History & Messages Subscription //
    useEffect(() => {
        connect();
    }, []);

    useEffect(() => {
        if (allMessages.length >= 1) {
            const lastMsg = allMessages.length - 1;
            const prevMsgUser = allMessages[lastMsg].user_id;
            global.previousUser = prevMsgUser;
        } else {
            global.previousUser = "";
        }
    }, [allMessages])
    
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

    // Calling Channel Function for Retrieving Channel //
    const getChannel = (client) => {
        let channelOpts = {params: {occupancy: 'metrics.connections'}};
        channel = client.channels.get(1, channelOpts);
        console.log(`Subscribed to channel ${1}!`); 
        // Subscribing to Channel Messages //
        channel.subscribe(message => {
            // Sorting Ocuppancy data from incoming messages, and push last incoming message to History array //
            if (message.data.metrics) {
                setMembers(membersCount(message.data.metrics.connections));
                return;
            }
            if (global.previousUser === message.data.user_id) {
                message.data.cont = true; 
            };
            if (message.data.user_id === message.data.owner) {
                message.data.owner = true;
            };
            setAllMessages((previous) => [...previous, message.data])
        });
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

    // Function for rendering according to logged-in user and if message is a follow-up from same user //
    const renderItem = ({item}) => (
        userId === JSON.parse(item.user_id) ?
            item.owner === true ?
                item.cont !== true ?
                    <OwnerClientMsg
                        key={item.id}
                        userName={item.name}
                        userImg={item.profile_avatar.url}
                        msg={item.text}/>
                    :
                    <OwnerClientMsgNn
                        key={item.id}
                        msg={item.text}/>
            :
                item.cont !== true ?
                    <ClientMsg
                        key={item.id}
                        userName={item.name} 
                        userImg={item.profile_avatar.url}
                        msg={item.text}/>
                    :
                    <ClientMsgNn
                        key={item.id}
                        msg={item.text}/>
        :
            item.owner === true ?
                item.cont !== true ?
                    <OwnerUserMsg
                        key={item.id}
                        userName={item.name}
                        userImg={item.profile_avatar.url}
                        msg={item.text}/>
                    :
                    <OwnerUserMsgNn
                        key={item.id}
                        msg={item.text}/>
            :
                item.cont !== true ?
                    <UserMsg
                        key={item.id}
                        userName={item.name}
                        userImg={item.profile_avatar.url} 
                        msg={item.text}/>
                    :
                    <UserMsgNn
                        key={item.id}
                        msg={item.text}/>
    )

    // Rendering Component //
    return (
    <View style={Style.main}>
        <Image 
            style={Style.backgroundImage}
            source={spotBackground}/>
        <LinearGradient 
                style={Style.shadow}
                colors={[0, colors.darkGrey]} 
                start={{x: 0, y: 0}} 
                end={{x: 0, y: 1}}>
        </LinearGradient>
        <View style={Style.content}>
            <ChatTop 
                spotAvatar={spotAvatar}
                spotTitle={spotTitle}
                spotOwner={spotOwner}
                members={members} 
            />
            <ScrollView
                style={Style.chatContainer}
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({animated: true})}>
                {allMessages.length >= 1?
                    <FlatList 
                        data={allMessages}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    /> : loading === true ? 
                    <Loading /> : 
                    <Welcome 
                        title={spotTitle}
                        owner={spotOwner}
                        handlePressSpot={handleAddSpot}
                        handlePressQuest={handleAskQuest}
                    />
                }
            </ScrollView>
            <View style={Style.bottomContainer}>
                <ChatBottom
                    setInput={setInput}
                    input={input}
                    close={handleClose} 
                    sendMessage={sendMessage}/>
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
        backgroundImage: {
            width: '100%', 
            height: '100%', 
            position: 'absolute', 
            opacity: 0.3
        },
        shadow: {
            width: '100%', 
            height: 130, 
            position: 'absolute', 
            bottom: 0, 
            opacity: 0.4
        },
        content: {
            flex: 1,
            width: '100%',
            maxWidth: 700,
            padding: 15,
        },

        chatContainer: {
            flex: 1, 
            marginVertical: 16
        },

        bottomContainer: {
            width: "100%", 
            flexDirection: 'row'
        },

});

export default Spot;

// ercsn //
