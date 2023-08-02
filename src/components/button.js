import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../tools/colors';
import { Ionicons } from '@expo/vector-icons';

const Button = ({ title, onPress, statu }) => {
    if (statu == 'watch') {
    return (
        <LinearGradient
        colors={['#65c7d8', '#80D2EC','#CD7FE4']}
        start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
        style={styles.grediant}
        >
            <LinearGradient
            colors={['#1DA3C2', '#5473B0', '#81479E']}
            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
            style={styles.grediant2}
            >
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Ionicons name="play-circle" size={30} color={Colors.white} style={{paddingTop: 5, paddingRight: 10}} />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
        </LinearGradient>
        </LinearGradient>
    );
    } else if (statu == 'download') {
        return (
            <LinearGradient
            colors={['#65c7d8', '#80D2EC','#CD7FE4']}
            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
            style={styles.grediant}
            >
            <TouchableOpacity style={[styles.button, {backgroundColor: Colors.dark_blue}]} onPress={onPress}>
                <Ionicons name="arrow-down" size={30} color={Colors.white} style={{paddingTop: 5, paddingRight: 10}} />
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
            </LinearGradient>
        );
    }

};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        width: '99%',
        height: 57,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        padding: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    grediant: {
        borderRadius: 5,
        alignItems: 'center',
        height: 60,
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
    grediant2: {
        borderRadius: 5,
        alignItems: 'center',
        height: 58,
        width: '99%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
});

export default Button;
