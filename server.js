require('dotenv').config()
const express = require('express')
const { join } = require('path')

const app = express()
// middleware- express.static gives our server a folder of static files to serve up from our server to our front end and serve to our browser
app.use(express.static(join(__dirname,'client','build')))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

// app.use(require('./routes'))

require('./config')
    .then(()=> app.listen(3001))
    .catch(e => console.error(e))

