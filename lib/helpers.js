/**
 * package socket.io return body
 * @param {Object} body
 * @return {Object}
 * @api public
 */
exports.packageBody = function(body) {
        body = body || {}
        var status = 200
        if (body.error) {
            var code = body.code || 400
            status = code
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
    if (args.length > 0) {
        var lastArg = args[args.length - 1]
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
