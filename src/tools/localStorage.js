// Description: This file contains functions to interact with the local storage

import AsyncStorage from '@react-native-async-storage/async-storage';

// Add a movie to the watchlist in local storage
async function addMovieToWatchlist(movie) {
    try {
        let watchlist = JSON.parse(await AsyncStorage.getItem('watchlist')) || [];
        watchlist.push(movie);
        await AsyncStorage.setItem('watchlist', JSON.stringify(watchlist));
    } catch (error) {
        console.error(error);
    }
}

// Remove a movie from the watchlist in local storage
async function removeMovieFromWatchlist(movieName) {
    try {
        let watchlist = JSON.parse(await AsyncStorage.getItem('watchlist')) || [];
        watchlist = watchlist.filter(movie => movie.name !== movieName);
        await AsyncStorage.setItem('watchlist', JSON.stringify(watchlist));
    } catch (error) {
        console.error(error);
    }
}

// Get all movies in the watchlist from local storage
async function getWatchlistMovies() {
    try {
        return JSON.parse(await AsyncStorage.getItem('watchlist')) || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

// Check if a movie is in the watchlist
async function isInWatchlist(movieName) {
    try {
        let watchlist = JSON.parse(await AsyncStorage.getItem('watchlist')) || [];
        let movie = watchlist.find(movie => movie.name === movieName);
        return movie !== undefined;
    } catch (error) {
        console.error(error);
        return false;
    }
}

module.exports = {
    addMovieToWatchlist,
    removeMovieFromWatchlist,
    getWatchlistMovies,
    isInWatchlist
};