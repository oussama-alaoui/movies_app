import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../tools/colors';
import ProgressCircle from 'react-native-progress-circle'

// data
import { removeMovieFromDownloadList, getDownloadStatus } from '../tools/download';
import { useFocusEffect } from '@react-navigation/native';

const MovieDownloadCart = ({ value, onChangeText, onClear, movie, navigation }) => {

    async function updateDownloadStatus (){
        const status = await getDownloadStatus(movie.name);
        movie.download_status = status;
    };

    
    let icon;
    function checkStatus() {
        if (movie.download_status === 1) {
            icon = <Ionicons name="checkmark-circle-outline" size={30} color={Colors.green} />;
        } 
        else if (movie.download_status === 0) {
            icon = <Ionicons name="alert-circle-outline" size={30} color={Colors.red} />;
        }
        else {
            icon = <ProgressCircle
            percent={movie.download_status * 100}
            radius={25}
            borderWidth={4}
            color={Colors.blue}
            shadowColor="#999"
            bgColor={Colors.dark_blue}
            >
            <Text style={{ fontSize: 14, color:Colors.gray }}>{Math.round(movie.download_status * 100)}%</Text>
        </ProgressCircle>;
        }
    }
    checkStatus(); 
    useFocusEffect(
        React.useCallback(() => {
            updateDownloadStatus(); 
        }, [movie.download_status])
    );
    setInterval(updateDownloadStatus, 5000);
    
  
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('MovieDownload', { movie: movie })}>
            <LinearGradient
                colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
                style={styles.grediant}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '99.89%',
                        height: '99%',
                        backgroundColor: Colors.dark_blue,
                        borderRadius: 10,
                    }}
                >
                    <Image source={{ uri: movie.img }} style={{ width: 90, height: 120, borderRadius: 10 }} />
                    <View
                        style={{
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            width: '55%',
                            height: '100%',
                            backgroundColor: Colors.dark_blue,
                            borderRadius: 10,
                            paddingLeft: 20,
                        }}
                    >
                        <Text style={{ color: Colors.white, fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>{movie.name}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 9 }}>
                            <Ionicons name="film-outline" size={15} color={Colors.gray} style={{ paddingRight: 5, marginTop: 4 }} />
                            <Text style={{ color: Colors.gray, fontSize: 15 }}>{movie.genres.join(', ')}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 9 }}>
                            <Ionicons name="time-outline" size={15} color={Colors.gray} style={{ paddingRight: 5 }} />
                            <Text style={{ color: Colors.gray, fontSize: 15 }}>{movie.dure}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="calendar-outline" size={15} color={Colors.gray} style={{ paddingRight: 5 }} />
                            <Text style={{ color: Colors.gray, fontSize: 15 }}>{movie.year}</Text>
                        </View>
                    </View>
                    {/* New column for download status */}
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '10%', height: '100%' }}>
                        {icon}
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
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
export default MovieDownloadCart;