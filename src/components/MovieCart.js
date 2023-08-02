import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../tools/colors';

const MovieCart = ({ navigation, movie}) => {

    const showMovie = (movie, navigation) => {
        const code = movie.direct_link.split('/')[5];
        const name = movie.direct_link.split('/')[6];
        const link = `https://akwam.one/movie/${code}/${name}`;
        console.log(link);
        navigation.navigate('Movie', { link: link, name: movie.name, img: movie.imgSrc });
    };
  return (
    <View style={styles.container}>
        <LinearGradient
            colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
            style={styles.grediant}
        >
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '99.89%', height: '99%', backgroundColor: Colors.dark_blue, borderRadius: 10}} onPress={() => showMovie(movie, navigation)}>
                <Image source={{uri: movie.imgSrc}} style={styles.movieImage} />
                <View style={{flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', width: '60%', height: '100%', backgroundColor: Colors.dark_blue, borderRadius: 10, paddingLeft: 20}}>
                    <Text style={{color: Colors.white, fontSize: 20, fontWeight: 'bold', marginBottom: 20}}>{movie.name}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 9}}>
                        <Ionicons name="film-outline" size={15} color={Colors.gray} style={{paddingRight: 5, marginTop: 4}} />
                        <Text style={{color: Colors.gray, fontSize: 15}}>{movie.genres.join(', ')}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 9}}>
                        <Ionicons name="time-outline" size={15} color={Colors.gray} style={{paddingRight: 5}} />
                        <Text style={{color: Colors.gray, fontSize: 15}}>{movie.dure}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Ionicons name="calendar-outline" size={15} color={Colors.gray} style={{paddingRight: 5}} />
                        <Text style={{color: Colors.gray, fontSize: 15}}>{movie.year}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
    grediant: {
        borderRadius: 10,
        alignItems: 'center',
        height: 170,
        width: 360,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
    movieImage: {
        width: 100,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    buttonContainer: {
        flex: 1.0,
        color: '#fff',
        paddingLeft: 10,
    },
    icon: {
        padding: 5,
        paddingRight: 10,
        color: '#fff'
    },
});
export default MovieCart;