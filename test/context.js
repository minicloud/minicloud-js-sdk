global.timeout = 30000
var uuid = require('uuid')
    /**
     * Return init test case 
     * @api public
     */
exports.init = function*() {
    if (!global.socket) { 
        var Client = require('../lib')
            //set current access device is web app
        var clientId = 'JsQCsjF3yr7KACyT'
        var clientSecret = 'bqGeM4Yrjs3tncJZ'
        yield Client.connect('http://demo.minicloudjs.com', clientId, clientSecret)
            //user login
        var Oauth2 = new Client.Oauth2()
        data = yield Oauth2.token('admin', 'admin', 'js-sdk') 
        if (data.status === 200) {
            //set access token
            Client.setAccessToken(data.access_token)
            global.userName = 'admin'
        }
    }
}
