var File = require('./file').File  
var ClientSimpleFileUpload = require('./client-simple-file-upload').ClientSimpleFileUpload
var Member = require('./member').Member
var Oauth2 = require('./oauth2').Oauth2
var Department = require('./department').Department
var Device = require('./device').Device
var Event = require('./event').Event
var Group = require('./group').Group
var Tag = require('./tag').Tag
var MembersConsole = require('./members-console').MembersConsole
var FileDownload = require('./file-download').FileDownload
var Thumbnail = require('./file-thumbnail').Thumbnail
var Info = require('./info').Info
var ioc = require('socket.io-client')
var helpers = require('./helpers')
var URL = require('url')
module.exports.File = File
module.exports.ClientSimpleFileUpload = ClientSimpleFileUpload
module.exports.Member = Member
module.exports.Oauth2 = Oauth2
module.exports.Department = Department
module.exports.Group = Group
module.exports.Event = Event
module.exports.Console = File
module.exports.Device = Device
module.exports.Tag = Tag
module.exports.MembersConsole = MembersConsole
module.exports.FileDownload = FileDownload
module.exports.Thumbnail = Thumbnail
module.exports.Info = Info
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
