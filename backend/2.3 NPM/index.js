//var generateName = require('sillyname');
// import generateName from 'sillyName'
// var sillyName = generateName();

// console.log(`my name is ${sillyName}`);

import superheroes from 'superheroes';
const name = superheroes.all[Math.floor(Math.random()*superheroes.all.length)];
console.log(`i am ${name}`);