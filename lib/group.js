var helpers = require('./helpers')


function Group() {

}
/**
 * add group
 * @param {String} name  
 * @return {Object}
 * @api public
 */
Group.prototype.add = function(name) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/groups/add', {
                header: {
                    Authorization: 'Bearer ' + global.accessToken
                },
                data: {
                    name: name
                }
            }, function(body) {
                body = helpers.packageBody(body)
                callback(null, body)
            })
        }
        return helpers.run(arguments, inner)
    }
    /**
     * get current user's group list
     * @return [Array]
     * @api public
     */
Group.prototype.list = function() {
        var inner = function(callback) {
            global.socket.emit('/api/v1/groups/list', {
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
    /**
     * add a user to the group
     * @param {String} name  
     * @param {String} uuid 
     * @return {Object} 
     * @api public
     */
Group.prototype.addUser = function(name, uuid) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/groups/users/add', {
                header: {
                    Authorization: 'Bearer ' + global.accessToken
                },
                data: {
                    name: name,
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
     * get users in current group
     * @param {String} name 
     * @return {Object}      
     * @api public
     */
Group.prototype.getUserList = function(name) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/groups/users', {
                header: {
                    Authorization: 'Bearer ' + global.accessToken
                },
                data: {
                    name: name
                }
            }, function(body) {
                body = helpers.packageBody(body)
                callback(null, body)
            })
        }
        return helpers.run(arguments, inner)
    }
    /**
     * rename a group
     * @param {String} old_name 
     * @param {String} new_name 
     * @return {Object}
     * @api public
     */
Group.prototype.rename = function(old_name, new_name) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/groups/rename', {
                header: {
                    Authorization: 'Bearer ' + global.accessToken
                },
                data: {
                    old_name: old_name,
                    new_name: new_name
                }
            }, function(body) {
                body = helpers.packageBody(body)
                callback(null, body)
            })
        }
        return helpers.run(arguments, inner)
    }
    /**
     *remove a user from the group
     * @param {String} name  
     * @param {String} uuid
     * @return {Object}       
     * @api public
     */
Group.prototype.removeUser = function(name, uuid) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/groups/users/remove', {
                header: {
                    Authorization: 'Bearer ' + global.accessToken
                },
                data: {
                    name: name,
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
     * remove a group
     * @param {String} name 
     * @return {Object}     
     * @api public
     */
Group.prototype.remove = function(name) {
    var inner = function(callback) {
        global.socket.emit('/api/v1/groups/remove', {
            header: {
                Authorization: 'Bearer ' + global.accessToken
            },
            data: {
                name: name
            }
        }, function(body) {
            body = helpers.packageBody(body)
            callback(null, body)
        })
    }
    return helpers.run(arguments, inner)
}

exports.Group = Group
