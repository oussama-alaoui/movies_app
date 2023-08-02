import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
// components
import { Colors } from '../tools/colors';
import BigImageMovie from '../components/bigImageMovie';
import Button from '../components/button';
import CastList from '../components/cast_list';
import Wait from '../components/wait';
// data
import { fetchDataMovie } from '../tools/fetch_api';

const MovieScreen = ({ navigation, route }) => {
        const [movie, setMovie] = useState({});
        const [loading, setLoading] = useState(true);
        
        React.useEffect(() => {
            console.log('fetching data', route.params.link);
            fetchDataMovie(route.params.link).then(data => {
                setMovie(data.movie_info);
                setLoading(false);
                console.log(data);
            });
        }, []);

        return (
        <View style={styles.container}>
            <ScrollView vertical={true} style={{ marginTop: 10, width: '100%'}}>
                <BigImageMovie image={route.params.img} navigation={navigation} />
                <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', marginBottom: 20, width: '90%', justifyContent: 'space-between'}}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{route.params.name}</Text>
                        <Ionicons name="bookmark" size={24} color="white" />
                    </View>
                    {loading==true ? <Wait /> : (
                    <View>
                    <View style={{ flexDirection: 'row', marginVertical: 30 , width: '80%'}}>
                        <View style={{ flexDirection: 'row', marginRight: 20 }}>
                            <Ionicons name="time-outline" size={24} color={Colors.gray} />
                            <Text style={{ color: Colors.gray, fontSize: 14, marginLeft: 5 }}>{movie.duration}</Text>
                        </View>
                        <Text style={{ color: Colors.gray, fontSize: 14, marginRight: 20 }}>|</Text>
                        <View style={{ flexDirection: 'row', marginRight: 20 }}>
                            <Ionicons name="film-outline" size={24} color={Colors.gray} />
                            <Text style={{ color: Colors.gray, fontSize: 14, marginLeft: 5 }}>{movie.genere}</Text>
                        </View>
                        <Text style={{ color: Colors.gray, fontSize: 14, marginRight: 20 }}>|</Text>
                        <View style={{ flexDirection: 'row', marginRight: 20 }}>
                            <Ionicons name="globe-outline" size={24} color={Colors.gray}  />
                            <Text style={{ color: Colors.gray, fontSize: 20, marginLeft: 5 }}>{movie.langue}</Text>
                        </View>
                    </View>
                    <Button title="Watch now" statu="watch" />
                    <Button title="Download" statu="download" />
                    <View style={{ flexDirection: 'row', marginTop: 30, width: '90%', marginBottom: 10, justifyContent: 'flex-end' }}>
                        <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                            <Text style={{ color: Colors.white, fontSize: 20, marginRight: 5, textAlign: 'right' }}>قصة الفيلم</Text>
                        </View>
                        <Text style={{ color: Colors.blue, fontSize: 14, marginLeft: 2, textAlign: 'right' }}>|</Text>
                    </View>
                    <Text style={{ color: Colors.gray, fontSize: 14, marginRight: 2, width: '90%', textAlign: 'right' }}>{movie.description}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 30, width: '90%', marginBottom: 10, justifyContent: 'flex-end' }}>
                        <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                            <Text style={{ color: Colors.white, fontSize: 20, marginRight: 5, textAlign: 'right' }}>فريق العمل</Text>
                        </View>
                        <Text style={{ color: Colors.blue, fontSize: 14, marginLeft: 2, textAlign: 'right' }}>|</Text>
                    </View>
                    {/* <CastList casts={casts} /> */}
                    </View>
                    )}
                </View>
            </ScrollView>
        </View>
        );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: Colors.dark_blue,
    },

});

export default MovieScreen;
