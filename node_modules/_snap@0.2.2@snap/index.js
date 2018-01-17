var passport = require('passport')
var connect = require('connect')
var muddle = require('muddle')
var store
var mongo
try {
  store = require('connect-mongo')(connect)
  mongo = require('mongodb').MongoClient
} catch (e) {}

var DAYS_MS = 24*60*60*1000
var defaultOpts = {
  sessionDuration: 30 * DAYS_MS,
  connectionString: 'mongodb://localhost:27017/',
  collection: 'snapSessions',
  store: (!store || !mongo) ? false : function (cb) {
    var opts = this
    mongo.connect(opts.connectionString, function (err, db) {
      if (err) return cb(err)
      try {
        store = new store({db: db, collection: opts.collection})
        cb(null, store)
      } catch (e) {
        cb(e)
      }
    })
  }
}

// @param pipeline - an object with a `.use` method which takes a connect-style middleware function
// @param params - an object with properties as parameters (see)
// @returns void
module.exports = function snap(pipeline, params, cb) {
  if (typeof params !== 'object') throw new Error('Missing required parameter: params must be an object')
  if (!params.secret) throw new Error('Missing required parameter: secret')
  withDefaults(params)
console.log(params)
  if (!params.store || !params.connectionString) throw new Error('Session Store not available. Provide your own with the `store` parameter or run `$ npm install`.')

  bounce.call(params, params.store, function (err, store) {
    if (err) {
      if (cb) { cb(err) } else { throw err }
    }

    pipeline.use(muddle(
      connect.cookieParser(),
      connect.session({secret: params.secret, store: store, cookie: params.sessionCookie || {maxAge: params.sessionDuration}}),
      passport.initialize(),
      passport.session()
    ))
    process.nextTick(function () { cb() })
  })
}

function withDefaults(params) {
  Object.keys(defaultOpts).forEach(function (opt) {
    if (!params.hasOwnProperty(opt)) {
      params[opt] = defaultOpts[opt]
    }
  })
}

function bounce(thunk, fn) {
  if (typeof thunk === 'function') {
    thunk.call(this, fn)
  } else {
    fn.call(this, fn)
  }
}