'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true;
}

if (hasDriversLicense) {
    console.log('You can drive');
}


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(5, 3));


console.log(`

                    Functions Expressions vs Declarations

    `);

// Function declaration

// Invoked before definition and this works!
const age1 = calcAgeDec(1991);
console.log(age1);

function calcAgeDec(birthYear) {
    return 2037 - birthYear;
}


// Function expression
const calcAgeExpr = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAgeExpr(1991);
console.log(age2);

// Arrow functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log('Arrow function age', age3);

const yearsUntilRetirement = (birthYear) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log('Years till retirement : ', yearsUntilRetirement(1991));