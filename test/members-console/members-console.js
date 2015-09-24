var context = require('../context')
var assert = require('assert')
describe('members-console.js', function() {
    this.timeout(global.timeout)
    var Department = null
    var Member = null
    var DevicesConsole = null
    var time = null
    before(function*(done) {
        yield context.init()
        var Client = require('../../lib')
        Department = new Client.Department()
        Member = new Client.Member()
        MembersConsole = new Client.MembersConsole()
        return done()
    })
    it('console/devices/list', function*(done) {
        var data = yield MembersConsole.deviceList(global.departmentPath);
        data.status.should.equal(200)
        var data = yield MembersConsole.deviceList();
        done()
    })
    it('console/events/list', function*(done) {
        var data = yield MembersConsole.eventList(global.departmentPath);
        data.status.should.equal(200)
        done()
    })
    it('console/files/list', function*(done) {
        var data = yield MembersConsole.fileList(global.departmentPath);
        data.status.should.equal(200)
        done()
    })
    it('console/online_devices/list', function*(done) {
        var data = yield MembersConsole.onlineDeviceList(global.departmentPath);
        data.status.should.equal(200)
        done()
    })
    it('console/members/list', function*(done) {
        var data = yield MembersConsole.memberList(global.departmentPath);
        data.status.should.equal(200)
        var data = yield MembersConsole.memberList();
        data.status.should.equal(400)
        done()
    })

})