function muddle(middlewareCalls) {
  var middlewareCalls = Array.prototype.slice.call(arguments)
  if (!middlewareCalls.length) {
    return function (req, res, next) {
      next()
    }
  }
  var i = 0
  return function (req, res, next) {
    var self = this
    var fn = middlewareCalls.reduceRight(function (nextFn, fn) {
      return fn.bind(self, req, res, nextFn)
    }, next)
    fn(res, res, next)
  }
}

module.exports = muddle