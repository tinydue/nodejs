'use strict';

console.log(Math.PI);

let counter = 0;
let denominator = 1;
let sign = 1;
let sum = 0;

while(counter < 1000000) {

    let term = sign * 1/denominator;

    // sum += term means sum = sum + term
    sum += term;

    sign = sign * -1;
    denominator += 2;   
    counter++;
}

let pi = sum * 4;
console.log(pi);