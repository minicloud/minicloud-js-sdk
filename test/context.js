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
        yield Client.connect('http://demo.minicloud.io', clientId, clientSecret)
            //create member
        var Member = new Client.Member()
        var name = uuid.v4()
        var data = yield Member.register(name, '123456')
        if (data.status === 200) {
            //member login
            var Oauth2 = new Client.Oauth2()
            data = yield Oauth2.token(name, '123456', 'js-sdk')
            if (data.status === 200) {
                //set access token
                Client.setAccessToken(data.access_token)
                global.userName = name
            }
        }
    }
}
