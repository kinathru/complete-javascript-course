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
