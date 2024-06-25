const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('checks basic addition', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(3.7, 1), 5);
    assert.strictEqual(calculateNumber(3.7, 1.2), 5);
  });

  it('handles negative numbers', () => {
    assert.strictEqual(calculateNumber(-1, 1), 0);
    assert.strictEqual(calculateNumber(1, -1), 0);
    assert.strictEqual(calculateNumber(-1, -1), -2);
  });

  it('handles decimals and rounding', () => {
    assert.strictEqual(calculateNumber(1.1, 2.2), 3);
    assert.strictEqual(calculateNumber(1.5, 1.5), 3);
    assert.strictEqual(calculateNumber(1.9, 2.1), 4);
  });

  it('handles large numbers', () => {
    assert.strictEqual(calculateNumber(1000000, 2000000), 3000000);
  });
});
