var helpers = require('./helpers')

function Tag() {}
/**
 * add a tag
 * @param {String} name  
 * @return {Object}    
 * @api public
 */
Tag.prototype.add = function(name) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/tags/add', {
                header: {
                    Authorization: 'Bearer ' + global.accessToken
                },
                data: {
                    name: name
                }
            }, function(body) {
                body = helpers.packageBody(body)
                callback(null, body)
            })
        }
        return helpers.run(arguments, inner)
    }
    /**
     * get current user's group list
     * @return [Array]    
     * @api public
     */
Tag.prototype.list = function() {
        var inner = function(callback) {
            global.socket.emit('/api/v1/tags/list', {
                header: {
                    Authorization: 'Bearer ' + global.accessToken
                }
            }, function(body) {
                body = helpers.packageBody(body)
                callback(null, body)
            })
        }
        return helpers.run(arguments, inner)
    }
    /**
     * add a file to the tag
     * @param {String} file_path
     * @param {String} name
     * @return {Object}     
     * @api public
     */
Tag.prototype.addFile = function(file_path, name) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/tags/files/add', {
                header: {
                    Authorization: 'Bearer ' + global.accessToken
                },
                data: {
                    file_path: file_path,
                    name: name
                }
            }, function(body) {
                body = helpers.packageBody(body)
                callback(null, body)
            })
        }
        return helpers.run(arguments, inner)
    }
    /**
     *get current file's tag list
     * @param {String} file_path
     * @return [Array]     
     * @api public
     */
Tag.prototype.getTagList = function(file_path) {
    var inner = function(callback) {
        global.socket.emit('/api/v1/tags/files/tags', {
            header: {
                Authorization: 'Bearer ' + global.accessToken
            },
            data: {
                file_path: file_path
            }
        }, function(body) {
            body = helpers.packageBody(body)
            callback(null, body)
        })
    }
    return helpers.run(arguments, inner)
}
/**
 * get all files in current tag
 * @param {String} name  
 * @return [Array]    
 * @api public
 */
Tag.prototype.getFileList = function(name) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/tags/files', {
                header: {
                    Authorization: 'Bearer ' + global.accessToken
                },
                data: {
                    name: name
                }
            }, function(body) {
                body = helpers.packageBody(body)
                callback(null, body)
            })
        }
        return helpers.run(arguments, inner)
    }
    /**
     * rename a tag
     * @param {String} old_name
     * @param {String} new_name
     * @return {Object}     
     * @api public
     */
Tag.prototype.rename = function(old_name, new_name) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/tags/rename', {
                header: {
                    Authorization: 'Bearer ' + global.accessToken
                },
                data: {
                    old_name: old_name,
                    new_name: new_name
                }
            }, function(body) {
                body = helpers.packageBody(body)
                callback(null, body)
            })
        }
        return helpers.run(arguments, inner)
    }
    /**
     * remove a file from the tag
     * @param {String} file_path
     * @param {String} name
     * @return {Object}     
     * @api public
     */
Tag.prototype.removeFile = function(file_path, name) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/tags/files/remove', {
                header: {
                    Authorization: 'Bearer ' + global.accessToken
                },
                data: {
                    file_path: file_path,
                    name: name
                }
            }, function(body) {
                body = helpers.packageBody(body)
                callback(null, body)
            })
        }
        return helpers.run(arguments, inner)
    }
/**
 * remove a tag
 * @param {String} name  
 * @return {Object}    
 * @api public
 */
Tag.prototype.remove = function(name) {
        var inner = function(callback) {
            global.socket.emit('/api/v1/tags/remove', {
                header: {
                    Authorization: 'Bearer ' + global.accessToken
                },
                data: {
                    name: name
                }
            }, function(body) {
                body = helpers.packageBody(body)
                callback(null, body)
            })
        }
        return helpers.run(arguments, inner)
    }

exports.Tag = Tag
