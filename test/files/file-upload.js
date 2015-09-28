var context = require('../context')
var assert = require('assert')
describe('client-simple-file-upload.js', function() {
    this.timeout(global.timeout)
    before(function*(done) {
        yield context.init() 
        return done()
    })
    it('file/upload simple file upload', function*(done) {
        var Client = require('../../lib')
        var localPath = './test/test-files/lt-1k.js'
        var remotePath = '/home/test-files/lt-1k.js'
        var uploader = new Client.ClientSimpleFileUpload(localPath, remotePath)
        var data = yield uploader.run()
        data.name.should.equal('lt-1k.js')
        done()
    })
    it('file/upload simple file upload', function*(done) {
        var Client = require('../../lib')
        var localPath = './test/test-files/test.jpg'
        var remotePath = '/home/test-files/test.jpg'
        var uploader = new Client.ClientSimpleFileUpload(localPath, remotePath)
        var data = yield uploader.run()
        data.name.should.equal('test.jpg')
        done()
    })
    it('file/upload hash upload', function*(done) {
        var Client = require('../../lib')
        var localPath = './test/test-files/lt-1k.js'
        var remotePath = '/home/test-files/lt-测试.js'
        var uploader = new Client.ClientSimpleFileUpload(localPath, remotePath)
        var data = yield uploader.run()
        data.name.should.equal('lt-测试.js')
        done()
    })
})
