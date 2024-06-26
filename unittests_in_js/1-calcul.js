/**
 * Performs a mathematical operation on two numbers after rounding them.
 *
 * @param {string} type - The type of operation to perform. Can be 'SUM', 'SUBTRACT', or 'DIVIDE'.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} The result of the operation, or 'Error' if division by zero occurs.
 * @throws {TypeError} If any of the arguments are not the expected types.
 */
module.exports = function calculateNumber(type, a, b) {
  const numA = Number(a);
  const numB = Number(b);

  if (Number.isNaN(numA) || Number.isNaN(numB)) {
    throw new TypeError('Parameters must be numbers');
  }

  switch (type) {
    case 'SUM':
      return Math.round(numA) + Math.round(numB);
    case 'SUBTRACT':
      return Math.round(numA) - Math.round(numB);
    case 'DIVIDE':
      if (Math.round(numB) === 0) return 'Error';
      return Math.round(numA) / Math.round(numB);
    default:
      throw new TypeError('Invalid operation type');
  }
};
