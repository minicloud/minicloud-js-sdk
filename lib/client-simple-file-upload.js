var crypto = require('crypto')
var fs = require('fs')
var co = require('co')
var FileObject = require('./file').File
var File = new FileObject()

function ClientSimpleFileUpload(localPath, remotePath, mode, parentHash) {
    this.localPath = localPath
    this.remotePath = remotePath
    this.parentHash = parentHash
    this.mode = mode || 'overwrite'
}
/**
 * return upload session 
 * @return {Object}  
 * @api private
 */
ClientSimpleFileUpload.prototype._getSession = function() {
        var self = this
        return function(done) {
            global.socket.emit('/api/v1/files/upload_session/start', {
                header: {
                    Authorization: 'Bearer ' + global.accessToken
                }
            }, function(body) {
                self.session = body
                done(null, body)
            })
        }
    }
    /**
     * return file hash 
     * @return {Object}  
     * @api private
     */
ClientSimpleFileUpload.prototype._getLocalPathInfo = function() {
        var self = this
        return function(done) {
            var shasum = crypto.createHash('sha1')
            var stream = fs.ReadStream(self.localPath)
            stream.on('data', function(d) {
                shasum.update(d)
            })
            stream.on('end', function() {
                self.hash = shasum.digest('hex')
                fs.stat(self.localPath, function(err, stats) {
                    if (err) throw err
                        //get file modified time
                        //get file size
                    self.size = stats.size
                    self.mtime = stats.mtime
                    return done(null, null)
                })

            })
        }
    }
    /**
     * return storage server socket 
     * @return {Object}  
     * @api private
     */
ClientSimpleFileUpload.prototype._getStorageSocket = function() {
        return function(done) {
            //TODO support multi storage server by session
            done(null, global.socket)
        }
    }
    /**
     * upload finish 
     * @return {Object}  
     * @api private
     */
ClientSimpleFileUpload.prototype._finish = function() {
    var self = this
    return function(done) {
        global.socket.emit('/api/v1/files/upload_session/finish', {
            header: {
                Authorization: 'Bearer ' + global.accessToken
            },
            data: {
                session_id: self.session.session_id,
                hash: self.hash,
                path: self.remotePath,
                size: self.size,
                client_modified: self.mtime,
                parent_hash: self.parentHash,
                mode: self.mode
            }
        }, function(body) {
            done(null, body)
        })
    }
}
ClientSimpleFileUpload.prototype._upload = function*(done) {
        var self = this
            //get upload session
        var session = yield self._getSession()
            //get storage socket
        var storageSocket = yield self._getStorageSocket()

        //read file and push to storage socket server
        fs.readFile(self.localPath, function(err, buf) {
            storageSocket.emit('/api/v1/files/upload_session/send', {
                header: {
                    'MiniCloud-API-Arg': JSON.stringify({
                        session_id: session.session_id,
                        signature: session.signature,
                        time: session.time
                    })
                },
                buffer: buf
            }, function(body) {
                self.hash = body.hash
                self.size = body.size
                    //upload finish
                co.wrap(function*() {
                    var body = yield self._finish()
                    done(null, body)
                })()
            })
        })
    }
    /**
     * upload file 
     * @return {Object}  
     * @api public
     */
ClientSimpleFileUpload.prototype.run = function() {
    var self = this
    return function(done) {
        co.wrap(function*() {
            //get current file infomation
            yield self._getLocalPathInfo()
                //hash upload 

            var data = yield File.hashUpload(self.hash, self.remotePath, self.mtime, self.mode, self.parentHash)
            if (data.status === 200) {
                done(null, data)
            } else {
                yield self._upload(done)
            }
        })()
    }
}
exports.ClientSimpleFileUpload = ClientSimpleFileUpload
