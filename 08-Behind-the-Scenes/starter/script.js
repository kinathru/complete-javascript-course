'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you are a millenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      console.log(`Adding 5 + 7 = ${add(5, 7)}`);
    }

    console.log(millenial);

    if (!isStrict()) {
      console.log(`Without Strict : Adding 5 + 7 = ${add(5, 7)}`);
    }
  }

  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);

// This function must be defined and called within the scope you want to check.
function isStrict() {
  return !this; // In strict mode, 'this' is undefined, so !this is true
}
