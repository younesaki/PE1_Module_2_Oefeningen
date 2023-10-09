import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { machine } from 'node:os';
const userInput = readline.createInterface({input, output});

const maximum = 100 ;
const minimum = 0 ;

let getal = parseFloat(await userInput.question('Geef een getal:'));

if( getal > minimum && getal < maximum){
    console.log('Je getal ' + getal + ' ligt tussen ' + maximum + ' en ' + minimum + '.');
}

