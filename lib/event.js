var helpers = require('./helpers')

function Event() {

}
/**
 * return Events for the current user
 * @return [Array]
 * @param {Integer} limit
 * @param {String} cursor
 * @param {Timestamp} before_created_at
 * @param {Integer} type
 * @api public
 */
Event.prototype.list = function(limit, cursor, before_created_at, type) {
    var inner = function(callback) {
        global.socket.emit('/api/v1/events/list', {
            header: {
                Authorization: 'Bearer ' + global.accessToken
            },
            data: {
                limit: limit,
                cursor: cursor,
                before_created_at: before_created_at,
                type: type
            }
        }, function(body) {
            body = helpers.packageBody(body)
            callback(null, body)
        })
    }
    return helpers.run(arguments, inner)
}
/**
 * clean login events
 * @return {Object}
 * @api public
 */
Event.prototype.cleanLoginEvents = function(limit, cursor, before_created_at, type) {
    var inner = function(callback) {
        global.socket.emit('/api/v1/events/clean_login_events', {
            header: {
                Authorization: 'Bearer ' + global.accessToken
            }
        }, function(body) {
            body = helpers.packageBody(body)
            callback(null, body)
        })
    }
    return helpers.run(arguments, inner)
}
exports.Event = Event
