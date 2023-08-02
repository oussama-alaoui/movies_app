import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, ActivityIndicator, TouchableOpacity, StatusBar, Slider } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Ionicons } from '@expo/vector-icons';

const Player = ({navigation, route}) => {
    const video = useRef(null);
    const [status, setStatus] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [showControls, setShowControls] = useState(true);
    const [sliderValue, setSliderValue] = useState(0);
    const hideControlsTimer = useRef(null);

    const handleVideoLoad = () => {
        setIsLoading(false);
        // Start the timer to hide controls after 10 seconds
        hideControlsTimer.current = setTimeout(() => {
            setShowControls(false);
        }, 10000);
    }

    const handleVideoError = (error) => {
        console.error('Video loading error:', error);
        // Implement logic to show an error message to the user
        // You can use a state variable to control the visibility of the error message
    };

    const handlePlayPause = () => {
        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync();
    }

    const handleBackward = () => {
        video.current.setPositionAsync(status.positionMillis - 10000);
    }

    const handleForward = () => {
        video.current.setPositionAsync(status.positionMillis + 10000);
    }

    const handleScreenPress = () => {
        setShowControls(true);
        // Clear the previous timer and start a new one to hide controls after 10 seconds
        if (hideControlsTimer.current) {
            clearTimeout(hideControlsTimer.current);
        }
        hideControlsTimer.current = setTimeout(() => {
            setShowControls(false);
        }, 5000);
    }

    const handleSliderValueChange = (value) => {
        setSliderValue(value);
        video.current.setPositionAsync(value * status.durationMillis);
    }

    useEffect(() => {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        return () => {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        }
    }, []);

    return (
        <TouchableOpacity style={styles.container} onPress={handleScreenPress}>
            <StatusBar hidden />
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: route.params.data.movie_link.videos[0].url,
                }}
                resizeMode="cover"
                isLooping
                onPlaybackStatusUpdate={status => {
                    setStatus(() => status);
                    setSliderValue(status.positionMillis / status.durationMillis);
                }}
                onLoad={handleVideoLoad}
                onError={handleVideoError}
            />
            {isLoading && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )}

            {showControls && (
                <View style={styles.controlsContainer}>
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={handleBackward}>
                            <Ionicons name="play-back-outline" size={32} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handlePlayPause}>
                            <Ionicons name={status.isPlaying ? "ios-pause" : "ios-play"} size={32} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleForward}>
                            <Ionicons name="play-forward-outline" size={32} color="white" />
                        </TouchableOpacity>
                    </View>
                    <Slider
                        style={{width: '80%', height: 40, marginTop: 70}}
                        minimumValue={0}
                        maximumValue={1}
                        value={sliderValue}
                        minimumTrackTintColor="rgba(188,11,11,0.8)"
                        maximumTrackTintColor="rgba(188,11,11)"
                        onValueChange={handleSliderValueChange}
                    />
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
    },
    video: {
        height: '100%',
        width: '100%',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        marginBottom: 10,
        width: '30%',
        height: 50,
        paddingVertical: 10,
    },
    controlsContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
        opacity: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
});

export default Player;

