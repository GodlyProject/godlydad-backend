const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { logger } = require('./Bible/middleware')
const BibleRouter = require('./Bible/router')
const server = express()

server.use(express.json())
server.use(cors())
server.use(logger)
server.use(morgan(`dev`))
server.use('/api/bible', BibleRouter)

//***********************500 error middleware***********//
//eslint-disable-next-line
server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        devMessage: 'Something bad inside the server!'
    });
});

module.exports = server