import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import ThumbnailB from './ThumbnailB.js';
import Thumbnail from './Thumbnail.js';
import Banner from './Banner.js';

const data = [
    {
        id: 0,
        title: "Digital Marketing Tips & Tricks", 
        owner: "Angie Stone",
        members: "350k",
        timestamp: "1h"
    },
    {
        id: 1,
        title: "Improve your Shopify conversions", 
        owner: "Tree Ecommerce",
        members: "978",
        timestamp: "1m"
    },
    {
        id: 2,
        title: "Bob Loblaw Law Blog", 
        owner: "Tree Ecommerce",
        members: "978",
        timestamp: "1m"
    },
    {
        id: 3,
        title: "Blah", 
        owner: "Tree Ecommerce",
        members: "978",
        timestamp: "1m"
    },
];

const renderItem = ({item}) => (
    item.id !== 1 ?
    <Thumbnail
        thumbTitle={item.title}
        adminName={item.owner}
        members={item.members}
        timestamp={item.timestamp}
    /> :
    <ThumbnailB
        thumbTitle={item.title}
        adminName={item.owner}
        members={item.members}
        timestamp={item.timestamp}
    /> 
);

const Mosaic = () => {
    return (
        <ScrollView
            style={Style.scrollView}
            showsVerticalScrollIndicator={false}>
            <MasonryList
                data={data}
                style={Style.list}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={renderItem}
                />
            <Banner />
        </ScrollView>
    );
};

const Style = StyleSheet.create ({

    scrollView: {
        borderRadius: 12
    },
        list: {
            flexDirection: 'row-reverse'
        }
});

export default Mosaic;
