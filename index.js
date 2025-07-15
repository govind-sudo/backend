require('dotenv').config()
const express = require('express')

const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/twitter', (req, res) => {
    res.send('govindbhadoriya')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>CHAI AUR CODE</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app lisening on port ${port}`)
})