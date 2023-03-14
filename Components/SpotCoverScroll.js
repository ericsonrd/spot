import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {fonts, colors} from '../assets/theme/Theme.js'

const SpotCoverScroll = (props) => {
    return (
        <View style={Style.main}>
            <View style={Style.content}>
                <View style={Style.top}>
                    <Image 
                        style={Style.spotAvatar}
                        source={props.spotAvatar} 
                    />
                    <View style={Style.spotHeader}>
                        <Text style={Style.spotTitle}>{props.spotTitle}</Text>
                        <Text style={Style.spotOwner}>by {props.spotOwner}</Text>
                    </View>
                </View>
                <View style={Style.spotBlock}>
                    <Text style={Style.descriptionText}>{props.spotDescription}</Text>
                    <View style={Style.descriptionBullets}>
                        <View style={Style.bullet} />
                        <Text style={Style.bulletText}>{props.descriptionBullet1}</Text>
                    </View>
                    <View style={Style.descriptionBullets}>
                        <View style={Style.bullet} />
                        <Text style={Style.bulletText}>{props.descriptionBullet2}</Text>
                    </View>
                    <View style={Style.descriptionBullets}>
                        <View style={Style.bullet} />
                        <Text style={Style.bulletText}>{props.descriptionBullet3}</Text>
                    </View>
                </View>
                <View style={Style.spotBlock}>
                    <Text style={Style.rules}>Rules</Text>
                    <View style={Style.descriptionBullets}>
                        <Image 
                            style={Style.iconImg}
                            source={props.icon}
                        />
                        <Text style={Style.ruleBulletText}>{props.ruleBullet1}</Text>
                    </View>
                    <View style={Style.descriptionBullets}>
                        <Image 
                            style={Style.iconImg}
                            source={props.icon}
                        />
                        <Text style={Style.bulletText}>{props.ruleBullet1}</Text>
                    </View>
                    <View style={Style.descriptionBullets}>
                        <Image 
                            style={Style.iconImg}
                            source={props.icon}
                        />
                        <Text style={Style.bulletText}>{props.ruleBullet1}</Text>
                    </View>
                    <View style={Style.descriptionBullets}>
                        <Image 
                            style={Style.iconImg}
                            source={props.icon}
                        />
                        <Text style={Style.bulletText}>{props.ruleBullet1}</Text>
                    </View>
                    <View style={Style.descriptionBullets}>
                        <Image 
                            style={Style.iconImg}
                            source={props.icon}
                        />
                        <Text style={Style.bulletText}>{props.ruleBullet1}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const Style = StyleSheet.create ({

    main: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 20
    },
        content: {
            flex: 1,
            width: '100%',
            maxWidth: 700
        },
            top: {
                flexDirection: 'row', 
                width: 300, 
                height: 110, 
                marginTop: 110, 
                marginBottom: 48
            },
                spotAvatar: {
                    width: 70, 
                    height: 110, 
                    backgroundColor: colors.zapote, 
                    borderRadius: 6, 
                    marginRight: 12
                },
                spotHeader: {
                    flex: 1, 
                    justifyContent: 'flex-end'
                },
                    spotTitle: {
                        color: 'white', 
                        fontFamily: fonts.semibold, 
                        fontSize: 24, 
                        lineHeight: 26, 
                        letterSpacing: 0.3, 
                        marginBottom: 6
                    },
                    spotOwner: {
                        color: 'white', 
                        fontFamily: fonts.medium, 
                        fontSize: 12, 
                        lineHeight: 16, 
                        letterSpacing: 0.3
                    },
            spotBlock: {
                width: '100%', 
                maxWidth: 450, 
                marginBottom: 40
            },
                descriptionText: {
                    fontFamily: fonts.medium, 
                    fontSize: 16, 
                    color: colors.lightGrey, 
                    letterSpacing: 0.3, 
                    lineHeight: 24, 
                    marginBottom: 16
                },
                descriptionBullets: {
                    width: '90%', 
                    flexDirection: 'row', 
                    alignItems: 'flex-start', 
                    marginBottom: 8
                },
                    bullet: {
                        width: 6, 
                        height: 6, 
                        borderRadius: 2, 
                        backgroundColor: colors.green, 
                        margin: 24
                    },
                    bulletText: {
                        fontFamily: fonts.medium, 
                        fontSize: 16, 
                        color: colors.lightGrey, 
                        letterSpacing: 0.3, 
                        lineHeight: 24, 
                        marginTop: 16
                    },
                rules: {
                    fontFamily: fonts.semibold, 
                    fontSize: 20, 
                    color: colors.bariumGrey,
                    letterSpacing: 0.3, 
                    marginBottom: 16 
                },
                    iconImg: {
                        width: 16, 
                        height: 16, 
                        borderRadius: 2, 
                        backgroundColor: 'black', 
                        margin: 18
                    },
                    ruleBulletText: {
                        fontFamily: fonts.medium, 
                        fontSize: 16, 
                        color: colors.lightGrey, 
                        letterSpacing: 0.3, 
                        lineHeight: 24, 
                        marginTop: 14
                    },

})

export default SpotCoverScroll;
