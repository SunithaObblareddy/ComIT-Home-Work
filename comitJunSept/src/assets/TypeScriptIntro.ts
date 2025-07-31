// What is typescript: typescript is a superset(builds on top of it) javascript
//evrything we see in typescriot aplies for javascript. js is a loosely typed language(in js if you assign any value to a variable)
//ts is type safe and compile time- typescript allow you to see errors during compile time but js will not have compile time sirectly we can see errors in runtime(browser loading)
//Typescript is created by the microsoft.it an open source. Dealing errors at the run time
let age : number;//inferred type
let age1: undefined;
let age2: number[]=[1,2,"3"];
age=30;

//you can create custom types 
type userInput= number | string | null; //you can assign two types to the one variable
//type annotation below
let ageInput: userInput;
ageInput= 10;//we can assign number, string and null of this custom type.

function myFun(x: number,y: number){ //this how we specify arg types
}

function sum(nums: number[]): number //here sum is a fucntion that takes number arg and returns number
{
    return nums.reduce((acc,cur)=>acc+cur,0);
}

const sum2=(NUMS:number[]):number=>
    NUMS.reduce((acc,cur)=>acc+cur,0);

//If my function doesn't return anything then we use void.
const myFun1=():void=>console.log("hi");// here it returns nothing if you want to return something then specify any,number, string, etc

const re=myFun1();
 
let x="ygor";
if(typeof x==="string"){
    x.split("");
}

//Instead of hardcoding a specific type (like number, string), you use a generic type variable (like <T>) which can represent any type, and TypeScript infers it when you use it.

function generic<T>(value:T):T{
    return value;
}
generic(21);
generic("23");
generic({name:"hello"});
//What is enum: it holds values that are constants. enums don't much use in typescript
enum Directions{
    up,
    Down,
    Left,
    Right
}
function playerNextMove(direction: Directions){
}
playerNextMove(Directions.up);
//In typescript, interfaces used a lot to declare the type of the variable
interface user{
readonly name?: string;//string or undefined//we can not modify just we can declare a variable
age: number;
potato: string;
}
interface SuperUser extends user{
    power:string;
}
const user1: user={
    //name:"ygor",
    age:33,
    potato:"hello",
};
const user2: SuperUser={
    name:"hi",
    age:34,
    potato:"hello",
    power:"hello",
}
class Animal{
    private name:string;//can be access inside the class
    protected age: number;//cam be accessble within the class and subclasses
    constructor(name:string){
        this.name=name;
        this.age=age;
    }
}
const dog=new Animal("dog");
dog.name





