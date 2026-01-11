'use strict';

console.log(this); // 🟢 this points to window object

function calcAge(birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // 🟢 this points to undefined (in strict mode)
}
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // 🟢 this points to window object! Because it's surrounded by window/global scope
};

calcAgeArrow(1991);

const jonas = {
  name: 'jonas',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
    console.log(this);
  },
};
jonas.calcAge(); // 🟢 this points to jonas object

const matilda = {
  name: 'matilda',
  year: 2017,
};
matilda.calcAge = jonas.calcAge; // Method burrowing, burrow calcAge from jonas to matilda
matilda.calcAge(); // 🟢 this points to matilda object, because matilda is calling calcAge here.

const f = jonas.calcAge; // Copy function to a variable.
f(); // 🔴 Uncaught TypeError: Cannot read properties of undefined (reading 'year')
