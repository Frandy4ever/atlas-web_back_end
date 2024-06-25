const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('rounds the first argument', () => {
    assert.strictEqual(calculateNumber(1.0, 0), 1);
    assert.strictEqual(calculateNumber(1.3, 0), 1);
    assert.strictEqual(calculateNumber(1.7, 0), 2);
  });

  it('rounds the second argument', () => {
    assert.strictEqual(calculateNumber(0, 1.0), 1);
    assert.strictEqual(calculateNumber(0, 1.3), 1);
    assert.strictEqual(calculateNumber(0, 1.7), 2);
  });

  it('returns the correct sum', () => {
    assert.strictEqual(calculateNumber(1.3, 0), 1);
    assert.strictEqual(calculateNumber(0, 1.2), 1);
    assert.strictEqual(calculateNumber(1.3, 1.3), 2);
    assert.strictEqual(calculateNumber(1.7, 1.2), 3);
    assert.strictEqual(calculateNumber(1.3, 1.8), 3);
    assert.strictEqual(calculateNumber(1.6, 1.8), 4);
  });

  it('handles negative numbers', () => {
    assert.strictEqual(calculateNumber(-1, 1), 0);
    assert.strictEqual(calculateNumber(1, -1), 0);
    assert.strictEqual(calculateNumber(-1, -1), -2);
  });

  it('checks arguments', () => {
    assert.strictEqual(isNaN(calculateNumber(1)), true);
    assert.strictEqual(isNaN(calculateNumber()), true);
  });

  it('handles decimals and rounding', () => {
    assert.strictEqual(calculateNumber(1.1, 2.2), 3);
    assert.strictEqual(calculateNumber(1.5, 1.5), 3);
    assert.strictEqual(calculateNumber(1.9, 2.1), 4);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('handles large numbers', () => {
    assert.strictEqual(calculateNumber(1000000, 2000000), 3000000);
    assert.strictEqual(calculateNumber(999999.9, 999999.9), 2000000);
  });
});
