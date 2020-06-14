'use strict';

let temperature = process.argv[2];

while(temperature < 20.0){

    temperature++


if(temperature < 20.0) {   
     console.log("Activating Heating", temperature);
       }

else {
    console.log("Temperature is Normal");
}

}

while(temperature > 35.0) {

    temperature--

if(temperature > 35.0) {
    console.log("Room is Overheating! Danger", temperature); 
}

else {
    console.log("Temperature is Normal");
}

}