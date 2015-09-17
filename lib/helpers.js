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
    /** 
     * es6 support yield/es5 support callback 
     * @return {Object}
     * @api public
     */
exports.run = function(args, inner) {
    var callback = null
    var len = 0;
    for (var o in args) {
        len++
    }
    if (len > 0) {
        var lastArg = args[len - 1]
        if (typeof(lastArg) === 'function') {
            callback = lastArg
        }
    }
    if (callback) {
        return inner(callback)
    } else {
        return function(done) {
            inner(done)
        }
    }
}
