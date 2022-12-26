import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import {fonts, colors} from '../assets/theme/Theme.js';

const arrowMask = require("../assets/images/spot-arrow-mask.png");
const gradient1 = [colors.green, colors.yellow, colors.peptoPink, colors.zapote, colors.green];
const gradient2 = [colors.yellow, colors.zapote, colors.green, colors.peptoPink, colors.yellow];
const gradient3 = [colors.peptoPink, colors.green, colors.zapote, colors.yellow, colors.peptoPink];
const gradient4 = [colors.zapote, colors.peptoPink, colors.yellow, colors.green, colors.zapote];

const randomGradient = () => {
    let num = Math.floor(Math.random() * 4);
    if (num === 0) {
        return gradient1;
    } else if (num === 1) {
        return gradient2;
    } else if (num === 2) {
        return gradient3;
    } else if (num === 3) {
        return gradient4;
    };
};

const Spot = (props) => {
    const [colorAnim] = useState(new Animated.Value(0));
    const [gradient] = useState(randomGradient());

    useEffect(() => {
        const startAnimation = () => {
          Animated.sequence([
            Animated.timing(colorAnim, {
              toValue: 1,
              duration: 10000,
              useNativeDriver: false
            }),
            Animated.timing(colorAnim, {
              toValue: 2,
              duration: 10000,
              useNativeDriver: false
            }),
            Animated.timing(colorAnim, {
              toValue: 3,
              duration: 10000,
              useNativeDriver: false
            }),
            Animated.timing(colorAnim, {
              toValue: 4,
              duration: 10000,
              useNativeDriver: false
            }),
            Animated.timing(colorAnim, {
              toValue: 0,
              duration: 0,
              useNativeDriver: false
            }),
          ]).start(() => startAnimation());
        }; startAnimation();
      }, []);

        const backgroundColor = colorAnim.interpolate({
                inputRange: [0, 1, 2, 3, 4],
                outputRange: gradient
            });

    return (
    <TouchableOpacity 
        style={Style.spotMain}
        onPress={props.destination}>
        <View style={Style.spotDescription}>
            <Text style={Style.spotTitle}>{props.title}</Text>
            <Text style={Style.spotSub}>{props.subtitle}</Text>
            <View style={Style.topicMain}>
                <Text style={Style.topicText}>{props.topic}</Text>
            </View>
        </View>
        <Animated.View style={[Style.arrowView, {backgroundColor}]}>
            <Image 
                style={Style.spotArrow}
                source={arrowMask} />
        </Animated.View>
    </TouchableOpacity>
    )
};

// Styles //
const Style = StyleSheet.create ({

    // Spot Component //
    spotMain: {
        width: '100%', 
        padding: 16,
        backgroundColor: colors.metalBlue,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6
    },
        spotDescription: {
            width: '84%',
            alignItems: "left",
        },
            spotTitle: {
                color: colors.darkGrey, 
                fontFamily: fonts.semibold,
                fontSize: 26, 
                lineHeight: 28,
                marginBottom: 10
            },
            spotSub: {
                color: colors.decayingBlue,
                fontFamily: fonts.medium,
                fontSize: 14, 
                letterSpacing: 0.3,
                lineHeight: 16, 
                marginBottom: 14
            },
            arrowView: {
                width: 22, 
                height: 22,
            },
            spotArrow: {
                width: 22,
                height: 22,
                resizeMode: 'contain',
            },

            topicMain: {
                alignSelf: 'flex-start', 
                backgroundColor: colors.darkGrey, 
                padding: 6
            },
                topicText: {
                    fontFamily: fonts.medium,
                    fontSize: 11, 
                    letterSpacing: 0.3,
                    color: colors.metalBlue
                },

})

export default Spot;
