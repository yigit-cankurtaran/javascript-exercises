'use strict'
//Heron formülü

const kenar1 = 5;
const kenar2 = 6;
const kenar3 = 7;

const semiperimeter = (kenar1 + kenar2 + kenar3) / 2;

const alan = Math.sqrt(semiperimeter * ((semiperimeter - kenar1) * (semiperimeter - kenar2) * (semiperimeter - kenar3)));
console.log(alan)
