const { expect } = require('chai');
const sinon = require('sinon');

const utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber with correct arguments and log the correct message', () => {
    const stub = sinon.stub(utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');

    const apiRequestRes = sendPaymentRequestToApi(100, 20);

    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledWithExactly('The total is: 10')).to.be.true;
    expect(apiRequestRes).to.equal(10);

    stub.restore();
    consoleSpy.restore();
  });
});
