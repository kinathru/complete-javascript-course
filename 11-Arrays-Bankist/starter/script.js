'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'premium',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'standard',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'standard',
};

const account5 = {
  owner: 'John Cena',
  movements: [430],
  interestRate: 1,
  pin: 5555,
  type: 'basic',
};

const account6 = {
  owner: 'Ray Mysterio',
  movements: [],
  interestRate: 1,
  pin: 6666,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4, account5, account6];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Web Application
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>          
          <div class="movements__value">${mov}</div>
        </div>
        `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
//displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, val) => acc + val, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};
//calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes} EUR`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} EUR`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter(int => int > 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = interest;
};
//calcDisplaySummary(account1.movements);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(v => v.at(0))
      .join('');
  });
};

createUserNames(accounts);

// Event Handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // Prevents form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value,
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and a Welcome Message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value,
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc &&
    receiverAcc.userName !== currentAccount.userName
  ) {
    console.log('Transfer is Valid');

    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName,
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some(mov => mov >= amount * 0.01)
  ) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Movement ${i} : You deposited ${mov}`);
  } else {
    console.log(`Movement ${i} : You withdrewed ${Math.abs(mov)}`);
  }
}

console.log('-'.repeat(50));

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i} : You deposited ${mov}`);
  } else {
    console.log(`Movement ${i} : You withdrewed ${Math.abs(mov)}`);
  }
});
*/

/*
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
*/

// const uniqueCurrencies = new Set(['LKR', 'USD', 'USD', 'GBP', 'GBP', 'EUR']);
// uniqueCurrencies.forEach(function (value, key, set) {
//   console.log(`${key}: ${value}`);
// });

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const checkDogs = function (dogsJulia, dogsKate) {
  const corrected = dogsJulia.slice(1, -2);
  console.log('Original  : ', dogsJulia);
  console.log('Corrected : ', corrected);
  const combined = corrected.concat(dogsKate);
  combined.forEach(function (value, i, arr) {
    const type = value > 3 ? 'an adult' : 'a puppy 🐶';
    console.log(`Dog number ${i + 1} is ${type}, and is ${value} years old`);
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

// Array map() method
/*
const eurToUsd = 1.1;
const movementsUsd = movements.map(mov => mov * eurToUsd);
console.log(`Original Movements  : `, movements);
console.log(`Converted Movements : `, movementsUsd);

const movDescriptions = movements.map((mov, i) => {
  if (mov > 0) {
    return `Movement ${i} : You deposited ${mov}`;
  } else {
    return `Movement ${i} : You withdrewed ${Math.abs(mov)}`;
  }
});
console.log(movDescriptions);
*/

/*
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
console.log(depositsFor);
*/

/*
// Accumulator is like a snowball
const totalBalance = movements.reduce(function (accumulator, curr, i, arr) {
  console.log(`Iteration ${i}: ${accumulator}`);
  return accumulator + curr;
}, 0);
console.log(totalBalance);
*/

/*
const maxValue = movements.reduce((acc, val) => Math.max(acc, val), 0);
console.log(`Movements are : `, movements);
console.log(`Max value is : ${maxValue}`);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const calcAverageHumanAge = function (ages) {
  return ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/

/*
// PIPELINE of operations
const eurToUsd = 1.1;
const totalDepositsInUsd = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsInUsd);
*/

/*
// find Method
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/

/*
// findLast and findLastIndex
console.log(movements);
const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);

const latestLargeMovement = movements.findLastIndex(
  mov => Math.abs(mov) > 1000,
);
console.log(
  `Your latest large movement was ${latestLargeMovement} movements ago`,
);

console.log(
  `Has there been at least 1 deposit ? ${movements.some(mov => mov > 0)}`,
);

console.log(
  `Has there been at least 1 deposit > 5000 ? ${movements.some(mov => mov > 5000)}`,
);

console.log(
  `Are all movements 'deposits' ? ${movements.every(mov => mov > 0)}`,
);

console.log(
  `Are all 'Account 4' movements 'deposits' ? ${account4.movements.every(mov => mov > 0)}`,
);
console.log(account4.movements);

// flat and flatMap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arr2 = [[1, 2, 3, [10, 20, [30, 40, 50, [100, 200]]]], [4, 5, 6], 7, 8];
console.log(arr2.flat(100));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(`Overall Balance : ${overallBalance}`);

console.log(
  `Overall Balance Chained : ${accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0)}`,
);

console.log(
  `Overall Balance Flat Map :  ${accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov)}`,
);
*/

///////////////////////////////////////
// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

/*
const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

// 1. Store the the average weight of a "Husky" in a variable "huskyWeight"
const huskyWeight = breeds.find(b => b.breed === 'Husky')?.averageWeight;
console.log(`Average weight of a "Husky" : ${huskyWeight}`);

// 2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
const dogBothActivities = breeds.find(
  b => b.activities.includes('running') && b.activities.includes('fetch'),
)?.breed;
console.log(
  `Breed that likes both "running" and "fetch" : ${dogBothActivities}`,
);

// 3. Create an array "allActivities" of all the activities of all the dog breeds
const allActivities = breeds.map(b => b.activities).flat();
console.log(`All Activities : ${allActivities}`);

// 4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
const uniqueActivities = [...new Set(allActivities)];
console.log(`Unique Activities : ${uniqueActivities}`);

// 5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter(b => b.activities.includes('swimming'))
      .map(b => b.activities)
      .flat()
      .filter(act => act !== 'swimming'),
  ),
];
console.log(`Other  Activities of dogs like to swim : ${swimmingAdjacent}`);

// 6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
console.log(
  `Do all the breeds have an average weight of 10kg or more? ${breeds.every(b => b.averageWeight >= 10)}`,
);

// 7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".
console.log(
  `Are there any breeds that are "active" ? ${breeds.some(b => b.activities.length >= 3)}`,
);

// 8. What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.
console.log(
  breeds
    .filter(b => b.activities.includes('fetch'))
    .reduce((acc, b) => Math.max(acc, b.averageWeight), 0),
);

*/

// Sorting

/*
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort());

// return < 0 => A, B
// return > 0 => B, A
movements.sort((a, b) => (a > b ? 1 : -1)); // Ascending order
console.log(movements);

movements.sort((a, b) => (a > b ? -1 : 1)); // Descending order
console.log(movements);
*/

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const groupedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? 'deposits' : 'withdrawals',
);
console.log(groupedMovements);

const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 9 },
  { name: 'bananas', type: 'fruit', quantity: 5 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 12 },
  { name: 'fish', type: 'meat', quantity: 22 },
];

const result = Object.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? 'restock' : 'sufficient',
);
console.log(result);
// [{ name: "bananas", type: "fruit", quantity: 5 }]

const groupByActivity = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length;

  if (movementCount >= 8) return 'very active';
  if (movementCount >= 4) return 'active';
  if (movementCount >= 1) return 'moderate';
  return 'inactive';
});
console.log(groupByActivity);

const groupByType1 = Object.groupBy(accounts, acc => acc.type);
console.log(groupByType1);

const groupByType2 = Object.groupBy(accounts, ({ type }) => type);
console.log(groupByType2);
*/
