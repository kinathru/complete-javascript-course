/*

// Object creation using Object Literal Syntax
const jonas = {
    firstName: 'Jonas',
    lastName: 'Doe',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

// Adding new properties
jonas.location = 'Iowa'       // Using dot notation
jonas['twitter'] = '@KinathR' // Using bracket notation

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`);
*/

// Object creation using Object Literal Syntax
const jonas = {
    firstName: 'Jonas',
    lastName: 'Doe',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    calcAge: function () {
        console.log(this);
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getInfo: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he ${this.hasDriversLicense ? 'has' : 'does not have'} a driver's license.`;
    }
}

console.log(jonas.calcAge()); // Invoking function using dot notation
console.log(jonas['calcAge']()); // Invoking function using bracket notation

console.log(jonas.getInfo());