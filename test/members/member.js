var request = require('co-supertest')
var context = require('../context')
var assert = require('assert')
describe('member.js', function() {
    this.timeout(global.timeout)
    var memberClient = null
    before(function*(done) {
        yield context.init()
        var ClientSDK = require('../../lib')
        var MemberClient = ClientSDK.Member
        memberClient = new MemberClient()
        return done()
    })
    it('register', function*(done) {
        var body = yield memberClient.register('jimtang', '123456')
        console.log(body)
        done()
    })
})
