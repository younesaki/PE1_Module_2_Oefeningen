import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question("Geef een getal:"));
let getal2 = parseFloat(await userInput.question("Geef een getal:"));
let getal3 = parseFloat(await userInput.question("Geef een getal:"));
let getal4 = parseFloat(await userInput.question("Geef een getal:"));
let getal5 = parseFloat(await userInput.question("Geef een getal:"));

let gemiddelde = (getal1 + getal2 + getal3 + getal4 + getal5)/5 ;

if( getal1 > getal2 && getal1 > getal3 && getal1 > getal4 && getal1 > getal5 ){
    console.log("Het grootste getal is " + getal1);
}else if(getal2 > getal1 && getal2 > getal3 && getal2 > getal4 && getal2 > getal5){
    console.log("Het grootste getal is " + getal2);
}else if(getal3 > getal2 && getal3 > getal1 && getal3 > getal4 && getal3 > getal5){
    console.log("Het grootste getal is " + getal3);
}else if(getal4 > getal2 && getal4 > getal3 && getal4 > getal1 && getal4 > getal5){
    console.log("Het grootste getal is " + getal4);
}else{
    console.log("Het grootste getal is " + getal5);
}

if( getal1 < getal2 && getal1 < getal3 && getal1 < getal4 && getal1 < getal5 ){
    console.log("Het kleinste getal is " + getal1);
}else if(getal2 < getal1 && getal2 < getal3 && getal2 < getal4 && getal2 < getal5){
    console.log("Het kleinste getal is " + getal2);
}else if(getal3 < getal2 && getal3 < getal1 && getal3 < getal4 && getal3 < getal5){
    console.log("Het kleinste getal is " + getal3);
}else if(getal4 < getal2 && getal4 < getal3 && getal4 < getal1 && getal4 < getal5){
    console.log("Het kleinste getal is " + getal4);
}else{
    console.log("Het kleinste getal is " + getal5);
}

console.log("Het gemiddelde is gelijk aan " + gemiddelde);

process.exit();

