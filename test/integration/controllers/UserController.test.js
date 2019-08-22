var supertest = require('supertest');

describe('UserController', function() {

    describe('#getAll()', function() {
        it('should get all the users successfully', function(done) {
            supertest(sails.hooks.http.app)
                .get('/users')
                .expect(200, done)
        })
    })
})