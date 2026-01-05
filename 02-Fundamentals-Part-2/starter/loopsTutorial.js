'use strict';
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weight repetition ${rep} 🏋️️`);
}

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);
    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 2018, 2027];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

console.log(`
    
        Continue and Break!

`);

console.log(' --- ONLY STRINGS ---')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') {
        continue;
    }
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log(' --- BREAK WITH NUMBER  ---')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') {
        break;
    }
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log(' --- REVERSE ARRAY ---')
for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i], typeof jonasArray[i]);
}

for (let ex = 1; ex <= 3; ex++) {
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${ex} - Lifting weight repetition ${rep} 🏋️️`);
    }
}

console.log(' --- WHILE LOOP ---');
let rep = 1;
while (rep <= 10) {
    console.log(rep);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while(dice !== 6){
    console.log(`Dice is ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6){
        console.log('YAY! Dice is 6');
    }
}
