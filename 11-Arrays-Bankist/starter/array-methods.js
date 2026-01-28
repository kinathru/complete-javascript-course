// Slice() Method
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2)); // Start index is included
// console.log(arr.slice(2, 4)); // End index is excluded
// console.log(arr.slice(-2)); // Get last 2 elements of the array
// console.log(arr.slice(-1)); // Get last element of the array
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); // Creates a shallow copy of the array

// Splice() Method - Similar to Slice() but mutates the array

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(2); // Deletes elements from the second index
// console.log(arr); //🟢 ['a', 'b']

// arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(-1); // Remove the last element of the array
// console.log(arr); // 🟢 ['a', 'b', 'c', 'd']

// arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(1, 2); // Deletes 2 elements from index 1
// console.log(arr); // 🟢 ['a', 'd', 'e']

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.reverse();
// console.log(arr); // 🟢 ['e', 'd', 'c', 'b', 'a']

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);
// // Expected output: Array ["a", "b", "c", "d", "e", "f"]

// console.log([...array1, ...array2]);

// const array1 = ['a', 'b', 'c'];
// console.log(array1[0]); // Traditional way to get an element by index
// console.log(array1.at(0)); // New way of getting an element by index

// console.log(array1[array1.length - 1]); // Getting the last element old way
// console.log(array1.slice(-1)[0]);
// console.log(array1.at(-1)); // Getting last element, new way

// console.log('Jonas'.at(2));
