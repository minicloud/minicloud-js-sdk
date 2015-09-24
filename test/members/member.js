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
        data = yield Member.register()
        data.status.should.equal(400)
        done()
    })
    it('members/get_my_account', function*(done) {
        var data = yield Member.getMyAccount()
        data.status.should.equal(200)
        data.name.should.equal(global.userName)
        done()
    })
    it('members/reset_password', function*(done) {
        var data = yield Member.resetPassword('admin', 'admin')
        data.status.should.equal(200)
        var data = yield Member.resetPassword()
        data.status.should.equal(400)
        var data = yield Member.resetPassword('adminaaa', 'admin')
        data.status.should.equal(409)
        done()
    })
    it('members/list', function*(done) {
        var data = yield Member.list(100, 'abcd')
        data.status.should.equal(200)
        var data = yield Member.list('aa10', 'abccd')
        data.status.should.equal(400)
        done()
    })
    it('members/search', function*(done) {
        var data = yield Member.search('adm', 100, 'abcd')
        data.status.should.equal(200)
        var data = yield Member.search()
        data.status.should.equal(400)
        done()
    })
    it('members/set_profile', function*(done) {
        var data = yield Member.setProfile('admin', 'jim@minicloud.io', '/images/jim-avatar.png')
        data.status.should.equal(200)
        var data = yield Member.setProfile('admin', 'jimminicloud.io', '/images/jim-avatar.png')
        data.status.should.equal(400)
        done()
    })


})
