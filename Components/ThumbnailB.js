import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {fonts, colors} from '../assets/theme/Theme.js';

const ThumbnailB = (props) => {
    return (
        <TouchableOpacity style={Style.main}>
            <View style={Style.content}>
                <Image
                    style={Style.thumbImage}
                    resizeMode={'cover'}
                    source={props.spotImage}
                />
                <LinearGradient 
                    style={Style.shadow}
                    colors={[0, colors.darkGrey]} 
                    start={{x: 0, y: 0}} 
                    end={{x: 0, y: 1}}>
                </LinearGradient>
                <View style={Style.info}>
                    <Text style={Style.thumbTitle}>{props.thumbTitle}</Text>
                    <View style={Style.bottomInfo}>
                        <View style={Style.adminView}>
                            <Image
                                style={Style.adminPic}
                                resizeMode={'cover'}
                                source={props.adminAvatar}
                            />
                            <View>
                                <Text style={Style.adminText}>by <Text style={Style.adminName}>{props.adminName}</Text></Text>
                                <Text style={Style.membersText}>{props.members} members</Text>
                            </View>
                        </View>
                            <Text style={Style.timestampText}>{props.timestamp}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const Style = StyleSheet.create ({
    
    main: {
        width: '99%', 
        aspectRatio: 2/3, 
        borderRadius: 10, 
        backgroundColor: colors.metalBlue,
        overflow: 'hidden',
        marginTop: '57.75%',
        marginBottom: 2,
        alignSelf: 'center'
    },
        content: {
            flex: 1
            },
            thumbImage: {
                width: '100%', 
                height: '100%', 
                opacity: 0.70
            },
            shadow: {
                width: '100%', 
                height: '55%', 
                position: 'absolute', 
                bottom: 0, 
                opacity: 0.4
            },

            info: {
                position: 'absolute', 
                width: '100%', 
                padding: 12, 
                bottom: 0
            },
                thumbTitle: {
                    color: colors.lightGrey, 
                    fontFamily: fonts.semibold, 
                    fontSize: 20, 
                    lineHeight: 22, 
                    letterSpacing: 0.3, 
                    marginBottom: 6
                },
                bottomInfo: {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    marginBottom: 4
                },
                    adminView: {
                        height: 35, 
                        flexDirection: 'row', 
                        alignItems: 'flex-end' 
                    },
                        adminPic: {
                            width: 20, 
                            height: 30, 
                            marginRight: 4
                        },
                        adminText: {
                            color: colors.bariumGrey, 
                            fontFamily: fonts.semibold, 
                            fontSize: 12, 
                            letterSpacing: 0.3 
                        },
                            adminName: {
                                fontFamily: fonts.semibold
                            },
                        membersText: {
                            color: colors.bariumGrey, 
                            fontFamily: fonts.medium, 
                            fontSize: 11, 
                            letterSpacing: 0.3
                        },

                    timestampText: {
                        color: colors.bariumGrey, 
                        fontFamily: fonts.medium, 
                        fontSize: 11, 
                        letterSpacing: 0.3
                    }

});

export default ThumbnailB;
