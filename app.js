const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
require('dotenv').config()

//MiddleWare
app.use(express.json())
app.use(bodyparser.json())
// Import ROUTES
const getUserRoute = require('./Routes/getUser')
app.use('/getUser', getUserRoute)
// Connect to DB
mongoose.connect(process.env.MONGODB_CONNECTION), console.log('Connected To MongoDB')

app.get('/', (req, res) => {
    res.send('We Are Home!!')
})
//Server Start
app.listen(5000, console.log('Api Started!!'))