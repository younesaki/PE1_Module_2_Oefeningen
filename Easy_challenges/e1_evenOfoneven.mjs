import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question('Geef een getal:'));

if( getal%2 == 0 ){

    console.log('even');
}else{
    console.log('oneven');
}

process.exit();