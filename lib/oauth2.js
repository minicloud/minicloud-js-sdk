var helpers = require('./helpers')

function Oauth2() {

}

/**
 * return access_token by name+password
 * @param {String} name 
 * @param {String} password
 * @param {String} deviceName
 * @return {Object}
 * @api public
 */
Oauth2.prototype.token = function(name, password, deviceName) {
    var inner = function(callback) {
        global.socket.emit('/api/v1/oauth2/token', {
            data: {
                client_id: global.clientId,
                client_secret: global.clientSecret,
                device_name: deviceName,
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
exports.Oauth2 = Oauth2
