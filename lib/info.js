var helpers = require('./helpers')

function Info() {

}

/**
 * return minicloud-storage server disk space use state
 * @param {String} sessionId
 * @param {String} signature 
 * @param {Integer} time 
 * @return {Object}  
 * @api public
 */
Info.prototype.info = function(sessionId, signature, time) {
    var inner = function(callback) {
        global.socket.emit('/api/v1/status/info', {
            header: {
                Authorization: 'Bearer ' + global.accessToken
            },
            data: {
                session_id: sessionId,
                signature: signature,
                time: time
            }
        }, function(body) {
            body = helpers.packageBody(body)
            callback(null, body)
        })
    }
    return helpers.run(arguments, inner)
}
exports.Info = Info
