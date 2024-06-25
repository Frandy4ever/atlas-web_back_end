const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('checks basic arithmetic operations', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1), 3);
    assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
    assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
  });

  it('handles negative numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -1, 1), -2);
    assert.strictEqual(calculateNumber('SUBTRACT', 1, -1), 2);
    assert.strictEqual(calculateNumber('SUBTRACT', -1, -1), 0);
  });

  it('handles division by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 10, 0), 'Error');
  });

  it('handles invalid operation types', () => {
    assert.throws(() => calculateNumber('INVALID', 1, 2), Error);
  });

  it('handles missing arguments', () => {
    assert.strictEqual(isNaN(calculateNumber('SUM', 1)), true);
    assert.strictEqual(isNaN(calculateNumber('SUM')), true);
  });
});
