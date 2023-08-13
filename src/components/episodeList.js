import React from 'react';
import { View, Text, FlatList, ScrollView, Image, StyleSheet } from 'react-native';
import { Colors } from '../tools/colors';
import { LinearGradient } from 'expo-linear-gradient';

const EpisodeList = () => {
  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 18 }}>{item.title}</Text>
      <Text style={{ fontSize: 14 }}>{item.description}</Text>
    </View>
  );

  const episodes = [
    {
        id: 1,
        title: 'Episode 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl id aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl eu nunc. Donec auctor, nisl id aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl eu nunc.',
        Image: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
        id: 2,
        title: 'Episode 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl id aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl eu nunc. Donec auctor, nisl id aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl eu nunc.',
        Image: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
        id: 3,
        title: 'Episode 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl id aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl eu nunc. Donec auctor, nisl id aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl eu nunc.',
        Image: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
        id: 4,
        title: 'Episode 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl id aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl eu nunc. Donec auctor, nisl id aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl eu nunc.',
        Image: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    ];

  return (
    <View style={{ flex: 1, width:"100%" }}>
        <ScrollView style={{ width:"100%"}}>
            <View style={{ alignItems: "end", flexDirection: 'row', padding: 10, width: '90%', justifyContent: 'space-between' }}>
              <LinearGradient
                colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                style={styles.grediant}
              >
                  <Image
                      style={{ width: 150, height: 100, borderRadius: 10, resizeMode: 'cover' }}
                      source={{ uri: 'https://i.imgur.com/UYiroysl.jpg' }}
                  />
              </LinearGradient>
              <View style={{ }}>
                <Text style={{ fontSize: 24, color: Colors.white }}>The Mandalorian</Text>
              </View>
            </View>
            
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
      grediant: {
        borderRadius: 10,
        alignItems: 'center',
        height: 105,
        width: 155,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
});

export default EpisodeList;
