import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { colors, fonts } from '../assets/theme/Theme';

const addArrow = require("../assets/images/spot-main-arrow-bottom-right.png");
const cancelArrow = require("../assets/images/spot-main-arrow-bottom-left.png");
const nextDoneArrow = require("../assets/images/spot-main-arrow-top-right.png");

// Add Spot Button component //
export const AddButton = (props) => {
    return (
        <TouchableOpacity 
            style={Style.addButton}
            onPress={props.handlePress}>
                <Text style={Style.addButtonText}>New Spot</Text>
                <Image 
                    style={Style.addButtonIcon}
                    source={addArrow} />
        </TouchableOpacity> 
    )
};

// Cancel Button component //
const CancelButton = (props) => {
    return (
        <TouchableOpacity 
            style={Style.cancelButton}
            onPress={props.handlePress}>
                <Text style={Style.cancelButtonText}>Cancel</Text>
                <Image 
                    style={Style.cancelButtonIcon}
                    source={cancelArrow} />
        </TouchableOpacity>
    )
};

// Next Button component //
const NextButton = (props) => {
    return (
        <TouchableOpacity 
            style={Style.nextButton}
            onPress={props.handlePress}>
                <Image 
                    style={Style.nextButtonIcon}
                    source={nextDoneArrow} />
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
            <Image 
                style={Style.doneButtonIcon}
                source={nextDoneArrow} />
            <Text style={Style.doneButtonText}>Done</Text>
    </TouchableOpacity>
    )
};

// Add Title component with Input and Cancel/Next Buttons //
export const SpotTitle = (props) => {
    return (
        <View style={Style.addMain}>
            <CancelButton
                handlePress={props.handleCancel} />
            <TextInput 
                style={Style.titleInput} 
                placeholder="Add a title..."
                onChangeText={props.changeText}
                value={props.value}/>
            
            <NextButton 
                handlePress={props.handleNext} />
        </View>
    )
};

// Add Description component with Input and Cancel/Next Buttons //
export const SpotDescription = (props) => {
    return (
        <View style={Style.addMain}>
            <CancelButton
                handlePress={props.handleCancel} />
            <TextInput 
                style={Style.descriptionInput} 
                placeholder="Add a description..."
                onChangeText={props.changeText}
                value={props.value}/>                
            
            <NextButton 
                handlePress={props.handleNext} />
        </View>
    )
};

// Add Topic component with Input and Cancel/Next Buttons //
export const SpotTopic = (props) => {
    return (
        <View style={Style.addMain}>
            <CancelButton
                handlePress={props.handleCancel} />
            <TextInput 
                style={Style.topicInput} 
                placeholder="Add a topic..."
                onChangeText={props.changeText}
                value={props.value}/>
            <DoneButton 
                handlePress={props.handleDone} />
        </View>
    )
};

// Styles //
const Style = StyleSheet.create({

        addButton: {
            justifyContent: 'space-between',
            width: 55, 
            height: 55, 
            backgroundColor: colors.yellow, 
            padding: 6
        },
            addButtonText: {
                fontFamily: fonts.medium,
                color: colors.blue,
                fontSize: 13, 
                lineHeight: 13,
                letterSpacing: 0.3
            },
            addButtonIcon: {
                width: 16,
                height: 16,
                resizeMode: 'contain',
                alignSelf: 'flex-end',
            }, 
            addMain: {
                position: 'absolute',
                flex: 1,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'flex-end',
                height: 55, 
                backgroundColor: colors.metalBlue
            },
                cancelButton: {
                    justifyContent: 'space-between', 
                    width: 55, 
                    height: 55, 
                    alignItems: 'flex-start',
                    backgroundColor: colors.zapote,
                    padding: 6
                },
                    cancelButtonText: {
                        fontFamily: fonts.medium,
                        color: colors.blue,
                        fontSize: 13, 
                        lineHeight: 13,
                        alignSelf: 'flex-end',
                        letterSpacing: 0.3
                    },
                    cancelButtonIcon: {
                        width: 16,
                        height: 16,
                        resizeMode: 'contain',
                        alignSelf: 'flex-start',
                    },
                    
                titleInput: {
                    width: '100%',
                    height: '100%',
                    padding: 14,
                    fontSize: 24,  
                    fontFamily: fonts.semibold,
                    color: colors.darkGrey
                },
                descriptionInput: {
                    width: '100%',
                    height: '100%',
                    padding: 14, 
                    fontSize: 18,
                    fontFamily: fonts.medium,
                    color: colors.darkGrey 
                },
                topicInput: {
                    width: '100%',
                    height: '100%',
                    padding: 14, 
                    fontSize: 18, 
                    fontFamily: fonts.medium,
                    color: colors.darkGrey
                },
            
                nextButton: {
                    justifyContent: 'space-between',
                    width: 55, 
                    height: 55, 
                    padding: 6, 
                    alignItems: 'flex-end', 
                    backgroundColor: colors.bariumGrey
                },
                    nextButtonIcon: { 
                        width: 16,
                        height: 16,
                        resizeMode: 'contain',
                    },
                    nextButtonText: {
                        fontFamily: fonts.medium,
                        color: colors.blue,
                        fontSize: 13, 
                        lineHeight: 13,
                        alignSelf: 'flex-start',
                        letterSpacing: 0.3
                    },

                doneButton: {
                    justifyContent: 'space-between',
                    width: 55, 
                    height: 55, 
                    padding: 6, 
                    alignItems: 'flex-end', 
                    backgroundColor: colors.green
                },
                    doneButtonIcon: { 
                        width: 16,
                        height: 16,
                        resizeMode: 'contain',
                    },
                    doneButtonText: {
                        fontFamily: fonts.medium,
                        color: colors.blue,
                        fontSize: 13, 
                        lineHeight: 13,
                        alignSelf: 'flex-start',
                        letterSpacing: 0.3
                        }

})
