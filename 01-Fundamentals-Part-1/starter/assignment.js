let country = 'Sri Lanka';
let continent = 'Asia';
let population = 22;

const concatString = `I'm from ${country} which is located in ${continent} with a population of ${population}`;
console.log(concatString);

console.log(`This
    is 
    a
    multiline
    string`);



const age = 17;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Eligible for a drivers license 😂');
}
else {
    console.log(`Too young. Wait for another ${18 - age} years 🥲`);
}

console.log(`
    
                            -------------------------------------------------------------
                            Type conversion and coercion
                            -------------------------------------------------------------
    
    `);

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Kinath'));

// Here the Number is coerced to a string implicitly. 
console.log('I was born in ' + 1989 + ' . ');

// In the following cases, the Strings are converted to Numbers implicitly.  
console.log('23' - '10' - 3); // Output -> 10
console.log('23' * '2'); // Output -> 46

// Following is tricky. strings 23 and 10 concatenates to 2310 and 
// when subtracted 3, the result is 2310 - 3 = 2307
console.log('23' + '10' - 3); // Output -> 2307


console.log(`
    
                            -------------------------------------------------------------
                            Equality Operators == vs ===
                            -------------------------------------------------------------
    
    `);

const favorite = prompt("What's your favorite number? ");
console.log(favorite);
console.log(typeof favorite);