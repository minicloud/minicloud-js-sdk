/**
 * package socket.io return body
 * @param {Object} body
 * @return {Object}
 * @api public
 */
exports.packageBody = function(body) {
    body = body || {}
    var status = 200
    if (body.code && body.error) {
        status = body.code
    }
    body.status = status
    return body
}
