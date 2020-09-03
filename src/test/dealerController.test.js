const app = require('../index');
const request = require('supertest');

describe('GET /', () => {
  it('should require authorization', done => {
    request(app)
      .get('/boticario/acquisition')
      .expect(401, done);
  });

  var auth = {};
  before(loginUser(auth))

  it('should respond with 200 OK', done => {
      request(app)
      .get('/boticario/acquisition')
      .set('Authorization', `bearer: ${auth.token}`)
      .expect(200, done);
  });
});

function loginUser(auth) {
  return function(done) {
      request(app)
          .get('/boticario/authenticate')
          .expect(200)
          .end(onResponse);

      function onResponse(err, res) {
          auth.token = res.body.token;
          return done();
      }
  };
}