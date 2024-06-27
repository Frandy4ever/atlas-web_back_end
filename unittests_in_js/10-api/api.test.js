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

  describe('Login endpoint', () => {
    it('returns correct message for POST /login', (done) => {
      const options = {
        method: 'POST',
        url: 'http://localhost:7865/login',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName: 'Betty' })
      };

      request(options, (error, response, body) => {
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });

  describe('Available Payments endpoint', () => {
    it('returns correct structure and values for GET /available_payments', (done) => {
      request.get('http://localhost:7865/available_payments', (error, response, body) => {
        const expectedPaymentMethods = {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        };

        expect(JSON.parse(body)).to.deep.equal(expectedPaymentMethods);
        done();
      });
    });
  });
});
