var context = require('../context')
var assert = require('assert')
var uuid = require('uuid')
describe('member.js', function() {
    this.timeout(global.timeout)
    var Member = null
    before(function*(done) {
        yield context.init()
        var Client = require('../../lib')
        Member = new Client.Member()
        return done()
    })
    it('members/register', function*(done) {
        var name = uuid.v4()
        var data = yield Member.register(name, '123456')
        data.status.should.equal(200)
        data = yield Member.register(name, '123456')
        data.status.should.equal(409)
        data.error.should.equal('member_existed')
        done()
    })
    it('members/get_my_account', function*(done) {
        var data = yield Member.getMyAccount()
        data.status.should.equal(200)
        data.name.should.equal(global.userName)
        done()
    })
})
