import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CastList = ({ casts }) => {

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                {casts.map(movie => (
                    <View key={movie.title} style={styles.movieContainer}>
                        <LinearGradient
                        colors={['#65c7d8', '#80D2EC','#CD7FE4']}
                        start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                        style={styles.grediant}
                        >
                        <Image source={{ uri: movie.imgSrc }} style={styles.movieImage} />
                        </LinearGradient>
                        <Text style={styles.movieTitle}>{movie.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 5,
    },
    genre: {
        marginBottom: 20,
        fontSize: 28,
        color: '#fff',
    },
    movieContainer: {
        height: 200,
        marginRight: 20,
    },
    movieImage: {
        width: 58,
        height: 58,
        resizeMode: 'cover',
        borderRadius: 25,
    },
    movieTitle: {
        marginTop: 10,
        fontSize: 13,
        width: 65,
        textAlign: 'center',
        color: '#fff',
    },
    grediant: {
        borderRadius: 25,
        alignItems: 'center',
        height: 62,
        width: 62,
        justifyContent: 'center',
        alignSelf: 'center',
    },
});

export default CastList;
