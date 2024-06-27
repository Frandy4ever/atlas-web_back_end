const request = require('request');
const expect = require('chai').expect;

describe('Index page', () => {
  let server;

  before(function(done) {
    this.timeout(5000);
    server = require('./api');
    done();
  });

  after((done) => {
    server.close(done);
  });

  it('returns status code 200', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('returns correct message', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

});
