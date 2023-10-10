import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { machine } from 'node:os';
const userInput = readline.createInterface({input, output});

let maand = await userInput.question('Geef een maand in:');

switch(maand){
    case 'januari':
    case 'maart':
    case 'mei':
    case 'juli':
    case 'augustus':
    case 'oktober':
    case 'december':
        console.log('Deze maand heeft 31 dagen.');
        break;
    case 'Februari':
        console.log('Deze maand heeft 28 dagen in een normaal jaar en 29 dagen in een shrikkeljaar.');
        break;
    case 'april':
    case 'juni':
    case 'september':
    case 'november':
        console.log('Deze maand heeft 30 dagen.');
        break;
    default :
        console.log('Je hebt geen geldige maand ingegeven.');
        break;
}

process.exit(); 