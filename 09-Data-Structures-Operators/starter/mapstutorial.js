const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are Open')
  .set(false, 'We are Closed');

console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(2));
console.log(rest.get(true));

console.log(rest.has('categories'));
rest.delete(2);

const arrayKey = [1, 2];
rest.set(arrayKey, 'Test');
console.log(rest.get(arrayKey));

// rest.clear();
console.log(rest);

const question = new Map([
  ['question', 'Whats the best programming language'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
]);
console.log(question);

const openingHours = {
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
};
console.log(Object.entries(openingHours));
const openingHoursMap = new Map(Object.entries(openingHours));
console.log(openingHoursMap);

for (const [key, value] of question) {
  console.log(`${key} - ${value}`);
}

console.log([...question]);
