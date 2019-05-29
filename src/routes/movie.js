const express = require('express')
const router = express.Router()
const TMDApi = require('../data/TMDApi')

router.use('/upcoming/:page?', async (req, res) => {
    let page = req.params.page | 1
    TMDApi.getUpcoming(page)
        .then(movieList => res.json(movieList))
        .catch(error => res.status(400).send(error))
})

router.use('/movie/:id', async (req, res) => {
    TMDApi.getMovie(req.params['id'])
        .then(movie => res.json(movie))
        .catch(error => res.status(400).send(error))
})

module.exports = router