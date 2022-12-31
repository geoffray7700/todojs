const isName = false

//if (isName == true){
//console.log ('Bonjour Monsieur');}
//else {
//console.log ('Bonjour Madame');}

//ou avec un ternaire

//console.log( isName ? 'Bonjour Monsieur' : 'Bonjour Madame')

//console.log(isName);

let nb = 12;
const totalNumber = [2, 4, 8, 3]
const nbDivisible = totalNumber.filter(v => nb % v===0);

if (nbDivisible.length > 0) { 
    console.log('votre nombre est divisible par ' +nbDivisible.join(' et '));}
