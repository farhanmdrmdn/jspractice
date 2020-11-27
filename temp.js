const kelvin = 0;
//Today's forecast
const celsius = kelvin - 273;
//Celsius is 273 degrees less than Kelvin
let fahrenheit = celsius *(9/5) + 32;
//var named fahrenheit
fahrenheit = Math.floor(fahrenheit);
//number rounded down.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);