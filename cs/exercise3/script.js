

/* Exercise #3 (sugerencia reduce() )
Write a program to compute the sum and product (multiplication) of an array of
numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24. */

const arr3 = [1, 2, 3, 4];

const initialValSum = 0;
const sumWithInitial = arr3.reduce((accumulator, currentValue) => accumulator + currentValue, initialValSum);

const initialValMul = 1;
const mulWithInitial = arr3.reduce((accumulator, currentValue) => accumulator * currentValue, initialValMul);

console.log("==== Exercise 3 ====");
console.log(`The sum is: ${sumWithInitial}`);
console.log(`The product is: ${mulWithInitial}`);
