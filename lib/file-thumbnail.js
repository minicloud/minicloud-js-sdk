var helpers = require('./helpers')

function Thumbnail() {

}

/**
 * Get a thumbnail for an image
 * @param {String} path
 * @param {String} size 
 * @return {Object}  
 * @api public
 */
Thumbnail.prototype.thumbnail = function(path, size) {
    var inner = function(callback) {
        global.socket.emit('/api/v1/files/thumbnail', {
            header: {
                Authorization: 'Bearer ' + global.accessToken
            },
            data: {
                path: path,
                size:size
            }
        }, function(body) {
            body = helpers.packageBody(body)
            callback(null, body)
        })
    }
    return helpers.run(arguments, inner)
}
exports.Thumbnail = Thumbnail