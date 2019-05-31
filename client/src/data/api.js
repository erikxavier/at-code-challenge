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

export {fetchMovieDetail, fetchMovieList}

const MOVIE = {
  'vote_count': 570,
  'id': 420817,
  'video': false,
  'vote_average': 7.2,
  'title': 'Aladdin',
  'popularity': 630.556,
  'poster_path': 'http://image.tmdb.org/t/p/w500/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg',
  'original_language': 'en',
  'original_title': 'Aladdin',
  'genres': [
    'Comedy',
    'Family',
    'Action',
    'Drama'
  ],
  'genre_ids': [
    12,
    14,
    10402,
    10749,
    35,
    10751
  ],
  'backdrop_path': 'http://image.tmdb.org/t/p/w1280/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg',
  'adult': false,
  'overview': 'A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.',
  'release_date': '2019-05-22'
}
