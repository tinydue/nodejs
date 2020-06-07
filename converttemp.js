"use strict";

let celsius = process.argv[2];

let fahrenheit = (celsius * (9/5)) + 32;

console.log(celsius, "Celsius is", fahrenheit, "in Fahrenheit");


let meters = process.argv[3];

let feet = meters / 0.3048;

console.log(meters, "Meters is", feet, "Feet");

let liters = process.argv[4];

let gallons = liters * 0.264172;

console.log(liters, "Liters is", gallons, "liters");