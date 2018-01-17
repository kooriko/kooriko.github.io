# snap
session middleware for the truly lazy

sets up all the connect-style middleware you need for session and user management.

use it with [wham](https://npmjs.org/package/wham)!

## installation

    $ npm install snap

## example usage

with express:

    var http = require('http')
    var app = require('express')()
    var snap = require('snap')
    app.use(snap({secret: 'OH_SNAP'}))
    app.use(function (req, res) {
      res.send('sessions!')
    })
    http.createServer(app).listen(1234)


with [wham](https://npmjs.org/package/wham):

    var wham = require('wham')('Example')
    var snap = require('snap')
    wham(snap({secret: 'OH_SNAP'}))
    wham('log output', '/').get(function () {
      return 'sessions'!
    })
    wham.bam(1234)

## parameters

`snap` takes a `parameters` object.

### required

- `parameters.secret`: a string used for seeding the session cookie

### optional

- `parameters.store`: a `connect.session`-compatible SessionStore. Defaults to [connect-mongo](https://npmjs.org/packages/connect-mongo)

- `parameters.sessionDuration`: number in milliseconds of inactivity that session cookie should persist. Defaults to 30 days.

- `parameters.cookie`: A `connect.session` [cookie object](http://www.senchalabs.org/connect/session.html). Overrides `parameters.sessionDuration`.

## license

MIT. (c) 2013 jden <jason@denizac.org>. See LICENSE.md