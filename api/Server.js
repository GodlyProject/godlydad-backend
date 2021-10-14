const express = require('express')
const BibleRouter = require('./Bible/router')
const server = express()

server.use(express.json())
server.use('/api/quotes', BibleRouter)

//***********************500 error middleware***********//
//eslint-disable-next-line
server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        devMessage: 'Something bad inside the server!'
    });
});

module.exports = server