import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// components
import { Colors } from '../tools/colors';
import BigImageMovie from '../components/bigImageMovie';
import Button from '../components/button';
import CastList from '../components/cast_list';
import Wait from '../components/wait';
import MovieDownloadCart from '../components/MovieDownloadCart';
// data

const MovieDownloadScreen = ({ navigation, route }) => {
        return (
        <View style={styles.container}>
            <ScrollView vertical={true} style={{ marginTop: 10, width: '100%'}}>
                <BigImageMovie image={route.params.movie.img} navigation={navigation} />
                <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
                    <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', marginBottom: 20, width: '90%', justifyContent: 'space-between'}}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', width: '50%' }}>{route.params.movie.name}<Text style={{ color: Colors.gray, fontSize: 15}}> ({route.params.movie.year})</Text></Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 30 , width: '80%', justifyContent: 'space-between'}}>
                        <View style={{ flexDirection: 'row'}}>
                            <Ionicons name="time-outline" size={24} color={Colors.gray} />
                            <Text style={{ color: Colors.gray, fontSize: 14, marginLeft: 5 }}>{route.params.movie.dure}</Text>
                        </View>
                        <Text style={{ color: Colors.gray, fontSize: 14}}>|</Text>
                        <View style={{ flexDirection: 'row'}}>
                            <Ionicons name="film-outline" size={24} color={Colors.gray} />
                            <Text style={{ color: Colors.gray, fontSize: 14, marginLeft: 5 }}>{route.params.movie.genres[0]}</Text>
                        </View>
                        <Text style={{ color: Colors.gray, fontSize: 14}}>|</Text>
                        <View style={{ flexDirection: 'row'}}>
                            <Ionicons name="globe-outline" size={24} color={Colors.gray}  />
                            <Text style={{ color: Colors.gray, fontSize: 20, marginLeft: 5 }}>{route.params.movie.langue}</Text>
                        </View>
                    </View>
                    <Button title="Watch now" statu="watch" onPress={() => get_links(route.params.movie.path, navigation)} />
                    <View style={{ flexDirection: 'row', marginTop: 30, width: '90%', marginBottom: 10, justifyContent: 'flex-end' }}>
                        <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                            <Text style={{ color: Colors.white, fontSize: 20, marginRight: 5, textAlign: 'right' }}>قصة الفيلم</Text>
                        </View>
                        <Text style={{ color: Colors.blue, fontSize: 14, marginLeft: 2, textAlign: 'right' }}>|</Text>
                    </View>
                    <Text style={{ color: Colors.gray, fontSize: 14, marginRight: 2, width: '90%', textAlign: 'right' }}>{route.params.movie.description}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 30, width: '90%', marginBottom: 10, justifyContent: 'flex-end' }}>
                        <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                            <Text style={{ color: Colors.white, fontSize: 20, marginRight: 5, textAlign: 'right' }}>فريق العمل</Text>
                        </View>
                        <Text style={{ color: Colors.blue, fontSize: 14, marginLeft: 2, textAlign: 'right' }}>|</Text>
                    </View>
                    <CastList casts={route.params.movie.cast} />
                    </View>
                </View>
            </ScrollView>
        </View>
        );
};

async function get_links(url, navigation) {
   navigation.navigate('Player', { link: url });
}

async function handleWatchlist(movie, setWatchlist) {
    if (await isInWatchlist(route.params.movie.name)) {
        await removeMovieFromWatchlist(route.params.movie.name);
        setWatchlist(0);
    } else {
        await addMovieToWatchlist(movie);
        setWatchlist(1);
    }
    getWatchlistMovies().then(data => console.log('watchlist', data));
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: Colors.dark_blue,
    },

});

export default MovieDownloadScreen;
