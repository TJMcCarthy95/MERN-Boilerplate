const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const Config = require('./config/config.js')
const items = require('./routes/api/items.js')

const app = express()

// Bodyparser Middleware
app.use(bodyParser.json())

// DB Config
const db = Config.mongoURI

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log("Unable to connect to MongoDB - Check config file"));

// Use Routes
app.use('/api/items', items)

// Serve static assets for production
if(process.env.NODE_ENV === 'production'){
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log('Server started on port ' + port));
