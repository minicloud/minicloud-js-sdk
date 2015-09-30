var context = require('../context')
var assert = require('assert')
describe('file-download.js', function() {
    this.timeout(global.timeout)
    var Group = null
    var User = null
    var FileDownload = null
    before(function*(done) {
        yield context.init()
        var Client = require('../../lib')
        FileDownload = new Client.FileDownload()
        User = new Client.User()
        return done()
    })
   it('file/file-download', function*(done) {
        // var data = yield FileDownload.download('/home/test-files/lt-1k.js')
        // data.status.should.equal(200)
        //  var data = yield FileDownload.download()
        //  data.status.should.equal(400)
        // var data = yield FileDownload.download('/home/test-files/lt-1k321.js')
        // data.status.should.equal(409)
        // var data = yield FileDownload.download('/home/test-files/lt-1k.js','1122')
        // data.status.should.equal(409)
        done()
    })
})