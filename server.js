const express = require('express')
const PORT = 4000
const movieRoutes = require('./src/routes/movie-routes')
const { fetchApiConfigurations } = require('./src/data/TMDApi')

const app = express() 

app.use(express.json())

app.use('/api', movieRoutes)

async function main() {
    await fetchApiConfigurations()
    app.listen(PORT, () => {
        console.log(`back-end server started on port ${PORT}`)
    })
}

main()