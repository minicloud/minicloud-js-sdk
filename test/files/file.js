var request = require('co-supertest') 
var assert = require('assert')
describe('file.js', function() {
    this.timeout(30000) 
    var app = null 
    var MiniApp = null 
    before(function*(done) { 
        return done()
    }) 
    it('getApp', function*(done) {
        var FileClient = require('../../lib/').File
        var fileClient = new FileClient()
        fileClient.createFile()
        done()
    })     
})
