var context = require('../context')
var assert = require('assert')
var uuid = require('uuid')
describe('event.js', function() {
    this.timeout(global.timeout)
    var Event = null
    before(function*(done) {
        yield context.init()
        var Client = require('../../lib')
        Event = new Client.Event()
        return done()
    })
   it('events/list', function*(done) {
        var data = yield Event.list(100, ' ',null,null)
        data.status.should.equal(200)
        var data = yield Event.list('aq100', ' ',null,null)
       data.status.should.equal(400)
        done()
    })
   it('events/clean_login_events', function*(done) {
        var data = yield Event.cleanLoginEvents()
        data.status.should.equal(200)
        done()
    })
   
})