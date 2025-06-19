let person1 = { name: "Alice", age: 25 };
const person2 ={
    ...person1,
};
person2.favoriteColor="White";
console.log(person1);	
console.log(person2);
/*primitive data types has no methods or properties. 
string(represent textual data)-example "Hello World",

number(represents both integer and floating point number)-example 42, 3.14,

boolean(represent logical value true or false)-example true, false

null(represents invalid object or reference)-example let a=null,

undefined(A variable that has been declared but has not been assigned a value)-example let x; console.log(x);,

symbol(used to create an unique identifier-example const id=symbol('id')

bigint(used for large integers that are too big for the number type)-example let bigNumber=1234567890123456789012345678901234567890n
*/
function fun(name, favoritehobby)
{
    console.log(`My name is ${name} and my favorite hobby is ${favoritehobby}`);
}

fun("Sunitha","Table Tennis"); 
/*In javascript, Object is a collection of key-value pairs, where keys are strings and values can be any data type.
1)We use objects for more complex data structure. Once the object is created you can add more properties outside of the object
In this example, we create an object called person with properties Name, Age, and Address.
Const person={
Name:”ygor”;
Age: 32;
Address: {
number: 123,
streatName:”Main st”},
};
Person.name= “bibu”;
2)we can access the properties of an object using dot notation or bracket notation.
Console.log(person.name);
*/

/* Arrays: Array is a special type of object that is used to store a collection of items.
Arrays are used to store multiple values in a single variable. Array can be arrays of objects, arrays of strings,
 arrays of numbers, or a combination of types. Behind the scenes, arrays work like objects.
Arrays are optimized for adding items to the end and getting the first element. Array indices start from 0.
map(), push() methods are used to manipulate arrays. these methods access array type not object types.

const objArray = ["soccer","basketball","tennis"]; //defining an array of strings
objArray.push("cricket");//adding an item to the end of the array
console.log(objArray);//accessing the first item in the array
//Example of an array of objects
const objArray = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
*/
