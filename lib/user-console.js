var helpers = require('./helpers')

function UserConsole() {

}
/**
 * register UserConsole
 * @param {String} departmentPath 
 * @param optional {Integer} limit 
 * @param optional {String} cursor 
 * @return {Object}
 * @api public
 */
UserConsole.prototype.deviceList = function(departmentPath, limit, cursor) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/console/devices/list', {
                header: {
                    Authorization: 'Bearer ' + global.accessToken
                },
                data: {
                    department_path: departmentPath,
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
     * register UserConsole
     * @param {String} departmentPath 
     * @param optional {Integer} limit 
     * @param optional {String} cursor 
     * @return {Object}
     * @api public
     */
UserConsole.prototype.eventList = function(departmentPath, limit, cursor) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/console/event/list', {
                header: {
                    Authorization: 'Bearer ' + global.accessToken
                },
                data: {
                    department_path: departmentPath,
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
     * register UserConsole
     * @param {String} departmentPath 
     * @param optional {Integer} limit 
     * @param optional {String} cursor 
     * @return {Object}
     * @api public
     */
UserConsole.prototype.fileList = function(departmentPath, limit, cursor) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/console/files/list', {
                header: {
                    Authorization: 'Bearer ' + global.accessToken
                },
                data: {
                    department_path: departmentPath,
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
     * register UserConsole
     * @param {String} departmentPath 
     * @param optional {Integer} limit 
     * @param optional {String} cursor 
     * @return {Object}
     * @api public
     */
UserConsole.prototype.onlineDeviceList = function(departmentPath, limit, cursor) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/console/online_devices/list', {
                header: {
                    Authorization: 'Bearer ' + global.accessToken
                },
                data: {
                    department_path: departmentPath,
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
     * register UserConsole
     * @param {String} departmentPath 
     * @param optional {Integer} limit 
     * @param optional {String} cursor 
     * @return {Object}
     * @api public
     */
UserConsole.prototype.userList = function(departmentPath, limit, cursor,conditionKey,conditionAdmin,conditionDisabled) {
    var inner = function(callback) {
        global.socket.emit('/api/v1/console/users/list', {
            header: {
                Authorization: 'Bearer ' + global.accessToken
            },
            data: {
                department_path: departmentPath,
                limit: limit,
                cursor: cursor,
                condition_key:conditionKey,
                condition_admin:conditionAdmin,
                condition_disabled:conditionDisabled
            }
        }, function(body) {
            body = helpers.packageBody(body)
            callback(null, body)
        })
    }

    return helpers.run(arguments, inner)
}
exports.UserConsole = UserConsole
