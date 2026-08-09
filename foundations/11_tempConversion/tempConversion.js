const convertToCelsius = function(x) {
  const celsius = (x - 32) * 5/9
  return parseFloat(celsius).toFixed(1)
};

const convertToFahrenheit = function(x) {
  const fahrenheit = (x * 9/5 + 32)
  return parseFloat(fahrenheit).toFixed(1)
};
/*
NOTES: This solution returns a string. To return a number, do something like:
return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
*/

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
