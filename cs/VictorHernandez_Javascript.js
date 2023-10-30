/* Exercise #1 ( sugerencia join() )
Complete the function to print out the string: This is a sentence. */
 
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
   console.log(arr.join(" "));
}
console.log("==== Exercise 1 ====");
printOutString();


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
console.log(sumWithInitial);
console.log(mulWithInitial);


/* Exercise #4 (sugerencia filter() e includes() )
Create a program that loops over the 2 arrays; if there are any common courses
print them out to the console.*/

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];


const match = student1Courses.filter((course) => student2Courses.includes(course));

console.log("==== Exercise 4 ====");
console.log(match);

/* Exercise #5
For each of the exercises below, assume you are starting with the following people
array.
let people = [&quot;Maria&quot;, &quot;Dani&quot;, &quot;Luis&quot;, &quot;Juan&quot;, &quot;Camila&quot;];
1. Write a command that prints out all of the people in the list.
2. Write the command to remove &quot;Dani&quot; from the array.
3. Write the command to remove &quot;Juan&quot; from the array.
4. Write the command to move &quot;Luis&quot; to the front of the array.
5. Write the command to add your name to the end of the array.
6. Using a loop, iterate through this array and after console.log &quot;Maria&quot;, exit
from the loop. (usar break)
7. Write the command that gives the indexOf where &quot;Maria&quot; is located.
At the end of the exercise, there should be 4 people in the array. */


console.log("==== Exercise 5 ====");
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log(`1. Prints out all the people: ${people.join(" ")}`);

people = people.filter((name) => name !== "Dani");
console.log(`2. Remove Dani: ${people}`);

people = people.filter((name) => name !== "Juan");
console.log(`3. Remove Juan: ${people}`);

people = people.filter((name) => name !== "Luis");
people.unshift("Luis");
console.log(`4. Move Luis to the front: ${people}`);

people.push("Victor");
console.log(`5. Put your name at the end: ${people}`);

console.log(`6. Print until Maria: `);
for(let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if(people[i].toUpperCase() === "MARIA") {
        break;
    }
}

console.log(`7. Index of Maria:  ${people.indexOf("Maria")}`);

console.log(`At the end there should be only 4 elements in the array: ${people.join(" ")}`);

/*Exercise # 6
Realizar una función que realice el algoritmo de burbuja.  */
const arrIn = [3, 6, 12, 5, 100, 1];

function bubbleSort(arr) {
    for(let i = 0; i < arr.length ; i++) {
        for(let j=0; j < (arr.length - i - 1); j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = temp;
            }

        }
    }
    return arr;
}



console.log("==== Exercise 6 ====");
console.log(bubbleSort(arrIn))
