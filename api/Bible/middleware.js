const logger = (req, res, next) => {
    const formatUrl = `${req.baseUrl}${req.url}`
    const log = `---------------------------
    ${Date()} 
    method: ${req.method}
    URL: ${formatUrl}
    status: ${res.statusCode}
    requester IP: ${req.ip} \n************`
    console.log(log)
    next()
}

module.exports = { logger }