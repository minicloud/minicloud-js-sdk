var File = require('./file').File
var Member = require('./member').Member
var ioc = require('socket.io-client')
module.exports.File = File
module.exports.Member = Member
module.exports.Department = File
module.exports.Group = File
module.exports.Event = File
module.exports.Console = File
module.exports.Device = File
module.exports.Tag = File

module.exports.connect = function(host) {
    var url = 'ws://demo.minicloud.io'
    var socket = ioc(url, {})
    return function(done) {
        socket.on('connect', function() {
            done(null, socket)
        })
    }
}
module.exports.disconnect = function() {

}
