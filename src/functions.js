
//write a function that returns a value
function addNum(num1, num2) { 
  return num1 + num2
  }
  
  //write a function that accepts a function as a parameter and runs it after 2 seconds (callback function)
  //confused on this one. are you talking about the setTimeout callback function for the 2 seconds?
  function runFunction(fun) {
    setTimeout(() => {
      fun()
   }, 2000);
  }
  
  const otherFunction = () => {console.log("This function is being called from inside another function after a 2 second Delay")}
  runFunction(otherFunction)
       
  
  
  
  //write a function that returns a promise, and after 2 seconds resolves with a value of "Hello there"
  function promisePrac() { return new Promise((resolve) => {
      setTimeout (() => {
        resolve("Hello there")
      }, 2000);
    })
  }
           
  
  //write a function that returns a new function. The new function should return/create a new function that multiplies a number pased to the new function
  // by a static number that was passed to the orginal function.
  // id if I called the main function with a parameter of 2, it would return a new function that would multiply any number passed to the new function by 2
  
  function multiplyFunctionGenerator(param) {
      return (param2) => {
        return param * param2;
      }
    }
   
    
  
  //lastly call the functions here. Be sure to log to the console values. To grade this, the first thing I will be doing is running `node functions.js`
  //I will be looking to see if you accomplished the above tasks. Error on the side of more logging to the console. And of course I will be looking at your code.
  //well documented code is always helpful.
  //5 points extra credit if you format the console.log messages.
  
  wayOne()
  wayTwo()
  wayThree()
  sideEffectFunction()
  console.log("function that returns a value  - returned: " + addNum(2,2))
  console.log(await promisePrac())
  const multiplyByTwoFunction = multiplyFunctionGenerator(2)
  console.log("2 * 10, passed in to nested functions: " + multiplyByTwoFunction(10))