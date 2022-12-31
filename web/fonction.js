//premiere declaration
//function calcul() {
  //  return  2*2;
//}
// sans parentheses ca appel la fonction sans les  paren => ca affiche que la fonction
function calcul( a,b){
    return a*b;
}   

console.log(calcul(3, 3));

//deuxieme facon pas utilisable avant le code

const calcul2 = function(a,b){  
    return a*b; }

    console.log(calcul2(5, 5));

    //troisieme facon -> version courte avec arrow function

    const calcul3 = (a,b)=> a*b;

    console.log(calcul3(6, 6));


function dateScolaire (a,b){    
    const mois = [];
    mois.push('janvier','fevrier','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre','decembre');
    a = a-1 ;  
     
    if (a>6)
    {
    const x = (b-2000) +"-"+ (b-1999);
    console.log(mois[a],x);
    }
    else
    {
        x = (b-2001) +"-"+ (b-2000);
        console.log(mois[a],x); 
    }

    }

console.log(dateScolaire(10, 2019));



//fonctions qui multiplie et trie tt les chiffres qu'on donne
//exemple calcul(10,25,2,566)



function trie ()
{
    const args = Array.from(arguments);
   for(let i=0; i<arguments.length; i++) 
   {
     args[i]= args[i]*2;
   }
   const sort = (a, b) => a - b;
   args.sort(sort);
   return args;
}

console.log(trie(1,10,6,5,400,2));

//autre possibilité

function sortFunc() {
    const values = Array.from(arguments).map(e => e*2);
    // .map cree un nouveau tableau en fonction des info de modification
    values.sort((a,b) => a-b);

    return values;
}
