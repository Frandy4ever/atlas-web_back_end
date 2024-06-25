'use strict';

/**
 * Performs arithmetic operations on two numbers based on the specified type.
 * @param {string} type - The type of operation to perform ('SUM', 'SUBTRACT', 'DIVIDE').
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} The result of the arithmetic operation. Returns 'Error' if attempting to divide by zero.
 * @throws {Error} Throws an error if the type is unrecognized.
 */
const calculateNumber = (type, a, b) => {
  switch (type) {
    case 'SUM':
      return Math.round(a) + Math.round(b);
    case 'SUBTRACT':
      return Math.round(a) - Math.round(b);
    case 'DIVIDE':
      if (Math.round(b) === 0) return 'Error';
      return Math.round(a) / Math.round(b);
    default:
      throw new Error('Invalid operation type');
  }
};

module.exports = calculateNumber;
