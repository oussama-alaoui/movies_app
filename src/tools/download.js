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

async function handleDownload (movie){
  const downloadDir = FileSystem.documentDirectory;
  const movieUrl = "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4";
  const fileUri = `${downloadDir}${movieUrl.split('/').pop()}`;
  try {
      var img = movie.img;
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
      };
      addMovieToDownloadList(movie);
      const downloadResumable = FileSystem.createDownloadResumable(
        movieUrl,
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
  removeMovieFromDownloadList
};
