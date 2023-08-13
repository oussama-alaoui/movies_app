import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNav from './src/tools/navigation_bottom';
import Movie from './src/features/movie';
import Player from './src/features/player';
import MovieDownloadScreen from './src/features/movie_download';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomNave" component={BottomNav} />
        <Stack.Screen name="Movie" component={Movie} />
        <Stack.Screen name="Player" component={Player} />
        <Stack.Screen name="MovieDownload" component={MovieDownloadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
