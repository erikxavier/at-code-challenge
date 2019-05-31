const API_KEY = '1f54bd990f1cdfb230adb312546d765d'
const BASE_URL = 'https://api.themoviedb.org/3/'
const axios = require('axios')

let apiConfig = {}

const apiCall = (url, method, params = {}) => {
  let requestConf = {
    url: url,
    baseURL: BASE_URL,
    method: method,
    params: {
      'api_key': API_KEY,
      ...params
    }
  }
  return new Promise((resolve, reject) => {
    axios(requestConf)
      .then(result => resolve(result.data))
      .catch((error) => {
        if (error.respose) reject(error.response.data)
        else reject(error.message)
      })
  })
}

const fetchApiConfigurations = async () => {
  let configs = await apiCall('/configuration', 'get')
  let genreList = await apiCall('/genre/movie/list', 'get')
  apiConfig = {
    images: configs.images,
    genres: genreList.genres.reduce((genresAsObj, genreObj) => {
      genresAsObj[genreObj.id] = genreObj.name
      return genresAsObj
    }, { })
  }
  console.log( apiConfig )
}

const parseMovie = (rawMovie) => {
  const parsedMovie = {
    id: rawMovie.id,
    title: rawMovie.title,
    poster: parseImageSizes(rawMovie.poster_path, apiConfig.images.poster_sizes),
    backdrop: parseImageSizes(rawMovie.backdrop_path, apiConfig.images.backdrop_sizes),
    release: rawMovie.release_date,
    overview: rawMovie.overview
  }
  if (rawMovie.genres) {
    parsedMovie.genres = rawMovie.genres.map((genre) => genre.name)
  } else if (rawMovie.genre_ids) {
   parsedMovie.genres = rawMovie.genre_ids.map((genreId => apiConfig.genres[genreId]))
  }
  console.log(rawMovie, parsedMovie)
  return parsedMovie
}

const parseImageSizes = (imgPath, sizes) => {
  return sizes.reduce((completePaths, size) => {
    completePaths[size] = `${apiConfig.images.base_url}${size}${imgPath}`
    return completePaths
  }, {})
}

const searchMovie = async (query) => {
  return apiCall('search/movie', 'get', { query })
}

const getUpcoming = async (page) => {
  let params = {}
  if (typeof page === 'number') { params.page = page }
  return apiCall('/movie/upcoming', 'get', params)
}

const getMovie = async (movieId) => {
  return apiCall(`/movie/${movieId}`, 'get')
}


module.exports = {
  getUpcoming, getMovie, searchMovie, fetchApiConfigurations, parseMovie
}
