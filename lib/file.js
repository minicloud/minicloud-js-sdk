var helpers = require('./helpers')

function File() {}
/**
 * create folder
 * @param {String} path 
 * @return {Object}  
 * @api public
 */
File.prototype.createFolder = function(path) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/files/create_folder', {
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
    /**
     * Returns the metadata for a file or folder.
     * @param {String} path
     * @return {Object}  
     * @api public
     */
File.prototype.getMetadata = function(path) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/files/get_metadata', {
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
    /**
     * Returns the contents of a folder
     * @param {String} path 
     * @param {String} cursor 
     * @param {Integer} limit 
     * @return {Object} 
     * @api public
     */
File.prototype.listFolder = function(path, cursor, limit) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/files/list_folder', {
                header: {
                    Authorization: 'Bearer ' + global.accessToken
                },
                data: {
                    path: path,
                    cursor: cursor,
                    limit: limit
                }
            }, function(body) {
                body = helpers.packageBody(body)
                callback(null, body)
            })
        }
        return helpers.run(arguments, inner)
    }
    /**
     * Copy a file or folder to a different destination in the user's miniyun.
     * @param {String} from_path 
     * @param {String} to_path 
     * @return {Object} 
     * @api public
     */
File.prototype.copy = function(from_path, to_path) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/files/copy', {
                header: {
                    Authorization: 'Bearer ' + global.accessToken
                },
                data: {
                    from_path: from_path,
                    to_path: to_path
                }
            }, function(body) {
                body = helpers.packageBody(body)
                callback(null, body)
            })
        }
        return helpers.run(arguments, inner)
    }
    /**
     * Move a file or folder to a different destination
     * @param {String} from_path 
     * @param {String} to_path 
     * @return {Object} 
     * @api public
     */
File.prototype.move = function(from_path, to_path) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/files/move', {
                header: {
                    Authorization: 'Bearer ' + global.accessToken
                },
                data: {
                    from_path: from_path,
                    to_path: to_path
                }
            }, function(body) {
                body = helpers.packageBody(body)
                callback(null, body)
            })
        }
        return helpers.run(arguments, inner)
    }
    /**
     * Delete the file or folder at a given path
     * @param {String} path 
     * @return {Object} 
     * @api public
     */
File.prototype.delete = function(path) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/files/delete', {
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
    /**
     * hash upload file
     * @param {String} hash  
     * @param {String} path
     * @param {Date} clientModified
     * @param {Date} mode
     * @param {Date} parentHash
     * @return {Object}  
     * @api public
     */
File.prototype.hashUpload = function(hash, path, clientModified, mode, parentHash) {
        mode = mode || 'overwrite'
        var inner = function(callback) {
            global.socket.emit('/api/v1/files/hash_upload', {
                header: {
                    Authorization: 'Bearer ' + global.accessToken
                },
                data: {
                    hash: hash,
                    path: path,
                    client_modified: clientModified,
                    parent_hash: parentHash,
                    mode: mode
                }
            }, function(body) {
                body = helpers.packageBody(body)
                callback(null, body)
            })
        }
        return helpers.run(arguments, inner)
    }
    /**
     * Return revisions of a file
     * @param {String} path 
     * @return [Array]
     * @api public
     */
File.prototype.listRevision = function(path) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/files/list_revision', {
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
    /**
     * hash upload file
     * @param {String} path
     * @param {String} hash 
     * @return {Object}  
     * @api public
     */
File.prototype.restore = function( path,hash) {
    var inner = function(callback) {
        global.socket.emit('/api/v1/files/restore', {
            header: {
                Authorization: 'Bearer ' + global.accessToken
            },
            data: {
                path: path,
                hash: hash
            }
        }, function(body) {
            body = helpers.packageBody(body)
            callback(null, body)
        })
    }
    return helpers.run(arguments, inner)
}

exports.File = File
