/* Exercise #2 (sugerencia map() )
Write a function that:
 Takes in an array of numbers.
 Doubles the value of each number in the array.
 Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10] */

var arrNums = [1, 2, 4, 5];
var doubles = arrNums.map(function (nElement) {
    return nElement * 2;
});
console.log("==== Exercise 2 ====");
console.log(doubles);