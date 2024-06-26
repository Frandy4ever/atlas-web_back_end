const SUM = 'SUM';
const SUBTRACT = 'SUBTRACT';
const DIVIDE = 'DIVIDE';

function isNegZero(n) {
  n = Number(n);
  return n === 0 && 1 / n === -Infinity;
}

/**
 * Performs a mathematical operation on two numbers after rounding them.
 *
 * @param {string} type - The type of operation to perform. Can be 'SUM', 'SUBTRACT', or 'DIVIDE'.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} The result of the operation, or 'ERROR' if division by zero occurs.
 * @throws {TypeError} If any of the arguments are not the expected types.
 */
module.exports = function calculateNumber(type, a, b = 0) {
  let numA = Number(a);
  let numB = Number(b);

  if (Number.isNaN(numA) || Number.isNaN(numB))
    throw TypeError('Parameters must be numbers or able to coerce to number');

  numA = Math.round(numA);
  numB = Math.round(numB);

  switch (type) {
    case SUM:
      return numA + numB;
    case SUBTRACT:
      return numA - numB;
    case DIVIDE:
      if (numB === 0) return 'ERROR';
      const quotient = numA / numB;
      return isNegZero(quotient) ? 0 : quotient;
    default:
      throw Error(
        'Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".'
      );
  }
};
