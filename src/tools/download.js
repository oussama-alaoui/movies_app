import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';

// Add a movie to the download list in local storage
async function addMovieToDownloadList(movie) {
  try {
    let downloadList = JSON.parse(await AsyncStorage.getItem('downloadList')) || [];
    downloadList.push(movie);
    await AsyncStorage.setItem('downloadList', JSON.stringify(downloadList));
  } catch (error) {
    console.error(error);
  }
}

// Get all movies in the download list from local storage
async function getDownloadListMovies() {
  try {
    return JSON.parse(await AsyncStorage.getItem('downloadList')) || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Remove all movies from the download list in local storage
async function removeAllMoviesFromDownloadList() {
  try {
    await AsyncStorage.removeItem('downloadList');
  } catch (error) {
    console.error(error);
  }
}

// Get a movie from the download list from local storage
async function getDownloadListMovie(movieName) {
  try {
    let downloadList = JSON.parse(await AsyncStorage.getItem('downloadList')) || [];
    return downloadList.find(movie => movie.name === movieName);
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Get the download status of a movie in the download list
async function getDownloadStatus(movieName) {
  try {
    let downloadList = JSON.parse(await AsyncStorage.getItem('downloadList')) || [];
    let movie = downloadList.find(movie => movie.name === movieName);
    return movie.download_status;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Modify the download status of a movie in the download list
async function modifyDownloadStatus(movieName, status) {
  try {
    let downloadList = JSON.parse(await AsyncStorage.getItem('downloadList')) || [];
    let movie = downloadList.find(movie => movie.name === movieName);
    movie.download_status = status;
    await AsyncStorage.setItem('downloadList', JSON.stringify(downloadList));
  } catch (error) {
    console.error(error);
  }
}

// Remove a movie from the download list in local storage
async function removeMovieFromDownloadList(movieName) {
  try {
    let downloadList = JSON.parse(await AsyncStorage.getItem('downloadList')) || [];
    downloadList = downloadList.filter(movie => movie.name !== movieName);
    await AsyncStorage.setItem('downloadList', JSON.stringify(downloadList));
  } catch (error) {
    console.error(error);
  }
}

async function handleDownload (movie, link){
  const downloadDir = FileSystem.documentDirectory;
  const fileUri = `${downloadDir}${link.split('/').pop()}`;
  try {
      var movie = {
        name: movie.name,
        img: movie.imgSrc,
        path: fileUri,
        dure: movie.dure,
        year: movie.year,
        langue: movie.langue,
        genres: movie.genres,
        description: movie.description,
        cast: movie.cast,
        download_status: 0,
      };
      addMovieToDownloadList(movie);
      const downloadResumable = FileSystem.createDownloadResumable(
        link,
        fileUri,
        {},
        (downloadProgress) => {
          const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
          console.log(`Download Progress: ${progress}`);
          modifyDownloadStatus(movie.name, progress);
        }
      );
      const { uri } = await downloadResumable.downloadAsync();
      console.log('Download complete:', uri);
  } catch (error) {
    console.error('Error during download:', error);
  }
};


module.exports = {
  addMovieToDownloadList,
  getDownloadListMovies,
  modifyDownloadStatus,
  handleDownload,
  removeMovieFromDownloadList,
  getDownloadListMovie,
  getDownloadStatus,
  removeAllMoviesFromDownloadList,
};
