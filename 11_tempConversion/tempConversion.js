const convertToCelsius = function (fahrenheit) {
  let res = ((fahrenheit - 32) * 5) / 9;
  res = parseFloat(res.toFixed(1));
  return res;
};

const convertToFahrenheit = function (celsius) {
  let res = (celsius * 9) / 5 + 32;
  res = parseFloat(res.toFixed(1));
  return res;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
