var context = require('../context')
var assert = require('assert')
describe('file.js', function() {
    this.timeout(global.timeout)
    var Group = null
    var Member = null
    var File = null
    before(function*(done) {
        yield context.init()
        var Client = require('../../lib')
        File = new Client.File()
        Member = new Client.Member()
        return done()
    })
    it('file/create_folder', function*(done) {
        var data = yield File.createFolder('/image/123/test/abc/de')
       
        data.status.should.equal(200)
        var data = yield File.createFolder()
        data.status.should.equal(400)
        done()
    })
    it('file/get_metadata', function*(done) {
        var data = yield File.getMetadata('/image/123/test/abc/de')
        data.status.should.equal(200)
        var data = yield File.getMetadata()
        data.status.should.equal(400)
        var data = yield File.getMetadata('/hifhiwh4h')
        data.status.should.equal(409)
        done()
    })
    it('file/list_folder', function*(done) {
        var data = yield File.listFolder('/image', 'abcd', 10)
        data.status.should.equal(200)
        var data = yield File.listFolder('/image', 'abcd', 'a10')
        data.status.should.equal(400)
        var data = yield File.listFolder('/hifhiwh4h', 'abcd', 10)
        data.status.should.equal(409)
        done()
    })
    it('file/copy', function*(done) {
        var data = yield File.copy('/image/123/test/abc', 'image/abc')
        data.status.should.equal(200)
        var data = yield File.copy()
        data.status.should.equal(400)
        var data = yield File.copy('/hifhiwh4h', 'image/abc')
        data.status.should.equal(409)
        done()
    })
    it('file/move', function*(done) {
        var data = yield File.move('/image/123/test/abc/de', '/abc (1)/de')
        data.status.should.equal(200)
        var data = yield File.move()
        data.status.should.equal(400)
        var data = yield File.move('/hifhiwh4h', 'image/abc')
        data.status.should.equal(409)
        done()
    })
    it('file/delete', function*(done) {
        var data = yield File.delete('/image/abc')
        data.status.should.equal(200)
        var data = yield File.delete()
        data.status.should.equal(400)
        var data = yield File.delete('/hifhiwh4h')
        data.status.should.equal(409)
        done()
    })




})
