import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

// Add Spot Button component //
export const AddButton = (props) => {
    return (
        <TouchableOpacity 
            style={Style.addButton}
            onPress={props.handlePress}>
                <Text style={Style.addButtonIcon}>+</Text>
                <Text style={Style.addButtonText}>New Spot</Text>
        </TouchableOpacity> 
    )
};

// Cancel Button component //
const CancelButton = (props) => {
    return (
        <TouchableOpacity 
            style={Style.cancelButton}
            onPress={props.handlePress}>
                <Text style={Style.cancelButtonIcon}>x</Text>
                <Text style={Style.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
    )
};

// Next Button component //
const NextButton = (props) => {
    return (
        <TouchableOpacity 
            style={Style.nextButton}
            onPress={props.handlePress}>
                <Text style={Style.nextButtonIcon}>⌍</Text>
                <Text style={Style.nextButtonText}>Next</Text>
        </TouchableOpacity>
    )
};

// Done Button component //
const DoneButton = (props) => {
    return (
    <TouchableOpacity 
        style={Style.doneButton}
        onPress={props.handlePress}>
            <Text style={Style.doneButtonIcon}>✓</Text>
            <Text style={Style.doneButtonText}>Done</Text>
    </TouchableOpacity>
    )
};

// Add Title component with Input and Cancel/Next Buttons //
export const SpotTitle = (props) => {
    return (
        <View style={Style.addMain}>
            <TextInput 
                style={Style.titleInput} 
                placeholder="Add a title..."
                onChangeText={props.changeText}
                value={props.value}/>
            <CancelButton
                handlePress={props.handleCancel} />
            <NextButton 
                handlePress={props.handleNext} />
        </View>
    )
};

// Add Description component with Input and Cancel/Next Buttons //
export const SpotDescription = (props) => {
    return (
        <View style={Style.addMain}>
            <TextInput 
                style={Style.descriptionInput} 
                placeholder="Add a description..."
                onChangeText={props.changeText}
                value={props.value}/>                
            <CancelButton
                handlePress={props.handleCancel} />
            <NextButton 
                handlePress={props.handleNext} />
        </View>
    )
};

// Add Topic component with Input and Cancel/Next Buttons //
export const SpotTopic = (props) => {
    return (
        <View style={Style.addMain}>
            <TextInput 
                style={Style.topicInput} 
                placeholder="Add a topic..."
                onChangeText={props.changeText}
                value={props.value}/>
            <CancelButton
                handlePress={props.handleCancel} />
            <DoneButton 
                handlePress={props.handleDone} />
        </View>
    )
};


// Styles //
const Style = StyleSheet.create({

        addButton: {
            justifyContent: 'center', 
            alignItems: 'center', 
            width: 55, 
            height: 55, 
            backgroundColor: "grey", 
            padding: 4,
            marginRight: 2
        },
            addButtonIcon: {
                fontSize: 38, 
                lineHeight: 34,
                fontWeight: 300,
                marginTop: 8
            }, 
            addButtonText: {
                fontSize: 9, 
                marginBottom: 14, 
                fontWeight: 500
            },
            addMain: {
                flex: 1,
                flexDirection: 'row',
                alignContent: 'stretch',
                height: 55, 
                backgroundColor: 'grey'
            },
                titleInput: {
                    width: '100%',
                    padding: 14, 
                    fontSize: 26, 
                    fontWeight: 300
                },
                descriptionInput: {
                    width: '100%',
                    padding: 14, 
                    fontSize: 18, 
                    fontWeight: 300
                },
                topicInput: {
                    width: '100%',
                    padding: 14, 
                    fontSize: 16, 
                    fontWeight: 300
                },

            cancelButton: {
                width: 55, 
                height: 55, 
                justifyContent: 'center', 
                alignItems: 'center',
                backgroundColor: '#505050'
            },
                cancelButtonIcon: {
                    fontSize: 28, 
                    fontWeight: 400, 
                    color: 'white', 
                    lineHeight: 30, 
                    marginBotton: 46
                },
                cancelButtonText: {
                    fontSize: 9, 
                    fontWeight: 700, 
                    color: 'white', 
                    lineHeight: 12
                },
            
            nextButton: {
                width: 55, 
                height: 55, 
                padding: 2, 
                alignItems: 'flex-end', 
                backgroundColor: 'lightgrey'
            },
                nextButtonIcon: { 
                    fontSize: 40, 
                    lineHeight: 34, 
                    fontWeight: 600, 
                    marginRight: 4
                },
                nextButtonText: {
                    fontSize: 9, 
                    fontWeight: 700,
                    marginRight: 14,
                },

            doneButton: {
                width: 55, 
                height: 55, 
                padding: 2, 
                alignItems: 'center', 
                justifyContent: 'center',
                backgroundColor: 'lightgrey'
            },
                doneButtonIcon: { 
                    fontSize: 24, 
                    lineHeight: 26, 
                    fontWeight: 700,
                    marginTop: 2 
                },
                doneButtonText: {
                    fontSize: 10, 
                    fontWeight: 600
                    }

})
