const express = require('express')
const router = express.Router()
const TMDApi = require('../data/TMDApi')

router.use('/upcoming/:page?', async (req, res) => {
    let page = req.params.page | 1
    TMDApi.getUpcoming(page)
        .then(movieList => {
            movieList.results = movieList.results.map(TMDApi.parseMovie)
            res.json(movieList)
        })
        .catch(error => res.status(400).send(error))
})

router.use('/movie/:id', async (req, res) => {
    TMDApi.getMovie(req.params['id'])
        .then(movie => {
            const parsedMovie = TMDApi.parseMovie(movie)
            res.json(parsedMovie)
        })
        .catch(error => res.status(400).send(error))
})

router.use('/search/:query', async (req, res) => {
    TMDApi.searchMovie(req.params['query'])
        .then(searchResults => {
            searchResults.results = searchResults.results.map(TMDApi.parseMovie)
            res.json(searchResults)
        })
        .catch(error => res.status(400).send(error))
})
module.exports = router