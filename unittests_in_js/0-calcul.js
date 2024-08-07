/**
 * Calculates the sum of two numbers, rounding each number before summing.
 *
 * @param {number|string} a - The first number or a string representing a number.
 * @param {number|string} [b=0] - The second number or a string representing a number (default is 0).
 * @returns {number} The sum of the two rounded numbers.
 * @throws {TypeError} If either parameter is not a number or cannot be converted to a number.
 */
module.exports = function calculateNumber(a, b = 0) {
  const numA = Number(a);
  const numB = Number(b);
  
  if (Number.isNaN(numA) || Number.isNaN(numB))
    throw TypeError('Parameters must be numbers');
  
  return Math.round(numA) + Math.round(numB);
};
