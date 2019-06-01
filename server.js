const express = require('express')
const PORT = process.env.PORT | 4000
const movieRoutes = require('./src/routes/movie-routes')
const path = require('path')
const { fetchApiConfigurations } = require('./src/data/TMDApi')

const app = express() 

app.use(express.json())

app.use('/api', movieRoutes)

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  })

async function main() {
    await fetchApiConfigurations()
    app.listen(PORT, () => {
        console.log(`back-end server started on port ${PORT}`)
    })
}

main()