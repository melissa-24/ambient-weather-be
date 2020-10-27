require('dotenv').config()

const server = require('./api/server')

const PORT = process.env.PORT || 5555

server.listen(PORT, () => {
    console.log(`Server is started on ${PORT}`)
})