'use strict';

const firstName = 'Kinath';

const myMethod = function () {
  const firstName = 'Rupasinghe';
  console.log(`Inside function firstName is : ${firstName}`);
};

console.log(`Global Context firstName is : ${firstName}`);
myMethod();

console.log(
  `Global Context firstName (After myMethod execution) is : ${firstName}`
);
