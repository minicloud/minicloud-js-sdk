var context = require('../context')
var assert = require('assert')
describe('department.js', function() {
    this.timeout(global.timeout)
    var Department = null
    var User = null
    var time = null
    before(function*(done) {
        yield context.init()
        var Client = require('../../lib')
        Department = new Client.Department()
        User = new Client.User()
        return done()
    })
    it('department/add', function*(done) {
        time = Math.random()
        var data = yield Department.add('/minicloud_inc/aaa'+time)
        data.status.should.equal(200)
        var data2 = yield Department.add('/minicloud_inc/aaa'+time)
        data2.status.should.equal(409)
        var user = yield User.getMyAccount()
        yield Department.usersAdd('/minicloud_inc/aaa'+time,user.uuid)
        yield Department.add('/minicloud_inc/bbb'+time)
        yield Department.add('/minicloud_inc/ccc'+time)
        done()
    })
    it('department/children', function*(done) {
        var data = yield Department.children('/minicloud_inc/aaa'+time)
        data.status.should.equal(200)
        done()
    })
    it('department/users', function*(done) {
        var data = yield Department.users('/minicloud_inc/aaa'+time)
        data.status.should.equal(200)
        var data = yield Department.users('/minicloud_cni/'+time)
        data.status.should.equal(409)
        var data = yield Department.users()
        data.status.should.equal(400)
        done()
    })
    it('department/users/import', function*(done) {
        var data = yield Department.import([{"department-user":"/minicloud_inc222/market222"},{"department-user":"/minicloud_inc222/R&D222/office222"}])
        done()
    })
    it('department/users/remove', function*(done) {
        var user = yield User.getMyAccount()
        var data = yield Department.usersRemove('/minicloud_inc/aaa'+time,user.uuid)
        data.status.should.equal(200)
        done()
    })
    it('department/users/add', function*(done) {
        var user = yield User.getMyAccount()
        var data = yield Department.usersAdd('/minicloud_inc/aaa'+time,user.uuid)
        global.departmentPath = '/minicloud_inc/aaa'+time
        data.status.should.equal(200)
        var data = yield Department.usersAdd('/minicloud_incxxx/aaa'+time,user.uuid)//depart not exits
        data.status.should.equal(409)
        var data = yield Department.usersAdd('/minicloud_incxxx/aaa'+time,'xxx')//user not exits
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
