'use strict';

let counter = 0;
let bounter = 0;
let sounter = 10;

while(sounter > -1) {
    console.log(sounter);
    sounter--;
}

while(counter < 5) {
    console.log(counter);
    counter++;   
}

while(true) {

    if(bounter >= 5) {
        break;
    }
    console.log(bounter);
    bounter++;
}

for(let i = 0; i < 5; i++) {
    console.log("Hello", i);
    if(i < 2) {
        console.log(counter);
    }
}

for(let j = 10; j > 0; j--) {
    console.log("Sammy!", j);
}