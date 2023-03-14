import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, FlatList, ScrollView, TouchableOpacity, Animated} from 'react-native';
import Spot from '../Components/Spot.js';
import {AddButton, SpotTitle, SpotDescription, SpotTopic} from '../Components/AddSpot.js';
import {fonts, colors, gradients} from '../assets/theme/Theme.js';

const logoutIcon = require("../assets/images/spot-main-arrow-top-left.png");
const spotIcon = require("../assets/images/spot-icon.png");

// Backend Spots query endpoint //
const url = "https://x8ki-letl-twmt.n7.xano.io/api:i1afkiPC";
const chatrooms = "/chatrooms";

// Channel list on Channel screen //
const Spots = ({route, navigation}) => {
    const [spotList, setSpotList] = useState(null);
    const [inputErrorMsg, setInputErrorMsg] = useState(null);
    const [fetchErrorMsg, setFetchErrorMsg] = useState(null);
    const [showTitle, setShowTitle] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [showTopic, setShowTopic] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [topic, setTopic] = useState("");
    const {toSpot} = route.params;


    // Logic to navigate directly to Spot's spot when called from chat //
    if (toSpot === true) {
        navigation.navigate("Chat", {id: 1})
    };

    // Fetching Spot List once on first render //
    useEffect(() => {
        fetchSpots();
    }, []);

    // Backend call to fetch Spots' list //
    const fetchSpots = async () => {
        const endpoint = `${url}${chatrooms}`;
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
                renderResponseSpotList(jsonResponse);
            } else {
                const errorMessage = await response.json();
                setFetchErrorMsg(errorMessage.message)
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    // Backend call to send input data and create new Spot//
    const addSpot = async () => {
        if (title && description && topic !== "") {
            const endpoint = `${url}${chatrooms}`;
            const data = JSON.stringify({"title": title, "description": description, "topic": topic});
            try {
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: data
                })
                if (response.ok) {
                    const jsonResponse = await response.json();
                    renderResponseAddSpot(jsonResponse);
                } else {
                    console.log("There's been an error");
                };
            }
            catch (error) {
                console.log(error);
            } 
        }
    };


    // Handling Backend responses //
    const renderResponseSpotList = (response) => {
        setSpotList(response.items);
    };

    const renderResponseAddSpot = (response) => {
        const newSpotId = response.chatroom.id;
        fetchSpots();
        navigation.navigate("Chat", {id: newSpotId});
    };


    // Managing Spot Adding visibility //
    const handleShowTitle = () => {
        setShowTitle(true);
    };

    const handleShowDescription = () => {
        if (title !== "") {
            setShowTitle(false);
            setShowDescription(true);
            setInputErrorMsg("");
        } else {
            setInputErrorMsg("All fields must be completed")
        }
    };
        
    const handleShowTopic = () => {
        if (description !== "") {
            setShowDescription(false);
            setShowTopic(true);
            setInputErrorMsg("");
        } else {
            setInputErrorMsg("All fields must be completed")
        }
    };

    // Managing Cancel buttons on input fields //
    const handleCancelTitle = () => {
        setShowTitle(false);
        setInputErrorMsg("");
    };

    const handleCancelDescription = () => {
        setShowDescription(false);
        setInputErrorMsg("");
    };

    const handleCancelTopic = () => {
        setShowTopic(false);
        setInputErrorMsg("");
    };

    // Final step sending data to backend //   
    const newSpotDone = () => {
        if (topic !== "") {
            setShowTopic(false);
            setInputErrorMsg("");
            addSpot();
            setTitle("");
            setDescription("");
            setTopic("")
        } else {
            setInputErrorMsg("All fields must be completed")
        }
    };

    // Handling user Logging out //
    const handleLogout = () => {
        token = "";
        navigation.navigate("Login");
    };

    // Flatlist RenderItem element //
    const renderItem = ({item}) => (
        <Spot
            title={item.title}
            subtitle={item.description}
            topic={`${item.topic[0]}, ${item.topic[1]}, ${item.topic[2]}`}
            destination={() => navigation.navigate("Chat", {id: item.id})}
        />
    )

    // Rendering Spot List Screen //
    return (
        <View style={Style.main}>
            <View style={Style.content}>
                <View style={Style.topView}>
                    <TouchableOpacity 
                        style={Style.logoutButton}
                        onPress={handleLogout}>
                            <Image 
                                style={Style.logoutIcon}
                                source={logoutIcon} />
                            <Text style={Style.logoutText}>Logout</Text>
                    </TouchableOpacity>                    
                    <Image 
                        style={Style.spotIcon}
                        source={spotIcon} />
                </View>
                <View style={Style.spotsView}>
                    {spotList !== null? 
                        <FlatList
                            style={Style.flatList}
                            data={spotList}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}/> : null}
                </View>
                <View style={Style.addMain}>
                    <Text style={Style.errorMessage}>{inputErrorMsg}</Text>
                    <View style={Style.addSpotMain}>
                        <AddButton 
                            handlePress={handleShowTitle}/>
                        {showTitle === true ? 
                            <SpotTitle
                                handleCancel={handleCancelTitle}
                                handleNext={handleShowDescription} 
                                changeText={setTitle}
                                value={title} /> : null}
                        {showDescription ? 
                            <SpotDescription 
                                handleCancel={handleCancelDescription}
                                handleNext={handleShowTopic}
                                changeText={setDescription}
                                value={description} /> : null}
                        {showTopic ? 
                            <SpotTopic 
                                handleCancel={handleCancelTopic} 
                                handleDone={newSpotDone}
                                changeText={setTopic}
                                value={topic} /> : null}
                    </View>
                </View>
            </View>
        </View>
    )
};

// Styles //
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
            topView: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                width: '100%',
                maxWidth: 700,
                minHeight: 50,
                marginBottom: 12,
            },
                logoutButton: {
                    justifyContent: 'space-between',
                    backgroundColor: colors.zapote, 
                    padding: 6, 
                    width: 50,
                    height: 50, 
                },
                    logoutIcon: {
                        width: 14, 
                        height: 14,
                        resizeMode: 'contain',
                    },
                    logoutText: {
                        fontFamily: fonts.medium,
                        fontSize: 12,
                        color: colors.blue
                    },
                spotIcon: {
                    width: 48,
                    height: 48
                },

            spotsView: {
                flex: 10,
                marginBottom: 12
            },
                flatList: {
                },
                spotItem: {
                    marginBottom: 4
                },

            addMain: {
                flex: 1,
                width: '100%', 
                height: 65, 
                minHeight: 70,
                alignItems: 'center',
                justifyContent: 'flex-end'
            },
                errorMessage: {
                    fontFamily: fonts.medium,
                    color: colors.zapote,
                    fontSize: 11, 
                    letterSpacing: 0.3,
                    marginBottom: 4
                },
                addSpotMain: {
                    flexDirection: 'row', 
                    width: '100%', 
                    height: 55,
                },

})

export default Spots;
