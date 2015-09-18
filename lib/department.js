var helpers = require('./helpers')

function Department() {

}
/**
 * add department
 * @param {String} path  
 * @return {Object}
 * @api public
 */
Department.prototype.add = function(path) {
    var inner = function(callback) {
        global.socket.emit('/api/v1/departments/add', {
            header: {
                Authorization: 'Bearer ' + global.accessToken
            },
            data: {
                path: path
            }
        }, function(body) {
            body = helpers.packageBody(body)
            callback(null, body)
        })
    }

    return helpers.run(arguments, inner)
}

exports.Department = Department
