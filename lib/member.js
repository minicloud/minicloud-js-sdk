var helpers = require('./helpers')

function Member() {

}
Member.prototype.register = function(name, password) {
    return function(done) {
        global.socket.emit('/api/v1/members/register', {
            data: {
                name: name,
                password: password
            }
        }, function(body) {
            body = helpers.packageBody(body)
            done(null, body)
        })
    }
}
exports.Member = Member
