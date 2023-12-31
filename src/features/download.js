import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

// create a component
import { Colors } from '../tools/colors';
import MovieCart from '../components/MovieDownloadCart';
import Wait from '../components/wait';

// data
import { addMovieToDownloadList, getDownloadListMovies, modifyDownloadStatus, removeMovieFromDownloadList, removeAllMoviesFromDownloadList } from '../tools/download';
import { useFocusEffect } from '@react-navigation/native';

const DownloadScreen = ({navigation}) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMovies = async () => {
        setLoading(true);
        const data = await getDownloadListMovies();
        setMovies(data);
        console.log(data);
        setLoading(false);
    };
    
    useEffect(() => {
        fetchMovies();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            fetchMovies();
        }, [])
    );

    const updateDownloadStatus = async (movieId, status) => {
        const updatedMovies = movies.map(movie => {
            if (movie.id === movieId) {
                return {
                    ...movie,
                    download_status: status
                };
            }
            return movie;
        });
        setMovies(updatedMovies);
        await modifyDownloadStatus(movieId, status);
    };

    return (
        <View style={styles.container}>
            <View style={{width: '100%', height: 30, backgroundColor: Colors.dark_blue, borderRadius: 10, paddingLeft: 20, paddingRight: 20}}>
            <Text style={{color: Colors.white, fontSize: 20, fontWeight: 'bold'}}>Download</Text>
            </View>
            <ScrollView vertical={true} style={{marginTop: 20}}>
                {loading == true ? <Wait /> : 
                    movies.length == 0 ? <Text style={{ color: Colors.white, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>No movies in your watch list</Text> :
                    movies.map(movie => <MovieCart movie={movie} navigation={navigation} updateDownloadStatus={updateDownloadStatus} />)
                }
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
