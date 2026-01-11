'use strict';

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12, 15);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(5, 7);
addArrow(5, 7, 8, 12, 10);
