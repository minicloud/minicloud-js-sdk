var File = require('./file').File
var Member = require('./member').Member
var Oauth2 = require('./oauth2').Oauth2
var Department = require('./department').Department
var ioc = require('socket.io-client')
var helpers = require('./helpers')
var URL = require('url')
module.exports.File = File
module.exports.Member = Member
module.exports.Oauth2 = Oauth2
module.exports.Department = Department
module.exports.Group = File
module.exports.Event = File
module.exports.Console = File
module.exports.Device = File
module.exports.Tag = File
    /**
     * connect minicloud host
     * @param {String} url
     * @param {String} clientId 
     * @param {String} clientSecret 
     * @api public
     */
module.exports.connect = function(url, clientId, clientSecret) {
        var info = URL.parse(url)
        var url = 'ws://' + info.host
        var socket = ioc(url, {})
        var inner = function(callback) {
            socket.on('connect', function() {
                global.socket = socket
                global.clientId = clientId
                global.clientSecret = clientSecret
                callback(null, null)
            })
            socket.on('disconnect', function() {
                global.socket = null
                global.clientId = null
                global.clientSecret = null
                global.accessToken = null
            })
        }
        return helpers.run(arguments, inner)
    }
    /**
     * set access token
     * @param {String} accessToken 
     * @api public
     */
module.exports.setAccessToken = function(accessToken) {
    global.accessToken = accessToken
}
