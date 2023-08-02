import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MoviesList = ({ movies, navigation }) => {

    return (
        <View style={[styles.container, { width: '100%', alignItems: 'center',}]}>
                <View style={{ justifyContent: 'center', width: '100%', alignItems: 'center'}}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '90%', alignItems: 'center'}}>
                {movies.map((movie, index) => (
                    <TouchableOpacity key={index} style={styles.movieContainer} onPress={() => navigation.navigate('Movie', { link: movie.link, name: movie.name, img: movie.img })}>
                        <Image source={{ uri: movie.img }} style={styles.movieImage} />
                        <Text style={styles.movieTitle}>{movie.name}</Text>
                    </TouchableOpacity>
                ))}
                </View>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 'auto',
    },
    genre: {
        marginBottom: 20,
        fontSize: 28,
        color: '#fff',
    },
    movieContainer: {
        marginBottom: 50,
        height: 200,
    },
    movieImage: {
        width: 100,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    movieTitle: {
        marginTop: 10,
        fontSize: 13,
        width: 90,
        textAlign: 'center',
        color: '#fff',
    },
});

export default MoviesList;
