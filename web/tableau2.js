const brands = [
'toyota',
'peugeot',
'volkswagen',
'Audi',
'Kia',
'Lada',
];

// function callback

// filtrer un tableau
const brandFiltered = brands.filter (function (brand) {
    return brand [0]=== 't';
    // brand[0] pour selectionner la premiere lettre
});
console.log(brandFiltered);

// tout mettre un nouveau tableau en majuscule

console.log(brands.map(function(brandMajuscule) {
    return brandMajuscule.toLocaleUpperCase();
    
}));


//trier le tableau

brands.sort (function(a,b) {
    return a.localeCompare(b);   
});
console.log(brands);