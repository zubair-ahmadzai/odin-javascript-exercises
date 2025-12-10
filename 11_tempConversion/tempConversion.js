const convertToCelsius = function(value) {
  return roundToOneDecimal((value - 32) * (5/9));

};

const convertToFahrenheit = function(value) {
  return roundToOneDecimal((value * (9/5) + 32));
};

const roundToOneDecimal = function(value) {
  return Math.round(value * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
