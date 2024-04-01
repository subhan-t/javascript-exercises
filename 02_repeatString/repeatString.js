const repeatString = function (stringToRepeat, n) {
  if (n < 0) {
    return "ERROR";
  }
  let result = "";
  for (let i = 0; i < n; i++) {
    result += stringToRepeat;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
