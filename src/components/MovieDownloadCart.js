import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../tools/colors';

const MovieDownloadCart = ({ value, onChangeText, onClear }) => {
    // Assume that the download status is passed as a prop named "downloadStatus"
    const [downloadStatus, setDownloadStatus] = useState('error'); // ['pending', 'success', 'error'

    // Determine which icon to display based on the download status
    let icon;
    if (downloadStatus === 'success') {
        icon = <Ionicons name="checkmark-circle-outline" size={30} color={Colors.blue} />;
    } else if (downloadStatus === 'error') {
        icon = <Ionicons name="alert-circle-outline" size={30} color={Colors.red} />;
    } else {
        icon = <Text style={{ color: Colors.white, fontSize: 10 }}>Downloading...</Text>;
    }

    return (
        <View style={styles.container}>
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
                    <Image source={{ uri: 'https://i.imgur.com/3jLPB46.png' }} style={{ width: 90, height: 120, borderRadius: 10 }} />
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
                        <Text style={{ color: Colors.white, fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>The Dark Knight</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 9 }}>
                            <Ionicons name="film-outline" size={15} color={Colors.gray} style={{ paddingRight: 5, marginTop: 4 }} />
                            <Text style={{ color: Colors.gray, fontSize: 15 }}>Action</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 9 }}>
                            <Ionicons name="time-outline" size={15} color={Colors.gray} style={{ paddingRight: 5 }} />
                            <Text style={{ color: Colors.gray, fontSize: 15 }}>2h 32min</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="calendar-outline" size={15} color={Colors.gray} style={{ paddingRight: 5 }} />
                            <Text style={{ color: Colors.gray, fontSize: 15 }}>2008</Text>
                        </View>
                    </View>
                    {/* New column for download status */}
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '10%', height: '100%' }}>
                        {icon}
                    </View>
                </View>
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