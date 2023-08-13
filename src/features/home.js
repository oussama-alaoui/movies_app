import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../tools/colors'
import { ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// components
import MoviesList from '../components/MoviesList';
// data
import { fetchData } from '../tools/fetch_api';


const HomeScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('movies');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [Series, setSeries] = useState([]);
  const [scrolling, setScrolling] = useState(true);
  const [loading, setLoading] = useState(false);

  function fetchDatas(page, type) {
    console.log('fetching data: ' + type + ' page: ' + page);
    if (type == 'movies'){
      fetchData(page, type).then(data => {setMovies([...movies, ...data.movies]); setLoading(false);});
    }else{
      fetchData(page, type).then(data => {setSeries([...Series, ...data.movies]); setLoading(false);});
    }
  }
  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    if (event.nativeEvent.contentOffset.y >= event.nativeEvent.contentSize.height - event.nativeEvent.layoutMeasurement.height) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    fetchDatas(page, type);
    setLoading(true);
  }, [type]);


  return (
    <View style={styles.container}>
      <ScrollView onScroll={handleScroll} vertical={true} style={{ marginTop: 10, width: '100%' }} scrollEnabled={scrolling}>
        <ImageBackground
          source={{ uri: 'https://i.imgur.com/3jLPB46.png' }}
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
          {/* // view in center of image with three TouchableOpacity for movies and series and my list */}
          <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 520, backgroundColor: Colors.dark_blue, opacity: 0.5 }} />
          <View style={{ justifyContent: 'center', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.4)', height: 60, marginTop: 50, width: '100%'}}>
          <TouchableOpacity 
            style={{ width: 80, height: 40, marginTop: 10, borderRadius: 5, marginRight: 15 }} 
            onPress={() => {setType('movies')}}>
            <Text style={{ color: Colors.white, fontSize: 20, fontWeight: 'bold'}}>Movies</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: 80, height: 40, marginTop: 10, borderRadius: 5, marginRight: 0 }}
              onPress={() => {setType('series')}}
            >
              <Text style={{ color: Colors.white, fontSize: 20, fontWeight: 'bold' }}>Series</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View>
          {type == 'movies' ? <MoviesList movies={movies} navigation={navigation} /> : <MoviesList movies={Series} navigation={navigation} />}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
  slider: {
    width: '100%',
    height: 520,
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


export default HomeScreen;
