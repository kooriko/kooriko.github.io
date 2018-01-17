# muddle
combine and compose connect-style middleware

## installation

    $ npm install muddle

## sample usage

`muddle` takes any number of middleware functions as arguments and aggregates them into one middleware function. Order is preserved:
    
    var connect = require('connect')
    var muddle = require('muddle')
    var middleware = muddle(
      connect.bodyParser(),
      connect.cookiedParser()
    )
    connect.use(middleware)

Of course, you can use any connect-style middleware like `function (req, res, next)` - it doesn't actually have to come from the connect module!

This is useful for encapsulating logic and composing middleware.

## tribute song lyrics

    Well, if I remain passive and you just want to cuddle
    Then we should be ok, and we won't get in a muddle
    Because we're seeing other people
    At least that's what we say we are doing

- "Seeing Other People", Belle and Sebastian

## license
MIT. (c) 2013 jden <jason@denizac.org>. See LICENSE.md
The lyrics, of course, are not mine. Thanks Stuart!