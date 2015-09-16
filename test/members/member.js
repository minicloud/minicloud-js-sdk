var context = require('../context')
var assert = require('assert')
var uuid = require('uuid')
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
    it('members/register', function*(done) {
        var name = uuid.v4()
        var data = yield memberClient.register(name, '123456')
        data.status.should.equal(200)
        data = yield memberClient.register(name, '123456')
        data.status.should.equal(409)
        data.error.should.equal('member_existed')
        done()
    })
})
