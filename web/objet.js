//declaration objet de deux façons diff
const o1 = {};
const o2 = new Object();

console.log(o1);
console.log(o2);
const o33 = o1;



// initialiser des objects avec des données
//nom : bob prénom : Maurice
const obj1 = {
    nom : 'bob',
    prenom : 'Maurice',
};


//les cles ne doivent pas tjrs avoir de guillement necessairement sauf si on met un caractere special alors 'nom'

// Ajouter  une information à objet

obj1.genre = 'Homme';

console.log(obj1.genre);
// mettre des guillement dans la version []; c'est la version pour les clé un peut plus complexe das la synthaxe
console.log(obj1['genre']);

// Supprimer element
//delete obj1.nom ;


//iterer sur un objet

for(const t in obj1)
{
    console.log(t, ":" ,obj1[t]);
}

//methode avec forEach
//Object.entries(obj1).forEach(function(t) {
  //  console.log(t[0],t[1]);
//})






