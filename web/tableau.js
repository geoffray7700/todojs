// déclarer un tableau
const t1 = [];
const t2 = Array();
const t3 = new Array();

t1.push('Hello');
t1.push('World');

t1[3] = 'Yo';
//ajouter un element au debut du tableau
t1.unshift('PREM ');



//supprimer un element d'un tableau

//delete t1[0];
//t1.splice('1, 1');
t1.pop();

//autre façon pour "délimiter un tableau"

t1.length = 2;

console.log(t1.length);
console.log(t1);

//parcourir un tableau multidimensionnel

const users = [
    ['Maurice', 'Roger'],
    ['Bob', 'Robert']
];

console.log(users[0][1]);
