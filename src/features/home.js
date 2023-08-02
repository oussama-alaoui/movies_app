import React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../tools/colors'
import { ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// components
import MoviesList from '../components/MoviesList';
// data
import { fetchData } from '../tools/fetch_api';


const HomeScreen = ({navigation}) => {
  const [search, setSearch] = React.useState('');
  const onChangeText = text => setSearch(text);

  const [page, setPage] = React.useState(1);
  const [movies, setMovies] = React.useState([]);
  const [scrolling, setScrolling] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    console.log('fetching data');
    fetchData(page).then(data => {setMovies([...movies, ...data.movies]); setLoading(false);});
  }, [page]);

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    if (event.nativeEvent.contentOffset.y >= event.nativeEvent.contentSize.height - event.nativeEvent.layoutMeasurement.height) {
      setPage(page + 1);
    }
  };

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
            onLongPress={() => alert('hello')} >
            <Text style={{ color: Colors.white, fontSize: 20, fontWeight: 'bold'}}>Movies</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: 80, height: 40, marginTop: 10, borderRadius: 5, marginRight: 0 }}
              onLongPress={() => alert('hello')}
            >
              <Text style={{ color: Colors.white, fontSize: 20, fontWeight: 'bold' }}>Series</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: 80, height: 40, marginTop: 10, borderRadius: 5, marginRight: 0 }}
              onLongPress={() => alert('hello')}
            >
              <Text style={{ color: Colors.white, fontSize: 20, fontWeight: 'bold' }}>My List</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View>
            <MoviesList movies={movies} navigation={navigation} />
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
