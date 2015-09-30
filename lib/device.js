var helpers = require('./helpers')

function Device() {

}
/**
 * return devices for the current user
 * @return {Object}
 * @param {Integer} limit
 * @param {String} cursor
 * @api public
 */
Device.prototype.list = function(limit, cursor) {
    var inner = function(callback) {
        global.socket.emit('/api/v1/devices/list', {
            header: {
                Authorization: 'Bearer ' + global.accessToken
            },
            data: {
                limit: limit,
                cursor: cursor
            }
        }, function(body) {
            body = helpers.packageBody(body)
            callback(null, body)
        })
    }
    return helpers.run(arguments, inner)
}
/**
 * remove one or more devices
 * @return {Object}
 * @param {Integer} limit
 * @param {String} cursor
 * @api public
 */
Device.prototype.remove = function(uuid) {
    var inner = function(callback) {
        global.socket.emit('/api/v1/devices/remove', {
            header: {
                Authorization: 'Bearer ' + global.accessToken
            },
            data: {
                uuid:uuid
            }
        }, function(body) {
            body = helpers.packageBody(body)
            callback(null, body)
        })
    }
    return helpers.run(arguments, inner)
}
exports.Device = Device
