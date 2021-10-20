import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';


export interface Avatar {
    id: number;
    title: string;
    backroundColor: string;
    onPress: () => void;
    // isAvailable: boolean;
}

export const Avatar = [{
    id: '1',
    title: '🦊',
    backroundColor: '#ffa71b',
},
{
    id: '2',
    title: '🐥',
    backroundColor: '#ffff00',
},
{
    id: '3',
    title: '🐋',
    backroundColor: '#3100ff',
},
{
    id: '4',
    title: '🐷',
    backroundColor: '#ff99cc',
},
{
    id: '5',
    title: '🐸',
    backroundColor: '#c5f404',
},
{
    id: '6',
    title: '🐶',
    backroundColor: '#876635',
},
{
    id: '7',
    title: '🐭',
    backroundColor: '#848484',
},
{
    id: '8',
    title: '🦄',
    backroundColor: '#aec9fe',
},
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

 const AvatarEmoji = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                horizontal
                data={Avatar}
                 renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {

        padding: 10,
        marginVertical: 6,
        marginHorizontal: 8,
    },
    title: {
        fontSize: 32,
    },
});

export default AvatarEmoji;

