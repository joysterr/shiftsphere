const express = require('express')
const session = require('express-session')
const logger = require('morgan')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const brcypt = require('bcryptjs')
const mongoose = require('mongoose')

const app = express()
const port = 3000

// routers
const apiRouter = require('./routes/apiRoute')

// db setup + config
mongoose.connect(process.env.DB_URI)
    .then(console.log('dev: db connected'))
    .catch(err => console.error(err))

// middleware
app.use(logger('dev'))
app.use(express.static('public'))
app.use(express.json())
app.use(session({ secret: "cats", resave: false, saveUninitialized: true }))
app.use(passport.session())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/api', apiRouter)

// init server
app.listen(port, () => {
    console.log(`dev: server running at localhost:${port}`)
})