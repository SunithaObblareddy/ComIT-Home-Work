// what is the diff between function expression and arrow fuction
//arrow functions don't have their own binding to `this`, arguments, or super
//arrow functions use the This from its parent scope
//console.log(this);//window object in browser: what the browser gives to you 
// this.name = "window open";
// const user={
//     name: "ygor",
//    // greet: () => console.log(`Hello, I am ${this.name}`)
//     greet: function() {
//          const myfunction = () =>  console.log(`Hello, I am ${this.name}`);//arrow function always uses this keyword of parent function.
//          //here this,name is inside the parent function and that parent function points to user object(user.greet)
//             myfunction();   
//          }
//     }
//     class Parent {
//   greet = () => {
//    console.log("From parent");
//  };
// }

// class Child extends Parent {
//  greet = () => {
//   super.greet();
//   };
// }

 
 function* gen() {  yield 1;
   yield 2;
}

 const iterator = gen();

console.log(iterator.next());
console.log(iterator.next());
 console.log(iterator.next());

