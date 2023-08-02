import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../tools/colors';

const BigImageMovie = ({ image, navigation }) => {
    return (
        <ImageBackground
            source={{ uri:image }}
            style={styles.slider}
            >
            <LinearGradient
                colors={['rgba(8, 8, 29, 1)', 'rgba(8, 8, 29, 0)']}
                style={styles.gradientTop}
            />
            <LinearGradient
                colors={['rgba(8, 8, 29, 0)', 'rgba(8, 8, 29, 1)']}
                style={styles.gradientBottom}
            />
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 520, backgroundColor: Colors.dark_blue, opacity: 0.5 }} />
            <View style={{width: '90%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 50, alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={24} color="white" />
            </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    slider: {
        width: '100%',
        height: 520,
        backgroundColor: 'red',
        marginBottom: 25,
        resizeMode: 'cover',
        alignItems: 'center',
        
      },
    gradientTop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 70,
      },
    gradientBottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 90,
    },
});
export default BigImageMovie;
