//there are no tests for this file.

//demonstrate 3 ways to declare a function
function wayOne() {
    console.log("test 1")

}
let wayTwo = function(){
    console.log("test 2")

}

let wayThree = () =>  {
    console.log("test 3")

}

//write a function that only applies a side-effect (no return value)
function print() {
    console.log("hello")
}

//write a function that returns a value
function addNum() { 
return num1 + num2
}

//write a function that accepts a function as a parmeter and runs it after 2 seconds (callback function)
//confused on this one. are you talking about the setTimeout callback function for the 2 seconds?
function otherFunction(mess) {
    return mess + " hello"
}
 function setFun(fun){
setTimeout(() => {
   console.log(fun)
}, 2000);
}
     



//write a function that returns a promise, and after 2 seconds resloves with a value of "Hello there"
let promisePrac = new Promise(() => {
    setTimeout (() => {console.log("hello there")}, 2000);
  })
 


         

//write a function that returns a new function. The new function should return/create a new function that multiplies a number pased to the new function
// by a static number that was passed to the orginal function.
// id if I called the main function with a parameter of 2, it would return a new function that would multiply any number passed to the new function by 2

function newFun( param ) {
    return function secondFun() {
      param * 2;
    }
  }
 
  

//lastly call the functions here. Be sure to log to the console values. To grade this, the first thing I will be doing is running `node functions.js`
//I will be looking to see if you accomplished the above tasks. Error on the side of more logging to the console. And of course I will be looking at your code.
//well documented code is always helpful.
//5 points extra credit if you format the console.log messages.

wayOne()
wayTwo()
wayThree()
setFun(otherFunction())
console.log(promisePrac)
newFun(2)