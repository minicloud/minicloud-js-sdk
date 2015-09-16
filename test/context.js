global.timeout = 30000
    /**
     * Return init socket 
     * @api public
     */
exports.init = function*() {
    if (!global.socket) {
        var client = require('../lib') 
        yield client.connect('http://demo.minicloud.io')
    }
}
