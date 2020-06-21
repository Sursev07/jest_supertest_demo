const request = require('supertest');
const app = require('../app')
const {sequelize} = require('../models')
const { queryInterface } = sequelize;

afterAll(() => {
    //hapus isi data setelah test
    queryInterface
    .bulkDelete('Users', {})
    .then(() => done())
    .catch(err => done(err));
});


describe('POST /register', function() {
    it('responds with with status 201 and return message', function(done) {
      request(app)
        .post('/register')
        .send({email: 'john', password:'1234'})
        .set('Accept', 'application/json')
        .then(response => {
            const { body, status } = response;
            expect(status).toBe(201);
            expect(body).toHaveProperty('message', 'Successfully Register');
            done();
        })
    });
});

describe('POST /login', function() {
    it('responds with with status 201 and return message', function(done) {
      request(app)
        .post('/login')
        .send({email: 'john', password:'1234'})
        .set('Accept', 'application/json')
        .then(response => {
            const { body, status } = response;
            // console.log(response.error)
            expect(status).toBe(200);
            expect(body).toHaveProperty('access_token', expect.any(String));
            done();
        })
    });
});