const express = require('express')
require('dotenv').config()
const process = require('process')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

console.log('IS THIS WORKING?', process.env)
app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
