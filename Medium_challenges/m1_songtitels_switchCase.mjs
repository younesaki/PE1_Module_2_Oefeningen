import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let artiest1 = 'Dave' ;
let artiest2 = 'Central Cee' ;
let artiest3 = 'PNL' ;
let artiest4 = 'Morad' ;

console.log('Kies een artiest');
console.log('1. ' + artiest1);
console.log('2. ' + artiest2);
console.log('3. ' + artiest3);  
console.log('4. ' + artiest4); 
let gebruikersKeuze = await userInput.question('Geef je keuze in:');

switch(gebruikersKeuze){
    case '1':
        console.log('Je hebt gekozen voor de artiest Dave. Hij is de artiest achter de hit: Verdansk');
        break;
    case '2':
        console.log('Je hebt gekozen voor de artiest Central Cee. Hij is de artiest achter de hit: Doja');
        break;
    case '3':
        console.log('Je hebt gekozen voor PNL. Zij zijn de artiesten achter de hit: DA');
        break;
    case '4':
        console.log('Je hebt gekozen voor Morad. Hij is de artiest achter de hit: Pelele');
        break;
    default:
        console.log('Je moet het getal ingeven dat voor de artiest staat.');
        break;
}

process.exit();