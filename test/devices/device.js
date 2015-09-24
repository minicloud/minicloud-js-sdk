var context = require('../context')
var assert = require('assert')
var uuid = require('uuid')
describe('device.js', function() {
    this.timeout(global.timeout)
    var Device = null
    before(function*(done) {
        yield context.init()
        var Client = require('../../lib')
        Device = new Client.Device()
        return done()
    })
   it('devices/list', function*(done) {
        var data = yield Device.list(10, 'abcd')
        data.status.should.equal(200)
        var data = yield Device.list('a100', 'abcd')
        data.status.should.equal(400)
        done()
    })
    
})