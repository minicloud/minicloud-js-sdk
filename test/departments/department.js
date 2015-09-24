var context = require('../context')
var assert = require('assert')
describe('department.js', function() {
    this.timeout(global.timeout)
    var Department = null
    var Member = null
    var time = null
    before(function*(done) {
        yield context.init()
        var Client = require('../../lib')
        Department = new Client.Department()
        Member = new Client.Member()
        return done()
    })
    it('department/add', function*(done) {
        time = Math.random()
        var data = yield Department.add('/minicloud_inc/aaa'+time)
        data.status.should.equal(200)
        var data2 = yield Department.add('/minicloud_inc/aaa'+time)
        data2.status.should.equal(409)
        var user = yield Member.getMyAccount()
        yield Department.membersAdd('/minicloud_inc/aaa'+time,user.uuid)
        yield Department.add('/minicloud_inc/bbb'+time)
        yield Department.add('/minicloud_inc/ccc'+time)
        done()
    })
    it('department/children', function*(done) {
        var data = yield Department.children('/minicloud_inc/aaa'+time)
        data.status.should.equal(200)
        done()
    })
    it('department/members', function*(done) {
        var data = yield Department.members('/minicloud_inc/aaa'+time)
        data.status.should.equal(200)
        var data = yield Department.members('/minicloud_cni/'+time)
        data.status.should.equal(409)
        var data = yield Department.members()
        data.status.should.equal(400)
        done()
    })
    it('department/members/import', function*(done) {
        var data = yield Department.import([{"department-member":"/minicloud_inc222/market222"},{"department-member":"/minicloud_inc222/R&D222/office222"}])
        done()
    })
    it('department/members/remove', function*(done) {
        var user = yield Member.getMyAccount()
        var data = yield Department.membersRemove('/minicloud_inc/aaa'+time,user.uuid)
        data.status.should.equal(200)
        done()
    })
    it('department/members/add', function*(done) {
        var user = yield Member.getMyAccount()
        var data = yield Department.membersAdd('/minicloud_inc/aaa'+time,user.uuid)
        global.departmentPath = '/minicloud_inc/aaa'+time
        data.status.should.equal(200)
        var data = yield Department.membersAdd('/minicloud_incxxx/aaa'+time,user.uuid)//depart not exits
        data.status.should.equal(409)
        var data = yield Department.membersAdd('/minicloud_incxxx/aaa'+time,'xxx')//member not exits
        data.status.should.equal(409)
        done()
    })
    it('department/remove', function*(done) {
        var data = yield Department.remove('/minicloud_inc/bbb'+time)
        data.status.should.equal(200)
        var data = yield Department.remove('/minicloud_inc/bbb'+time)//not exits
        data.status.should.equal(409)
        var data = yield Department.remove('/minicloud_incxxx/aaa'+time)//remain users
        data.status.should.equal(409)
        done()
    })
    it('department/rename', function*(done) {
        var data = yield Department.rename('/minicloud_inc/ccc'+time,'/minicloud_inc/ccc(new)'+time)
        data.status.should.equal(200)
        var data = yield Department.rename('/minicloud_inc/ccc'+time,'/minicloud_inc/ccc(new)'+time)
        data.status.should.equal(409)
        var data = yield Department.rename('/'+time,'/minicloud_inc/ccc(new)'+time)
        data.status.should.equal(409)
        done()
    })
})
