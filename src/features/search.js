import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView } from 'react-native';

// create a component
import { Colors } from '../tools/colors';
import SearchBar from '../components/search';
import MoviesList from '../components/MoviesList';
import MovieCart from '../components/MovieCart';

// data
import { fetch_movie_byName } from '../tools/fetch_api';

const SearchScreen = ({navigation}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    function searchMovie() {
        console.log('fetching data: ', searchQuery);
        fetch_movie_byName(searchQuery).then(data => {
            setLoading(false);
            setMovies(data.movies);
        });
    }

    return (
        <View style={styles.container}>
            <SearchBar onChangeText={setSearchQuery} value={searchQuery} onPress={searchMovie} />
            <ScrollView vertical={true} style={{marginTop: 20}}>
                {loading == true ? <Text style={{ color: Colors.white, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Search for a movie</Text> : <MoviesList movies={movies} navigation={navigation} />}
                {loading == false && movies.length == 0 && <Text style={{ color: Colors.white, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>No results found</Text>}
                {loading == true && movies.length != 0 && <Text style={{ color: Colors.white, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Search for a movie2</Text>}
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

export default SearchScreen;
