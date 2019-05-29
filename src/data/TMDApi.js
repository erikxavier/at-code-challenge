const API_KEY = '1f54bd990f1cdfb230adb312546d765d'
const BASE_URL = 'https://api.themoviedb.org/3/'
const axios = require('axios')

const apiCall = (url, method, params = { }) => {
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

const getUpcoming = async (page) => {
    let params = { }
    if (typeof page === 'number')
    params.page = page
    return apiCall('/movie/upcoming', 'get', params)
}

const getMovie = async (movieId) => {    
    return apiCall(`/movie/${movieId}`, 'get')
}

module.exports = {
    getUpcoming, getMovie
}