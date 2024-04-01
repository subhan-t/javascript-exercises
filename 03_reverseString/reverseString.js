const reverseString = function (reverse) {
  const tempArr = reverse.split("");
  let revString = "";
  for (i = tempArr.length - 1; i > -1; i--) {
    revString = revString + tempArr[i];
  }
  return revString;
};

// Do not edit below this line
module.exports = reverseString;
