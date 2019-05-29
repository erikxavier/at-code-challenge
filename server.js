const express = require('express')
const PORT = 4000
const movieRoutes = require('./src/routes/movie')

const app = express()

app.use(express.json())

app.use(movieRoutes)

app.listen(PORT, () => {
    console.log(`back-end server started on port ${PORT}`)
})