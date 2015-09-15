var request = require('co-supertest')
var assert = require('assert')
describe('member.js', function() {
    this.timeout(30000)
    before(function*(done) {
        return done()
    })
    it('getApp', function*(done) {
        var client = require('../../lib')
        global.socket = yield client.connect()
        var MemberClient = client.Member
        var memberClient = new MemberClient()
        yield memberClient.register('jimtang', '123456')
        done()
    })
})
