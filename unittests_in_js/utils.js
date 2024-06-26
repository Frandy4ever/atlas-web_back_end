const Utils = {
    calculateNumber: function (type, a, b = 0) {
      const SUM = 'SUM';
      const SUBTRACT = 'SUBTRACT';
      const DIVIDE = 'DIVIDE';
  
      function isNegZero(n) {
        n = Number(n);
        return n === 0 && 1 / n === -Infinity;
      }
  
      let numA = Number(a);
      let numB = Number(b);
  
      if (Number.isNaN(numA) || Number.isNaN(numB)) {
        throw new TypeError('Parameters must be numbers or able to coerce to number');
      }
  
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
          throw new Error('Invalid operation type. Valid types are "SUM", "SUBTRACT", and "DIVIDE".');
      }
    }
};
  
module.exports = Utils;
  