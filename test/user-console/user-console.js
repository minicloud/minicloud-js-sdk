var context = require('../context')
var assert = require('assert')
describe('users-console.js', function() {
    this.timeout(global.timeout)
    var Department = null
    var User = null
    var DeviceConsole = null
    var time = null
    before(function*(done) {
        yield context.init()
        var Client = require('../../lib')
        Department = new Client.Department()
        User = new Client.User()
        UserConsole = new Client.UserConsole()
        return done()
    })
    it('console/devices/list', function*(done) {
        var data = yield UserConsole.deviceList(global.departmentPath);
        data.status.should.equal(200)
        var data = yield UserConsole.deviceList();
        done()
    })
    it('console/events/list', function*(done) {
        var data = yield UserConsole.eventList(global.departmentPath);
        data.status.should.equal(200)
        done()
    })
    it('console/files/list', function*(done) {
        var data = yield UserConsole.fileList(global.departmentPath);
        data.status.should.equal(200)
        done()
    })
    it('console/online_devices/list', function*(done) {
        var data = yield UserConsole.onlineDeviceList(global.departmentPath);
        data.status.should.equal(200)
        done()
    })
    it('console/users/list', function*(done) {
        var data = yield UserConsole.userList(global.departmentPath);
        data.status.should.equal(200)
        var data = yield UserConsole.userList();
        data.status.should.equal(400)
        done()
    })

})