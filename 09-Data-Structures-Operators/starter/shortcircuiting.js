/*
// ------- OR ------
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const restaurant = {};
// restaurant.numGuests = 23;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log('Guests 01 : ', guests1);

const guests2 = restaurant.numGuests || 10;
console.log('Guests 02 : ', guests2);

// ------- AND ------
console.log(0 && 'Jonas');
console.log(23 && 'Jonas');
console.log('Hello' && 23 && null && 'jonas');
*/

// Nullish Coalsceing Operator
const restaurant = {};
restaurant.numGuests = 0;

const guestsTernary = restaurant.numGuests ? restaurant.numGuests : 10;
console.log('Guests 01 : ', guestsTernary);

const guestsOrOp = restaurant.numGuests || 10;
console.log('Guests 02 : ', guestsOrOp);

// Nullish means, null or undefined
const guestsCorrect = restaurant.numGuests ?? 10;
console.log('Guests 03 : ', guestsCorrect);
