const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
// do not log query string
logger.token('url', (req, res) => req._parsedUrl.pathname)

const ONE_HOUR = 60 * 60 * 1000

const { verify: verifySession } = require('./middleware/session')
const db = require('./db')
const RandomString = require('randomstring')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const sessionStore = new SequelizeStore({
  db,
  expiration: ONE_HOUR, // session expires every hour
})
sessionStore.sync()

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const searchRouter = require('./routes/search')
const loginRouter = require('./routes/login')
const logoutRouter = require('./routes/logout')
const tweetRouter = require('./routes/tweet')
const ballotsRouter = require('./routes/ballots')
const optoutRouter = require('./routes/optout')
//const voteRouter = require('./routes/vote')
const identityRouter = require('./routes/identity')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(
  session({
    secret: RandomString.generate(),
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    maxAge: ONE_HOUR,
  })
)
app.use(verifySession)

//app.use('/api', express.static(path.join(__dirname, 'public')))
app.use('/api/users', usersRouter)
app.use('/api/search', searchRouter)
app.use('/api/login', loginRouter)
app.use('/api/logout', logoutRouter)
app.use('/api/tweet', tweetRouter)
app.use('/api/ballots', ballotsRouter)
//app.use('/api/vote', voteRouter)
app.use('/api/optout', optoutRouter)
app.use('/api/identity', identityRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  const status = err.status || 500
  res.status(status)
  res.json({ error: { status, message: err.message } })
})

module.exports = app
