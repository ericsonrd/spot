import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {fonts, colors} from '../assets/theme/Theme.js';

const arrowRight = require('../assets/images/spot-main-arrow-top-right.png');

const DigitalCard = (props) => {
    return (
        <View style={Style.main}>
            <Image
                style={Style.backgroundImg}
                source={props.background} />
            <LinearGradient 
                style={Style.shadowTop}
                colors={[colors.darkGrey, 0]} 
                start={{x: 0, y: 0}} 
                end={{x: 0, y: 1}}>
            </LinearGradient>
            <LinearGradient 
                style={Style.shadowBottom}
                colors={[0, colors.darkGrey]} 
                start={{x: 0, y: 0}} 
                end={{x: 0, y: 1}}>
            </LinearGradient>
            <View style={Style.content}>
                <TouchableOpacity style={Style.profileButton}>
                    <View style={Style.buttonView}>
                        <Text style={Style.buttonText}>Visit profile</Text>
                        <Image
                            style={Style.buttonArrow} 
                            source={arrowRight} />
                    </View>
                    <Text style={Style.buttonUrl}>{props.url}</Text>
                </TouchableOpacity>
                <View style={Style.userInfo}>
                    <View style={Style.userView}>
                        <Image 
                            style={Style.userAvatar}
                            source={props.avatar}/>
                        <View style={Style.userDescription}>
                            <Text style={Style.userName}>{props.userName}</Text>
                            <Text style={Style.userBio}>{props.userBio}</Text>
                        </View>    
                    </View>
                    <View style={Style.userHighlight}>
                        <Image 
                            style={Style.highlightIcon}
                            source={props.highlighIcon}/>
                        <Text style={Style.highlightText}>{props.highlightText}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
};

const Style = StyleSheet.create ({

    main: {
        width: 350, 
        aspectRatio: 2/3, 
        backgroundColor: colors.darkGrey, 
        borderRadius: 16, 
        overflow: 'hidden'
    },
        backgroundImg: {
            width: '100%', 
            height: '100%', 
            position: 'absolute', 
            opacity: 0.6
        },
        shadowTop: {
            width: '100%', 
            height: 120, 
            position: 'absolute', 
            top: 0,
            bottom: 0, 
            opacity: 0.2
        },
        shadowBottom: {
            width: '100%', 
            height: 130, 
            position: 'absolute', 
            bottom: 0, 
            opacity: 0.4
        },
        content: {
            flex: 1, 
            padding: 32, 
            justifyContent: 'space-between'
        },
            profileButton: {
                alignItems: 'flex-end',
                alignSelf: 'flex-end'
            },
                buttonView: {
                    flexDirection: 'row', 
                    justifyContent: 'flex-end'
                },
                buttonText: {
                    marginRight: 8, 
                    fontFamily: fonts.semibold, 
                    color: colors.green, 
                    fontSize: 16, 
                    letterSpacing: 0.3
                },
                buttonArrow: {
                    width: 9, 
                    height: 9
                },
                buttonUrl: {
                    fontFamily: fonts.medium, 
                    color: colors.lightGrey, 
                    fontSize: 9.5, 
                    letterSpacing: 0.3, 
                    marginRight: 18
                },
            userInfo: {
                width: '100%', 
                height: 70, 
                flexDirection: 'row', 
                alignItems: 'flex-start'
            },
                userView: {
                    flexDirection: 'row', 
                    alignItems: 'flex-end',
                    width: '55%', 
                    marginRight: 20
                },
                    userAvatar: {
                        width: 45, 
                        height: 70, 
                        borderRadius: 6, 
                        marginRight: 8
                    },
                    userDescription: {
                        width: '85%'
                    },
                    userName: {
                        fontFamily: fonts.semibold, 
                        color: colors.lightGrey, 
                        fontSize: 16, 
                        letterSpacing: 0.3, 
                        marginBottom: 4
                    },
                    userBio: {
                        fontFamily: fonts.medium, 
                        color: colors.lightGrey, 
                        fontSize: 10, 
                        letterSpacing: 0.3
                    },
                userHighlight: {
                    width: '45%'
                },
                    highlightIcon: {
                        width: 25, 
                        height: 25, 
                        marginBottom: 8
                    },
                    highlightText: {
                        fontFamily: fonts.medium, 
                        color: colors.lightGrey, 
                        fontSize: 10,
                        letterSpacing: 0.3, 
                        width: '85%'
                    },

});

export default DigitalCard;
