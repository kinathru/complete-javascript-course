'use strict';

/*
const bookings = [];

const createBooking = function (
  flightNum,
  noOfPassengers = 1,
  price = 199 * noOfPassengers // Notice we could use params to calcualte default params
) {
  // ES 5 Way of using default values is as below.
  //   noOfPassengers = noOfPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    noOfPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
*/

/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Rupasinghe',
  passport: 444444444,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 444444444) {
    console.log('Checked in');
  } else {
    console.log('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
*/

/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// This is a Higher-Order function
const transformer = function (str, fn) {
  console.log(`Original String    : ${str}`);
  console.log(`Transformed String : ${fn(str)}`);
  console.log(`Transformed by     : ${fn.name}`);
};

console.log(transformer('JavaScript is the Best!', oneWord));
console.log(transformer('JavaScript is the Best!', upperFirstWord));
*/

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('Hey');
greetHey('Jonas');
greetHey('Steven');

const greetArrow = greeting => greetee => console.log(`${greeting} ${greetee}`);

greetArrow('Hey')('Kina');
*/

/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNo, passengerName) {
    console.log(
      `${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNo}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNo}`,
      passengerName,
    });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Sarah Williams'); // ❌ Not gonna work

book.call(eurowings, 23, 'Sarah Williams');

const flightData = [34, 'George Cooper'];
book.apply(eurowings, flightData);

const bookEW = book.bind(eurowings);
bookEW(32, 'Stephen Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('John Williams');

console.log(lufthansa);
console.log(eurowings);

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// ❌ Following is wrong because the `this` inside `buyPlane` points to `.buy` element
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// ✅ Following is the correct way to pass `this` bound method
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(200));

const addTaxFunc = rate => {
  return value => value + value * rate;
};

const addTaxIA = addTaxFunc(0.7);
console.log(addTaxIA(100));

const addTaxCA = addTaxFunc(0.98);
console.log(addTaxCA(100));
*/

// Immediately Invoked Function Expressions

/*
(function () {
  console.log('This will never run again');
})();

(() => console.log('This arrow function will never run again'))();

{
  const isPrivate = 23;
}
console.log(isprivate);
*/

// Closures

/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
*/

// Additional Closure Example 01
/*
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);
*/

// Additional Closure Example 02
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  // Here notice that the callback function is executed after sometime
  // The callback function needs to remember the variables of the parent EC
  // Here the Variable Environment of the boardPassengers will be closed-over
  // by the callback function. So the callback function knows them when being
  // executed later.

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000; // Here we are creating a new variable in the Global Context.
boardPassengers(180, 3);
