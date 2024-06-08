const convertToCelsius = function (tempFarenheit) {
  let tempCelsius = Math.round((tempFarenheit - 32) * (5 / 9) * 10) / 10;
  return tempCelsius;
};

const convertToFahrenheit = function (tempCelsius) {
  let tempFarenheit = Math.round((tempCelsius * (9 / 5) + 32) * 10) / 10;
  return tempFarenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
