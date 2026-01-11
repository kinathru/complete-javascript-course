'use strict';

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, 'Davis');

// console.log('Before : ', jessica1);
// console.log('After : ', marriedJessica);

// Shallow Copy/Clone
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = { ...jessica };
jessicaCopy.lastName = 'Davis';
// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Original : ', jessica);
// console.log('Copy : ', jessicaCopy);

// Deep Copy/Deep Clone
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('Peter');
jessicaClone.family.push('Harry');

console.log('Before Clone : ', jessica);
console.log('After Cone   : ', jessicaClone);
