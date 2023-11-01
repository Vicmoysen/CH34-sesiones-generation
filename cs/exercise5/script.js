




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
