const sumAll = function (a, b) {
  let sum = 0;
  if (typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  } else if (a <= 0 || b <= 0) {
    return "ERROR";
  } else if (a > b) {
    sum = sumNumbers(b, a);
    return sum;
  } else {
    sum = sumNumbers(a, b);
    return sum;
  }
  function sumNumbers(a, b) {
    let sum = a;
    while (a < b) {
      a++;
      sum = sum + a;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
