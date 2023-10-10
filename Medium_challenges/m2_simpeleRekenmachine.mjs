import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Geef een getal:'));
let getal2 = parseFloat(await userInput.question('Geef een getal:'));
let bewerking = await userInput.question('Wilt u deze getallen optellen, aftrekken, vermenigvuldigen of delen?');

switch(bewerking){
    case 'optellen':
        let optelling = getal1 + getal2 ;
        console.log('De 2 getallen opgeteld zijn gelijk aan ' + optelling + '.');
        break;
    case 'aftrekken':
        let aftrekking = getal1 - getal2 ;
        console.log('De 2 getallen afgetrokken van elkaar zijn gelijk aan ' + aftrekking + '.' );
        break;
    case 'vermenigvuldigen':
        let vermenigvuldiging = getal1 * getal2 ;
        console.log('De 2 getallen met elkaar vermenigvuldigd zijn gelijk aan ' + vermenigvuldiging + '.');
        break;
    case 'delen':
        let deling = getal1 / getal2 ;
        console.log('De 2 getallen door elkaar gedeeld zijn gelijk aan ' + deling + '.');
        break;
    default: 
        console.log('Je hebt geen geldige bewerking ingevoer. (Geen hoofdletter)');
        break;
}

process.exit();