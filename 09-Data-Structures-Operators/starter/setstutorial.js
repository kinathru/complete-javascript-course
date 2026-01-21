const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rissoto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

console.log(new Set('Hello World'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

ordersSet.delete('Rissoto');
console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}

ordersSet.clear();
console.log(ordersSet);

const staff = [
  'Waiter',
  'Chef',
  'Waiter',
  'Manager',
  'Waiter',
  'Manager',
  'Waiter',
  'Chef',
];
const staffUnique = new Set(staff);
console.log(staffUnique);
const staffUniqueArray = [...new Set(staff)];
console.log(staffUniqueArray);

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);
const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avacado',
  'garlic',
]);

// Get the intersection of two sets
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection : ', [...commonFoods]);

// Get the union
const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union : ', [...italianMexicanFusion]);

// Get the difference between two sets
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Unique Italian Foods : ', [...uniqueItalianFoods]);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Unique Mexican Foods : ', [...uniqueMexicanFoods]);

// Get the symmetric difference
const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log('Unique Italian + Mexican Foods: ', [
  ...uniqueItalianAndMexicanFoods,
]);

// Get the disjoint
console.log(italianFoods.isDisjointFrom(mexicanFoods));
