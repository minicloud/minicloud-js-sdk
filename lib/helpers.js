exports.packageBody = function(body) {
    var status = 200
    if (body.code && body.error) {
        status = body.code
    }
    body.statusCode = status
    return body
}
