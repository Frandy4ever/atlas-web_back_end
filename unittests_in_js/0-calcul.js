'use strict';

/**
 * Calculates the sum of two numbers after rounding them.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The rounded sum of a and b.
 */
const calculateNumber = (a, b) => {
  return Math.ceil(a) + Math.round(b);
};

module.exports = calculateNumber;
