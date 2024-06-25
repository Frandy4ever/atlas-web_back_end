const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-1, 1), 0);
    assert.strictEqual(calculateNumber(1, -1), 0);
    assert.strictEqual(calculateNumber(-1, -1), -2);
  });

  it('should handle decimals correctly', () => {
    assert.strictEqual(calculateNumber(1.1, 2.2), 3);   // Expected value remains 3
    assert.strictEqual(calculateNumber(1.5, 1.5), 3);   // Expected value remains 3
    assert.strictEqual(calculateNumber(1.9, 2.1), 4);   // Expected value remains 4
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);   // Adding new test case
  });

  it('should handle large numbers correctly', () => {
    assert.strictEqual(calculateNumber(1000000, 2000000), 3000000);
  });
});
