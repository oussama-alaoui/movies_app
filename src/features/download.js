import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView } from 'react-native';

// create a component
import { Colors } from '../tools/colors';
import SearchBar from '../components/search';
import MoviesList from '../components/MoviesList';
import MovieCart from '../components/MovieDownloadCart';

const DownloadScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <View style={styles.container}>
            <View style={{width: '100%', height: 30, backgroundColor: Colors.dark_blue, borderRadius: 10, paddingLeft: 20, paddingRight: 20}}>
            <Text style={{color: Colors.white, fontSize: 20, fontWeight: 'bold'}}>Download</Text>
            </View>
            <ScrollView vertical={true} style={{marginTop: 20}}>
                <MovieCart />
                <MovieCart />
                <MovieCart />
                <MovieCart />
                <MovieCart />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        alignItems: 'center',
        backgroundColor: Colors.dark_blue,
    },
});

export default DownloadScreen;
