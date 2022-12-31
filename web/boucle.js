const names =[
    'Bob',
    'Maurice',
    'David',
    'Roger',
];

//boucle for
console.log('For');
console.log('--------');
for(let i=0; i<names.length; i++) {

console.log(names[i]);
}

//boucle while
console.log('While');
console.log('--------');
let u=0;
while(u<names.length ) {  
    console.log(names[u++]);
}




//boucle foreach nouvelle façon de faire (index c'este fonction)
console.log('Foreach');
console.log('--------');
names.forEach((name,index) => {
    console.log(name, index);
});

//ancienne facon d e faire , function cest un callback
names.forEach( function(name) {
    console.log(name);
});


  //table multiplication 5
console.log('multiplication 5');
console.log('--------');
for(let i=1; i<=10; i++) {
console.log(i+ '*5=' + i*5);

//ou console.log(`${i} * 5 = ${i*5}`);
}
    



