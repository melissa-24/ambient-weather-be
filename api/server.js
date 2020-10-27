const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

// const pwsRouter = require('../routes/pwsRouter')
// const wunderRouter = require('../routes/wunderRouter')
// const openweatherRouter = require('../routes/openweatherRouter')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

// server.use('/api/pws', pwsRouter)
// server.use('/api/wunderground', wunderRouter)
// server.use('/api/openweather', openweatherRouter)

server.use('/', (req, res) => {
    res.send(`<h1>Family Weather API</h1>`)
})

server.use((err, req, res, next) => {
    res.status(err.code).json(err)
})

module.exports = server