import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {colors} from '../assets/theme/Theme.js';
import {LinearGradient} from 'expo-linear-gradient';
import UserBottom from '../Components/userBottom.js';
import UserScroll from '../Components/userScroll.js';

const background = require('../assets/images/anStoneB.jpg');
const icon = require('../assets/images/spot-icon.png');

const Test = () => {
    return (
        <View style={{flex: 1, backgroundColor: colors.darkGrey}}>
            <Image 
                style={Style.backgroundImage}
                source={background}/>
            <LinearGradient 
                    style={Style.shadow}
                    colors={[0, colors.darkGrey]} 
                    start={{x: 0, y: 0}} 
                    end={{x: 0, y: 1}}>
            </LinearGradient>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <View style={{width: '100%', paddingHorizontal: 20, alignSelf: 'flex-end'}}>
                    <UserScroll
                        icon={icon} 
                        userName={"Angie Stone"}
                        userBio={"Digital Marketer at Stone Marketing Agency"}
                        highlightText1={"Lorem Ipsum und Dolor"}
                        highlightText2={"Lorem Ipsum und veritas at nominas Dolor estias"}
                        highlightText3={"Lorem Ipsum est Dolor Consecteur"}
                        spotTitle={"Lorem Ipsum Dolor sit Amet"}
                        aboutText={"In this Shopify Conversion & Growth Spot, we'll be sharing effective, professional knowledge about Sales, Marketing, Design and Online Commerce."} />
                </View>
                <View style={{width: '100%', paddingHorizontal: 20, bottom: 0}}>
                    <UserBottom />
                </View>
            </View>
        </View>
    )
};

const Style = StyleSheet.create ({

    backgroundImage: {
        width: '100%', 
        height: '100%', 
        opacity: 0.5,
    },
    shadow: {
        width: '100%', 
        height: 450, 
        position: 'absolute', 
        bottom: 0, 
        opacity: 0.5
    },

});

export default Test;