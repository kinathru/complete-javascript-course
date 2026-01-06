// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const printForecast = (arr) => {
  // What to output? -> String describing temperatures
  // How to solve?
  // - Define a variable
  // - Loop through each element
  // - Add temperature to the the variable
  // - Add text description
  let output = "... ";
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      continue;
    }

    output += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log(output);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
