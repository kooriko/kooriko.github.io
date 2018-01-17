//mocha
var chai = require('chai')
chai.should()
var sinon = require('sinon')
chai.use(require('sinon-chai'))

var muddle = require('../index')

describe('muddle', function () {
  it('is transparent if called without arguments', function () {
    var spy = sinon.spy()
    var mw = muddle()
    mw({}, {}, spy)
    spy.should.have.been.called
  })
  it('aggregates middleware in order', function (done) {
    var callOrder = []
    var fn1 = function (q, s, n) {
      callOrder.push(1)
      fn1.call = arguments
      n()
    }
    var fn2 = function (q, s, n) {
      callOrder.push(2)
      fn2.call = arguments
      n()
    }
    var fn3 = function (q, s, n) {
      callOrder.push(3)
      fn3.call = arguments
      n()
    }

    var req = {}
    var res = {}
    var mw = muddle(fn1, fn2, fn3)

    mw(req, res, function () {
      callOrder.should.deep.equal([1,2,3])
      fn1.arguments[0].should.equal(req)
      fn1.arguments[1].should.equal(res)
      fn2.arguments[0].should.equal(req)
      fn2.arguments[1].should.equal(res)
      fn3.arguments[0].should.equal(req)
      fn3.arguments[1].should.equal(res)
      done()
    })

  })
})