var helpers = require('./helpers')

function FileDownload() {

}

/**
 * Download a file from a user's minicloud.(method:POST)
 * @param {String} path
 * @param {String} revHash 
 * @param {Number}  onlineView
 * @return {Object}  
 * @api public
 */
FileDownload.prototype.download = function(path, revHash, onlineView) {
    var inner = function(callback) {
        global.socket.emit('/api/v1/files/download', {
            header: {
                Authorization: 'Bearer ' + global.accessToken
            },
            data: {
                path: path,
                rev_hash: revHash,
                online_view: onlineView
            }
        }, function(body) { 
            body = helpers.packageBody(body)
            callback(null, body)
        })
    }
    return helpers.run(arguments, inner)
}
exports.FileDownload = FileDownload
