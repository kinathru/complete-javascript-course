const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(airline.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const myString = 'Hello Hello How Are you? Hello, Hello';
console.log(myString.replace('Hello', 'Chao'));
console.log(myString.replaceAll('Hello', 'Chao'));
