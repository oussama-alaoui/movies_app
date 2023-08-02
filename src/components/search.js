
import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const SearchBar = ({ value, onChangeText, onPress }) => {
  return (
    <View style={styles.container}>
        <LinearGradient
            colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
            style={styles.grediant}
        >
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '99%', height: '95%', backgroundColor: 'rgba(3,3,17,1)', borderRadius: 10}}>
                <TextInput 
                    style={styles.buttonContainer}
                    placeholder="Search for Movies ..."
                    placeholderTextColor="rgba(255,255,255,0.5)"
                    value={value}
                    onChangeText={onChangeText}    
                />
                    <TouchableOpacity onPress={onPress} style={styles.icon}>
                        <Ionicons name="search" size={24} color="#fff" />
                    </TouchableOpacity>
            </View>
        </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({

    grediant: {
        borderRadius: 10,
        alignItems: 'center',
        height: 60,
        width: 360,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonContainer: {
        flex: 1.0,
        color: '#fff',
        paddingLeft: 10,
    },
    icon: {
        padding: 5,
        paddingRight: 10,
        color: '#fff',
        backgroundColor: 'rgba(255,255,255,0.3)',
        height: '100%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        width: 50,
        alignItems: 'center',
    },
});
export default SearchBar;