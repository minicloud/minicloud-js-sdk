var File = require('./file').File
var Member = require('./member').Member
var ioc = require('socket.io-client')
var URL = require('url')
module.exports.File = File
module.exports.Member = Member
module.exports.Department = File
module.exports.Group = File
module.exports.Event = File
module.exports.Console = File
module.exports.Device = File
module.exports.Tag = File

module.exports.connect = function(url) {
    var info = URL.parse(url)
    var url = 'ws://' + info.host
    var socket = ioc(url, {})
    return function(done) {
        socket.on('connect', function() { 
            global.socket = socket
            done(null, null)
        })
        socket.on('disconnect', function() {
            global.socket = null
        })
    }
}
