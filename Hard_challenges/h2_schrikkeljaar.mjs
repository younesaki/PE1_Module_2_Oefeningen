import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let jaartal = parseFloat(await userInput.question("Geef een jaartal:"));

if(jaartal%4 == 0 && jaartal%100 != 0){
    console.log("Februari heeft in dat jaar 29 dagen.");
}else if(jaartal%4 == 0 && jaartal%100 == 0){
    console.log("Februari heeft in dat jaar 28 dagen.");
}else if(jaartal%4 == 0 && jaartal%100 != 0 && jaartal%400 == 0){
    console.log("Februari heeft in dat jaar 29 dagen.");
}

process.exit();