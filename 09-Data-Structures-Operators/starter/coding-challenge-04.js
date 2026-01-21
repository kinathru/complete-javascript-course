///////////////////////////////////////
// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

const toCamelCase = function (underscoreTexts) {
  const textsArray = underscoreTexts.split('\n');
  for (let i = 0; i < textsArray.length; i++) {
    let underscoreCaseText = textsArray[i];
    underscoreCaseText = underscoreCaseText.trim();

    let camelCasedText = '';
    for (let part of underscoreCaseText.split('_')) {
      if (part.length === 0) {
        continue;
      }

      if (camelCasedText.length === 0) {
        camelCasedText += part.toLowerCase();
      } else {
        camelCasedText += part[0].toUpperCase() + part.slice(1).toLowerCase();
      }
    }

    console.log(camelCasedText.padEnd(25, ' ') + `✅`.repeat(i + 1));
  }
};

toCamelCase('   underscore_case_some_more_underscore_stuff_  ');

const input = `underscore_case
                first_name
                Some_Variable 
                calculate_AGE
                delayed_departure`;
toCamelCase(input);
