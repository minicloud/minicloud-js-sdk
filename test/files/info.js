var context = require('../context')
var assert = require('assert')
describe('info.js', function() {
    this.timeout(global.timeout)
    var Group = null
    var ClientSimpleFileUpload = null
    var Info = null
    before(function*(done) {
        yield context.init()
        var Client = require('../../lib')
        Info = new Client.Info()
        ClientSimpleFileUpload = new Client.ClientSimpleFileUpload()
        return done()
    })
    it('status/info', function*(done) {
        var data1 = yield ClientSimpleFileUpload._getSession()
        var data = yield Info.info(data1.session_id, data1.signature, data1.time)
        data.status.should.equal(200)
        var data = yield Info.info()
        data.status.should.equal(400)
        done()
    })
})
