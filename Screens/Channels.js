import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Spot from '../Components/Spot.js';
import {AddButton, SpotTitle, SpotDescription, SpotTopic} from '../Components/AddSpot.js'

// Backend Spots query endpoint //
const url = "https://x8ki-letl-twmt.n7.xano.io/api:i1afkiPC";
const chatrooms = "/chatrooms";

// Channel list on Channel screen //
const Channels = ({route, navigation}) => {
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
            topic={item.topic}
            destination={() => navigation.navigate("Chat", {id: item.id})}
        />
    );

    // Rendering Spot List Screen //
    return (
        <View style={Style.main}>
            <View style={Style.topView}>
                <Text style={Style.title}>Spots</Text>
                <TouchableOpacity 
                    style={Style.logoutButton}
                    onPress={handleLogout}>
                        <Text style={Style.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
            {spotList !== null? 
                <FlatList
                    style={Style.flatList}
                    data={spotList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}/> : null}
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
    )
};


// Styles //
const Style = StyleSheet.create ({

    addMain: {
        width: '100%', 
        height: 65, 
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    errorMessage: {
        fontSize: 11, 
        color: 'red', 
        fontStyle: "italic", 
        marginBottom: 4
    },
    addSpotMain: {
        flexDirection: 'row', 
        width: '100%', 
        height: 55,
    },

    main: {
        flex: 1, 
        backgroundColor: 'black', 
        width: '100%', 
        height: '100%', 
        padding: 16
        },
        topView: {
            flexDirection: 'row', 
            justifyContent: 'space-between', 
            alignItems: 'center'
        },
            title: {
                color: 'white', 
                fontSize: 48, 
                fontWeight: 200,
                marginBottom: 16
            },
            logoutButton: {
                backgroundColor: 'grey', 
                padding: 8, 
                height: 35, 
                marginBottom: 6
            },
                logoutText: {
                    color: 'white'
                },
        flatList: {
            marginBottom: 12
        },

})

export default Channels;
