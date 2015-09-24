var context = require('../context')
var assert = require('assert')
var uuid = require('uuid')
describe('tag.js', function() {
    this.timeout(global.timeout)
    var Tag = null
    var File = null
    before(function*(done) {
        yield context.init()
        var Client = require('../../lib')
        Tag = new Client.Tag()
        File = new Client.File()
        return done()
    })
    it('tag/add', function*(done) {
        var data = yield Tag.add('green')
         var data = yield Tag.add('white')
        var data = yield Tag.add('green')
        data.status.should.equal(409)
        var data = yield Tag.add()
        data.status.should.equal(400)
        done()
    })
    it('tag/list', function*(done) {
        var data = yield Tag.list()
        data.status.should.equal(200)
        done()
    })
    it('tag/files/add', function*(done) {
        var data = yield Tag.addFile('image/123/test', 'green')
        data.status.should.equal(200)
        var data = yield Tag.addFile()
        data.status.should.equal(400)
        var data = yield Tag.addFile('image/123/test11', 'green')
        data.status.should.equal(409)
        var data = yield Tag.addFile('image/123/test', 'green1234')
        data.status.should.equal(409)
        done()
    })
    it('tag/files/tags', function*(done) {
        var data = yield Tag.getTagList('image/123/test')
        data.status.should.equal(200)
        var data = yield Tag.getTagList()
        data.status.should.equal(400)
        var data = yield Tag.getTagList('image/123/test11')
        data.status.should.equal(409)
        
        done()
    })
 it('tag/files', function*(done) {
        var data = yield Tag.getFileList('green')
        console.log(data)
        data.status.should.equal(200)
        var data = yield Tag.getFileList()
        data.status.should.equal(400)
        done()
    })
it('tag/rename', function*(done) {
        var data = yield Tag.rename('green', 'green')
        data.status.should.equal(200)
         var data = yield Tag.rename()
        data.status.should.equal(400)
        var data = yield Tag.rename('green111', 'green')
        data.status.should.equal(409)
        var data = yield Tag.rename('white111', 'green111')
         data.status.should.equal(409)
        done()
    })
 it('tag/files/remove', function*(done) {
        var data = yield Tag.removeFile('image/123/test', 'green')
        data.status.should.equal(200)
        var data = yield Tag.removeFile()
        data.status.should.equal(400)
        var data = yield Tag.removeFile('image/123/test11', 'green')
        data.status.should.equal(409)
        var data = yield Tag.removeFile('image/123/test', 'green1234')
        data.status.should.equal(409)
        done()
    })
it('tag/remove', function*(done) {
        var data = yield Tag.remove('green')
        data.status.should.equal(200)
        var data = yield Tag.remove()
        data.status.should.equal(400)
        var data = yield Tag.remove('green1234e')
        data.status.should.equal(409)
        done()
    })


})