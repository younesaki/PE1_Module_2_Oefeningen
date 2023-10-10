import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let vraagEén = 'Wat is de hoofdstad van Frankrijk?';
let antwoordEén = 'Parijs' ;

let vraagTwee = 'Hoeveel planeten zijn er in ons zonnestelsel?';
let antwoordTwee = '9' ; 

let vraagDrie = 'Wat is het grootste zoogdier ter wereld?';
let antwoordDrie = 'Blauwe vinvis' ;

let vraagVier = "Wie schreef het toneelstuk 'Romeo en Julia'?";
let antwoordVier = 'Shakespeare' ;

let vraagVijf = 'Hoeveel poten heeft een spin?';
let antwoordVijf = '8' ; 

let antwoordenJuist = 0 ;


console.log('Welkom bij de quiz! Beantwoord de volgende 5 vragen:');
let antwoordEénGebruiker = await userInput.question(vraagEén);
console.log('Jouw antwoord:' + antwoordEénGebruiker);
if(antwoordEénGebruiker == antwoordEén){
    console.log('Goed antwoord!');
    antwoordenJuist++ ;
}else{
    console.log('Fout antwoord. Het juiste antwoord is:' + antwoordEén);
}

let antwoordTweeGebruiker = await userInput.question(vraagTwee);
console.log('Jouw antwoord:' + antwoordTweeGebruiker);
if(antwoordTweeGebruiker == antwoordTwee){
    console.log('Goed antwoord!');
    antwoordenJuist++ ;
}else{
    console.log('Fout antwoord. Het juiste antwoord is:' + antwoordTwee);
}


let antwoordDrieGebruiker = await userInput.question(vraagDrie);
console.log('Jouw antwoord:' + antwoordDrieGebruiker);
if(antwoordDrieGebruiker == antwoordDrie){
    console.log('Goed antwoord!');
    antwoordenJuist++;
}else{
    console.log('Fout antwoord. Het juiste antwoord is:' + antwoordDrie);
}

let antwoordVierGebruiker = await userInput.question(vraagVier);
console.log('Jouw antwoord:' + antwoordVierGebruiker);
if(antwoordVierGebruiker == antwoordVier){
    console.log('Goed antwoord!');
    antwoordenJuist++;
}else{
    console.log('Fout antwoord. Het juiste antwoord is:' + antwoordVier);
}

let antwoordVijfGebruiker = await userInput.question(vraagVijf);
console.log('Jouw antwoord:' + antwoordVijfGebruiker);
if(antwoordVijfGebruiker == antwoordVijf){
    console.log('Goed antwoord!');
    antwoordenJuist++ ;
}else{
    console.log('Fout antwoord. Het juiste antwoord is:' + antwoordVijf);
}

console.log('Je hebt ' + antwoordenJuist + ' vragen van de 5 vragen correct beantwoord.');


process.exit();

