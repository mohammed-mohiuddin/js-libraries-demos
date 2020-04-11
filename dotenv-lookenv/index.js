require('dotenv').config()
const express = require('express')

const hostname = process.env.DEVELOPMENT_HOST
const port = process.env.DEVELOPMENT_PORT

const app = new express()

app.get('/', (req, res) => {
    res.send(`Congrats! you have set host=${hostname} and port=${port} using dotenv`)
})

app.listen(port, hostname, () => {
    console.log(`server is running at ${hostname}:${port}`)
})