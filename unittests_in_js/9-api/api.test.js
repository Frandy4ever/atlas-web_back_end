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

  it('returns status code 200 for /', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('returns correct message for /', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  describe('Cart page', () => {
    it('returns status code 200 when :id is a number', (done) => {
      request.get('http://localhost:7865/cart/12', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('returns correct message when :id is a number', (done) => {
      request.get('http://localhost:7865/cart/12', (error, response, body) => {
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('returns status code 404 when :id is not a number', (done) => {
      request.get('http://localhost:7865/cart/hello', (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });

    it('returns correct error message when :id is not a number', (done) => {
      request.get('http://localhost:7865/cart/hello', (error, response, body) => {
        expect(body).to.equal('Invalid cart ID');
        done();
      });
    });
  });
});
