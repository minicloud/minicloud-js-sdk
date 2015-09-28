var context = require('../context')
var assert = require('assert')
describe('file-thumbnail.js', function() {
    this.timeout(global.timeout)
    var Group = null
    var Member = null
    var Thumbnail = null
    before(function*(done) {
        yield context.init()
        var Client = require('../../lib')
        Thumbnail = new Client.Thumbnail()
        Member = new Client.Member()
        return done()
    })
   it('file/file-thumbnail', function*(done) {
        var data = yield Thumbnail.thumbnail('/home/test-files/test.jpg')
        data.status.should.equal(200)
       var data = yield Thumbnail.thumbnail()
        data.status.should.equal(400)
         var data = yield Thumbnail.thumbnail('/home/test-files/test111.jpg')
        data.status.should.equal(409)
        done()
    })
   
})