import axios from 'axios'

const fetchMovieList = (page) => {
  return new Promise((resolve, reject) => {
    let url = '/api/upcoming'
    if (page) url = url + `/${page}`
    axios.get(url)
      .then(response => resolve(response.data))
      .catch((error) => {
        if (error.respose) reject(error.response.data)
        else reject(error.message)
      })
  })
}

const fetchMovieDetail = (movieId) => {
  return new Promise((resolve, reject) => {
    let url = `/api/movie/${movieId}`
    axios.get(url)
      .then(response => resolve(response.data))
      .catch((error) => {
        if (error.respose) reject(error.response.data)
        else reject(error.message)
      })
  })
}

const searchMovie = (queryString, page) => {
  return new Promise((resolve, reject) => {
    let url = `/api/search/${queryString}`
    if (page) url = url + `/${page}`
    axios.get(url)
      .then(response => resolve(response.data))
      .catch((error) => {
        if (error.respose) reject(error.response.data)
        else reject(error.message)
      })
  })
}
export {fetchMovieDetail, fetchMovieList, searchMovie}
