const express = require('express')
const process = require('process')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})

app.get('/health', (req, res) => {
  console.log('health check')
  res.send('ok')
})
