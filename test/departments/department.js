var context = require('../context')
var assert = require('assert') 
describe('department.js', function() {
    this.timeout(global.timeout)
    var Department = null
    before(function*(done) {
        yield context.init()
        var Client = require('../../lib')
        Department = new Client.Department()
        return done()
    })
    it('department/add', function*(done) { 
        var data = yield Department.add('/minicloud_inc/R&D/chengdu_offce'+Math.random())
        data.status.should.equal(200) 
        done()
    })

})
