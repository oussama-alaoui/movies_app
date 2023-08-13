/**
 * Fetches data from an API and returns it.
 * @returns {Promise} A Promise that resolves with the data from the API.
 */
function fetchData(page, type) {
    console.log('page', page);
    if (type === 'movies') {
        var url = 'https://rich-pear-caterpillar-hat.cyclic.app//movies/' + page + '/' + type;
    } else {
        var url = 'https://rich-pear-caterpillar-hat.cyclic.app//movies/' + page + '/' + type;
    }
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error;
        });
}

/**
 * Fetches data from an API and returns it, with a custom error message.
 * @param {string} url - The URL of the API endpoint.
 * @param {string} errorMessage - The error message to display if the fetch fails.
 * @returns {Promise} A Promise that resolves with the data from the API.
 * https://akwam.cz/movie/8831/ruby-gillman-teenage-kraken
 */
function fetchDataMovie(url) {
    console.log('url', url);
    const name = url.split('/')[5];
    const code = url.split('/')[4];
    url = 'https://rich-pear-caterpillar-hat.cyclic.app//movie/' + code + '/' + name;
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(errorMessage);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error;
        });
}

/**
 * Fetches data from an API and returns it, with a default error message.
 * @param {string} url - The URL of the API endpoint.
 * @returns {Promise} A Promise that resolves with the data from the API.
 */
function fetch_video_link(url) {
    const name = url.split('/')[6];
    const code = url.split('/')[4];
    const code2 = url.split('/')[5];
    url = 'https://rich-pear-caterpillar-hat.cyclic.app//movies/' + code + '/' + code2 + '/' + name;
    console.log('url', url);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }
        )
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error;
        }
        );
}

function fetch_movie_byName(name) {
    name = name.replace(' ', '+');
    const url = 'https://rich-pear-caterpillar-hat.cyclic.app//movies/' + name;
    console.log('url', url);
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }
        )
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error;
        }
        );
}

module.exports = {
    fetchData,
    fetchDataMovie,
    fetch_video_link,
    fetch_movie_byName
}
