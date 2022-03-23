import * as fs from 'fs';
let array = fs.readFileSync('./Day_1/numbers.txt').toString().split("\n");
let count = 0;

for(let i = 1; i < array.length; i++){
    if((parseInt(array[i]) + parseInt(array[i+1]) + parseInt(array[i+2])) > (parseInt(array[i-1]) + parseInt(array[i]) +  parseInt(array[i+1]))) count++;
}

console.log(count);