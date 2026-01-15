/*
// SPREAD operator, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log('Spread Operator');
console.log(arr);

// REST operator, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log('Rest Operator');
console.log(a);
console.log(b);
console.log(others);
*/

/*
const restaurant = {
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const [pizza, , rissoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza);
console.log(rissoto);
console.log(otherFood);
*/

/*
const restaurant = {
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat);
console.log(weekdays);
*/

/*
const add = function (...numbers) {
  //   console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
  return sum;
};

add(5, 7);
add(20, 34, 39, 32);
add(75, 78, 92, 53, 14, 30, 32);

const numArr = [10, 20, 30, 40, 50, 60];
add(...numArr);
*/

const restaurant = {
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(`
        Your pizza is made with ${mainIngredient}
        Additional ingredients are ${otherIngredients}`);
  },
};

restaurant.orderPizza('Mushroom', 'Onions', 'Olives', 'Tomatoes');
