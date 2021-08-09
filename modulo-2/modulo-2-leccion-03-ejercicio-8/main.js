'use strict';

const newYear = 2025;

if(newYear % 4 === 0) {
    console.log(`${newYear} es un año bisiesto`);
}
else if(newYear+1 % 4 === 0) {
    console.log(`El siguiente año bisiesto será en ${newYear+1}`);
}  else if(newYear+2 % 4 === 0) {
    console.log(`El siguiente año bisiesto será en ${newYear+2}`);
} else {
    console.log(`El siguiente año bisiesto será en ${newYear+3}`);
}