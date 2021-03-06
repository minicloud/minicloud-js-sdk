var helpers = require('./helpers')

function Department() {

}
/**
 * add department
 * @param {String} path  
 * @return {Object}
 * @api public
 */
Department.prototype.add = function(path) {
    var inner = function(callback) {
        global.socket.emit('/api/v1/departments/add', {
            header: {
                Authorization: 'Bearer ' + global.accessToken
            },
            data: {
                path: path
            }
        }, function(body) {
            body = helpers.packageBody(body)
            callback(null, body)
        })
    }

    return helpers.run(arguments, inner)
}
/**
 * get children departments.
 * @param {String} path  
 * @return {Object}
 * @api public
 */
Department.prototype.children = function(path) {
    var inner = function(callback) {
        global.socket.emit('/api/v1/departments/children', {
            header: {
                Authorization: 'Bearer ' + global.accessToken
            },
            data: {
                path: path
            }
        }, function(body) {
            body = helpers.packageBody(body)
            callback(null, body)
        })
    }

    return helpers.run(arguments, inner)
}
/**
 * get the child users under the department
 * @param {String} path  
 * @return {Object}
 * @api public
 */
Department.prototype.users = function(path) {
    var inner = function(callback) {
        global.socket.emit('/api/v1/departments/users', {
            header: {
                Authorization: 'Bearer ' + global.accessToken
            },
            data: {
                path: path
            }
        }, function(body) {
            body = helpers.packageBody(body)
            callback(null, body)
        })
    }

    return helpers.run(arguments, inner)
}
/**
 * bind user to department
 * @param {String} path  
 * @param {String} uuid  
 * @return {Object}
 * @api public
 */
Department.prototype.usersAdd = function(path,uuid) {
    var inner = function(callback) {
        global.socket.emit('/api/v1/departments/users/add', {
            header: {
                Authorization: 'Bearer ' + global.accessToken
            },
            data: {
                path: path,
                uuid: uuid
            }
        }, function(body) {
            body = helpers.packageBody(body)
            callback(null, body)
        })
    }

    return helpers.run(arguments, inner)
}
/**
 * remove user from department
 * @param {String} path  
 * @param {String} uuid  
 * @return {Object}
 * @api public
 */
Department.prototype.usersRemove = function(path,uuid) {
    var inner = function(callback) {
        global.socket.emit('/api/v1/departments/users/remove', {
            header: {
                Authorization: 'Bearer ' + global.accessToken
            },
            data: {
                path: path,
                uuid: uuid
            }
        }, function(body) {
            body = helpers.packageBody(body)
            callback(null, body)
        })
    }

    return helpers.run(arguments, inner)
}

/**
 * import departments
 * @param {Object} data
 * @return {Object}
 * @api public
 */
Department.prototype.import = function(data) {
    var inner = function(callback) {
        global.socket.emit('/api/v1/departments/import', {
            header: {
                Authorization: 'Bearer ' + global.accessToken
            },
            data: {
                data: data
            }
        }, function(body) {
            body = helpers.packageBody(body)
            callback(null, body)
        })
    }

    return helpers.run(arguments, inner)
}
/**
 * remove department
 * @param {String} path
 * @return {Object}
 * @api public
 */
Department.prototype.remove = function(path) {
    var inner = function(callback) {
        global.socket.emit('/api/v1/departments/remove', {
            header: {
                Authorization: 'Bearer ' + global.accessToken
            },
            data: {
                path: path
            }
        }, function(body) {
            body = helpers.packageBody(body)
            callback(null, body)
        })
    }

    return helpers.run(arguments, inner)
}
/**
 * rename department
 * @param {String} path  
 * @param {String} newName  
 * @return {Object}
 * @api public
 */
Department.prototype.rename = function(path,newName) {
    var inner = function(callback) {
        global.socket.emit('/api/v1/departments/rename', {
            header: {
                Authorization: 'Bearer ' + global.accessToken
            },
            data: {
                path: path,
                new_name: newName
            }
        }, function(body) {
            body = helpers.packageBody(body)
            callback(null, body)
        })
    }

    return helpers.run(arguments, inner)
}

exports.Department = Department
