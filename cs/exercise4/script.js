/* Exercise #4 (sugerencia filter() e includes() )
Create a program that loops over the 2 arrays; if there are any common courses
print them out to the console.*/

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];


const match = student1Courses.filter((course) => student2Courses.includes(course));

console.log("==== Exercise 4 ====");
console.log(match);
