import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Swiper from 'react-native-web-swiper';
import {fonts, colors} from '../assets/theme/Theme.js';

const dot = ({isActive}) => {
    if (isActive) {
        return <View style={Style.dotActive} />;
    } else {
        return <View style={Style.dotInactive} />
  }
};

const UserScroll = (props) => {
    return (
        <View style={Style.main}>
            <View style={Style.content}>
                <Text style={Style.name}>{props.userName}</Text>
                <Text style={Style.bio}>{props.userBio}</Text>
                <Swiper
                    controlsProps={{
                        prevTitle: null,
                        nextTitle: null,
                        DotComponent: dot
                    }}>
                    <View>
                        <Text style={Style.itemsTitle}>Highlights</Text>
                        <View style={Style.highlightView}>
                            <View style={Style.highlightItem}>
                                <Image
                                    style={Style.highlightIcon}
                                    source={props.icon} />
                                <Text style={Style.highlightText}>{props.highlightText1}</Text>
                            </View>
                            <View style={Style.highlightItem}>
                                <Image
                                    style={Style.highlightIcon}
                                    source={props.icon} />
                                <Text style={Style.highlightText}>{props.highlightText2}</Text>
                            </View>
                            <View style={Style.highlightItem}>
                                <Image
                                    style={Style.highlightIcon}
                                    source={props.icon} />
                                <Text style={Style.highlightText}>{props.highlightText3}</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={Style.itemsTitle}>Spots</Text>
                        <View style={Style.spotsView}>
                            <TouchableOpacity style={Style.spotItem}>
                                <Image
                                    style={Style.spotAvatar}
                                    source={props.icon} />
                                <Text style={Style.spotText}>{props.spotTitle}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Style.spotItem}>
                                <Image
                                    style={Style.spotAvatar}
                                    source={props.icon} />
                                <Text style={Style.spotText}>{props.spotTitle}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={Style.itemsTitle}>About</Text>
                        <Text style={Style.aboutText}>{props.aboutText}</Text>
                    </View>
                </Swiper>
             </View>
        </View>
    );
};

const Style = StyleSheet.create ({

    main: {
        width: '100%',
        height: 260,
        alignSelf: 'center',
        maxWidth: 700,
    },
        content: {
            flex: 1,
            marginBottom: 10
        },
            name: {
                fontFamily: fonts.semibold, 
                fontSize: 45, 
                lineHeight: 40, 
                color: colors.lightGrey, 
                letterSpacing: 0.3, 
                marginBottom: 12
            },
            bio: {
                fontFamily: fonts.medium, 
                fontSize: 14, 
                color: colors.bariumGrey,
                letterSpacing: 0.3, 
                marginBottom: 32
            },
            itemsTitle: {
                fontFamily: fonts.semibold, 
                fontSize: 20, 
                color: colors.bariumGrey,
                marginBottom: 16
            },
            highlightView: {
                flexDirection: 'row', 
                justifyContent: 'flex-start'
            },
                highlightItem: {
                    width: '30%',
                    marginRight: '5%'
                },
                    highlightIcon: {
                        width: 33,
                        height: 33, 
                        marginBottom: 6
                    },
                    highlightText: {
                        fontFamily: fonts.medium, 
                        fontSize: 11, 
                        letterSpacing: 0.3, 
                        color: colors.bariumGrey
                    },
                spotsView: {
                    flexDirection: 'row', 
                    justifyContent: 'space-between'
                },
                    spotItem: {
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '40%',
                    },
                        spotAvatar: {
                            width: 45,
                            height: 60,
                            marginRight: 8,
                            backgroundColor: colors.zapote,
                            borderRadius: 4
                        },
                        spotText: {
                            fontFamily: fonts.semibold, 
                            fontSize: 14, 
                            letterSpacing: 0.3, 
                            color: colors.bariumGrey
                        },
                aboutText: {
                    fontFamily: fonts.medium, 
                    fontSize: 14, 
                    lineHeight: 22,
                    color: colors.lightGrey,
                    letterSpacing: 0.3, 
                },

            dotActive: {
                width: 6, 
                height: 6,
                marginHorizontal: 4,
                backgroundColor: colors.green,
                borderRadius: 2
            },
            dotInactive: {
                width: 4, 
                height: 4,
                marginHorizontal: 4,
                backgroundColor: colors.metalBlue, 
                borderRadius: 2
            }

});

export default UserScroll;
