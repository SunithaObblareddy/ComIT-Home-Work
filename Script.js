//multiplier factory code using closure
function createMultiplier(factor) {

function newfunction(number){
    return number * factor;   
}
    return {
        newfunction, createMultiplier,
    };
}
const multiplier = createMultiplier(2);
console.log(multiplier.newfunction(2)); // Output: 10

//Factorial code using recursion
function factorial(n) {
  // base case
  if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(6));
//Guess List Application. Tried my best, but haven't completed fully 
const guestInputName= document.getElementById("guestinput");
    const addbtn = document.getElementById("addbtn");
    const clearbtn = document.getElementById("clearbtn");
    const list=document.getElementById("todoList")
    const Removebtn=document.createElement("Remove");
    Removebtn.addEventListener("click", ()=> {

    });

 addbtn.addEventListener("click", ()=>{
    const guestname=document.getElementById("guestinput").value;
    const guestlist=document.createElement("li");
    guestlist.innerText=guestname;
    list.append(guestlist, Removebtn );// add to the bottom of the list
    //list. prepend(guestlist);//add to the top of the list

  });







