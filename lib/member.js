var helpers = require('./helpers')

function Member() {

}
/**
 * register member
 * @param {String} name 
 * @param {String} password
 * @return {Object}
 * @api public
 */
Member.prototype.register = function(name, password) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/members/register', {
                data: {
                    name: name,
                    password: password
                }
            }, function(body) {
                body = helpers.packageBody(body)
                callback(null, body)
            })
        }

        return helpers.run(arguments, inner)
    }
    /**
     * return account detail 
     * @return {Object}
     * @api public
     */
Member.prototype.getMyAccount = function() {
        var inner = function(callback) {
            global.socket.emit('/api/v1/members/get_my_account', {
                header: {
                    Authorization: 'Bearer ' + global.accessToken
                },
            }, function(body) {
                body = helpers.packageBody(body)
                callback(null, body)
            })
        }
        return helpers.run(arguments, inner)
    }
    /**
     * return status
     * @return {Object}
     * @param {String} oldPassword
     * @param {String} newPassword
     * @api public
     */
Member.prototype.resetPassword = function(oldPassword, newPassword) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/members/reset_password', {
                header: {
                    Authorization: 'Bearer ' + global.accessToken
                },
                data: {
                    old_password: oldPassword,
                    new_password: newPassword
                }
            }, function(body) {
                body = helpers.packageBody(body)
                callback(null, body)
            })
        }
        return helpers.run(arguments, inner)
    }
    /**
     * return user infomation list
     * @return [Array]
     * @param {Integer} limit
     * @param {String} cursor
     * @api public
     */
Member.prototype.list = function(limit, cursor) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/members/list', {
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
     * return user list
     * @return [Array]
     * @param {String} key
     * @param {Integer} limit
     * @param {String} cursor
     * @api public
     */
Member.prototype.search = function(key, limit, cursor) {
    var inner = function(callback) {
        global.socket.emit('/api/v1/members/search', {
            header: {
                Authorization: 'Bearer ' + global.accessToken
            },
            data: {
                key: key,
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
     * return user list
     * @return {Object}
     * @param {String} nick
     * @param {String} email
     * @param {String} avatar
     * @api public
     */
Member.prototype.setProfile = function(nick, email, avatar) {
    var inner = function(callback) {
        global.socket.emit('/api/v1/members/set_profile', {
            header: {
                Authorization: 'Bearer ' + global.accessToken
            },
            data: {
                nick: nick,
                email: email,
                avatar: avatar
            }
        }, function(body) {
            body = helpers.packageBody(body)
            callback(null, body)
        })
    }
    return helpers.run(arguments, inner)
}

exports.Member = Member
