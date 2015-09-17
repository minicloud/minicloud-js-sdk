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
exports.Member = Member
