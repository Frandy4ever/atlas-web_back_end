/**
 * Calculates the sum of two numbers, rounding each number before summing.
 *
 * @param {number|string} a - The first number or a string representing a number.
 * @param {number|string} [b=0] - The second number or a string representing a number (default is 0).
 * @returns {number} The sum of the two rounded numbers.
 * @throws {TypeError} If either parameter is not a number or cannot be converted to a number.
 */
function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
