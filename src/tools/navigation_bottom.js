import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from './colors';
// import screen
import Home from '../features/home';
import Download from '../features/download';
import Search from '../features/search';
import WatchList from '../features/watch_list';



const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
      <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{ 
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'rgba(255,255,255,0.4)',
          headerShown: false,
          tabBarStyle: [
            {
              height:70,
              width: '100%',
              paddingBottom: 15,
              backgroundColor:Colors.dark_blue,
              display: "flex",
              borderTopColor: Colors.blue,
            },
          ],
        }}>
        <Tab.Screen name="Home" component={Home}
          options={{
            headerShown: false,
            navigation :Tab.navigation,
            title: 'Home',
            tabBarVisible: 'false',
            tabBarIcon: ({size,focused,color}) => {
              if (focused)
                return(
                    <Ionicons name="home" size={size} color={Colors.blue} />
                )
                return(
                    <Ionicons name="home" size={size} color={Colors.gray} />
                )
            },}}
        />

        <Tab.Screen name="Search" component={Search}
          options={{
            headerShown: false,
            navigation :Tab.navigation,
            title: 'Search',
            tabBarVisible: 'false',
            tabBarIcon: ({size,focused,color}) => {
                if (focused)
                return(
                    <Ionicons name="search" size={size} color={Colors.blue} />
                )
                return(
                    <Ionicons name="search" size={size} color={Colors.gray} />
                )
            },}}
        />

        <Tab.Screen name="Download" component={Download}
          options={{
            headerShown: false,
            navigation :Tab.navigation,
            title: 'Download',
            tabBarVisible: 'false',
            tabBarIcon: ({size,focused,color}) => {
                if (focused)
                return(
                    <Ionicons name="arrow-down" size={size} color={Colors.blue} />
                )
                return(
                    <Ionicons name="arrow-down" size={size} color={Colors.gray} />
                )
            },}}
        />

        <Tab.Screen name="WatchList" component={WatchList}
          options={{
            headerShown: false,
            navigation :Tab.navigation,
            title: 'WatchList',
            tabBarVisible: 'false',
            tabBarIcon: ({size,focused,color}) => {
                if (focused)
                return(
                    <Ionicons name="bookmarks" size={size} color={Colors.blue} />
                )
                return(
                    <Ionicons name="bookmarks" size={size} color={Colors.gray} />
                )
            },}}
        />
 
      </Tab.Navigator>
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