import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, FlatList, ScrollView, TouchableOpacity, Animated} from 'react-native';
import Swiper from 'react-native-web-swiper';
import Menu from '../Components/Menu.js';
import HomeTabs from '../Components/HomeTabs.js';
import {AddButton, SpotTitle, SpotDescription, SpotTopic} from '../Components/AddSpot.js';
import {fonts, colors} from '../assets/theme/Theme.js';
import Mosaic from '../Components/Mosaic.js';

// Backend Spots query endpoint //
const url = "https://x8ki-letl-twmt.n7.xano.io/api:i1afkiPC";
const spot = "/spot";

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
    // const {toSpot} = route.params;

    // Logic to navigate directly to Spot's spot when called from chat //
    // if (toSpot === true) {
    //     navigation.navigate("Chat", {id: 1})
    // };

    // Fetching Spot List once on first render //
    // useEffect(() => {
    //     fetchSpots();
    // }, []);

    // Backend call to fetch Spots' list //
    const fetchSpots = async () => {
        const endpoint = `${url}${spot}`;
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
            const endpoint = `${url}${spot}`;
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

    // Rendering Spot List Screen //
    return (
        <View style={Style.main}>
            <View style={Style.content}>
                <View style={Style.topView}>  
                    <HomeTabs />                 
                </View>
                <Swiper 
                    controlsEnabled={false}>
                    <View style={Style.swiperTab}>
                        <View style={Style.discoverDotContainer}>
                            <View style={Style.dot} />
                        </View>
                        <Mosaic /> 
                    </View>
                    <View style={Style.swiperTab}>
                        <View style={Style.joinedDotContainer}>
                            <View style={Style.dot} />
                        </View>
                        <Mosaic /> 
                    </View>
                    <View style={Style.swiperTab}>
                        <View style={Style.chatsDotContainer}>
                            <View style={Style.dot} />
                        </View>
                        <Mosaic />  
                    </View>
                </Swiper>
                <Menu />
                {/* <View style={Style.addMain}>
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
                </View> */}
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
        minHeight: 630,
        justifyContent: 'center', 
        alignItems: 'center'
    },

        content: {
            flex: 1,
            width: '100%',
            maxWidth: 700,
            padding: 35,
            paddingHorizontal: 15
        },
            topView: {
                width: '100%',
                maxWidth: 700
            },
            swiperTab: {
                flex: 1, 
                borderRadius: 8
            },
                discoverDotContainer: {
                    width: '54%', 
                    maxWidth: 357, 
                    alignItems: 'flex-start', 
                    alignSelf: 'center', 
                    marginBottom: 14
                },
                joinedDotContainer: {
                    width: '5%', 
                    maxWidth: 15, 
                    alignItems: 'center', 
                    alignSelf: 'center', 
                    marginBottom: 14
                },
                chatsDotContainer: {
                    width: '54%', 
                    maxWidth: 357, 
                    alignItems: 'flex-end', 
                    alignSelf: 'center', 
                    marginBottom: 14
                },
                    dot: {
                        width: 6, 
                        height: 6, 
                        backgroundColor: colors.green, 
                        borderRadius: 2
                    },

            // addMain: {
            //     width: '100%', 
            //     height: 65, 
            //     minHeight: 70,
            //     alignItems: 'center',
            //     justifyContent: 'flex-end'
            // },
            //     errorMessage: {
            //         fontFamily: fonts.medium,
            //         color: colors.zapote,
            //         fontSize: 11, 
            //         letterSpacing: 0.3,
            //         marginBottom: 4
            //     },
            //     addSpotMain: {
            //         flexDirection: 'row', 
            //         width: '100%', 
            //         height: 55,
            //     },

})

export default Spots;
