// ==============================
// JavaScript Homework: Student Data Processor
// ==============================

// Starter data: list of students and their grades
// =========================================
// Task 1: Create a new array of strings in this format:
// "Alice: 85", "Bob: 58", etc.
// Display the result in the console
// =========================================
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 58 },
  { name: "Charlie", grade: 95 },
  { name: "David", grade: 45 },
  { name: "Eva", grade: 72 },
];
// console.log(students);

// =========================================
// Task 2: Create a new array that only includes the students
// who passed (grade is 60 or higher)
// Display the result in the console
// =========================================
 const passedStudents = [
 { name: "Alice", grade: 85 },
 { name: "Charlie", grade: 95 },
 { name: "Eva", grade: 72 },
];
console.log(passedStudents);
// // =========================================
// Task 3: Calculate the average grade of the class
// Round the result to 2 decimal places
// Display the result in the console
// =========================================
let total=0;
for (let i = 0; i < students.length; i++) {
  total=total+students[i].grade;
}
 const averageGrade = (total / students.length).toFixed(2);
console.log("Average Grade: " +averageGrade);

// =========================================
// Task 4: Loop through the students and log:
// "<name> passed" if grade >= 60
// "<name> failed" if grade < 60
// Display the result in the console
// =========================================
for (let i = 0; i < students.length; i++)
  if (students[i].grade >= 60)  
        console.log("<name> passed: ");
    else
console.log("<name> failed: ");
// =========================================
// Task 5: Print each student’s name one by one using a loop
// Display the result in the console
// =========================================
for (let i = 0; i < students.length; i++) {
 console.log(students[i].name);        
}

// =========================================
// Bonus Task: Create a function that returns the student
// with the highest grade
// Display the result in the console
// =========================================
function getTopStudent(students) {
  let topStudent = students[0];
  for (let i = 1; i < students.length; i++) {
    if (students[i].grade > topStudent.grade) {
      topStudent = students[i];
    }
  }
  return topStudent;
}
console.log(getTopStudent(students));
// =========================================
// In-Place Task 1: Add a new property to each student called "status"
// It should be set to "pass" or "fail" based on the grade
// Modify the original students array directly
// Display the modified students array in the console
// =========================================
for (let i = 0; i < students.length; i++) 
    if (students[i].grade >= 60) 
  students[i].status = "pass";  
 else 
  students[i].status = "fail";
console.log(students);

// =========================================
// In-Place Task 2: Curve the grades by adding 5 points to each student's grade 
// Make sure no grade goes over 100
// Modify the original students array directly
// Display the modified students array in the console
// =========================================
for (let i = 0; i < students.length; i++) {
    if (students[i].grade + 5 > 100) {
        students[i].grade = 100;
    } else {
        students[i].grade = students[i].grade + 5;
    }
}
console.log(students);

// ==============================
// JavaScript Homework: Functions and Scope
// ==============================

// =========================================
// Task 1: Create a function called greet that logs:
// "Hello, student!" to the console
// Then call the function
// =========================================
function greet() {
  console.log("Hello, student!");
}

// =========================================
// Task 2: Create a function that takes a name as a parameter
// and logs "Hello, <name>!" to the console
// Call the function with different names
// =========================================
function greetWithName(name) {
  console.log("Hello, "+"<"+ name+">!");
}
greetWithName("Alice");
greetWithName("Bob");

// =========================================
// Task 3: Create a function that returns the square of a number
// Call the function and store the result in a variable
// Then log the result
// =========================================
function square(num) {
  return num * num;
}
const result = square(5);
console.log("Square of 5 is: " + result);

// =========================================
// Task 4: Demonstrate local vs global scope
// Create a global variable and a function that has a local variable
// Log both and explain the difference in a comment
// Display both values in the console
// =========================================

let age=40;//global scope-Local scope has highest priority than global scope. 
function myFunc(){
    let age=20;//local scope
    const anotherFunc=()=>{
        console.log(age); //20
    };
    anotherFunc();

}
myFunc(); //Declare the variable before the function calling otherwise it will throw an error.
console.log(age); //40

// =========================================
// Task 5: Create a function that accepts another function as a parameter
// The callback should log "Callback function was called"
// Call the outer function and pass the inner function as an argument
// =========================================
function fun(anotherFunc) {
  anotherFunc();
}   
function anotherFunc() {
    console.log("Callback function was called");
    }
fun(anotherFunc);

// =========================================
// Task 6: Create a function that accepts two numbers and a function
// The function should perform an operation using the passed-in function
// Example: pass in add, subtract, multiply as callback functions
// Call the main function with different callbacks
// Display results in the console
// =========================================

function add(a, b) {
  console.log("Add:", a + b);
}
function subtract(a, b) {
    console.log("Subtract:", a - b);
}
function multiply(a, b) {
  console.log("Multiply:", a * b);
}
function calculate(a, b, operation) {
  operation(a, b);
}   
calculate(10, 5, add);
calculate(10, 5, subtract);
calculate(10, 5, multiply);
// =========================================
// Task 7: Create and use an anonymous function
// Assign it to a variable and call it
// It should log "Anonymous function executed"
// =========================================
const anonymousFunction = function() {
  console.log("Anonymous function executed");
};
anonymousFunction();
// =========================================
// Task 8: Rewrite Task 7 using an arrow function instead
// Call it and display the result in the console
// =========================================
const createAbutton = () => console.log("Anonymous function executed");
createAbutton();

