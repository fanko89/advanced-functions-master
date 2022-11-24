//the arrayCheck function should take 1 param. If the param is an array return true, else false.
export const arrayCheck = ( arr ) => {
    if (Array.isArray(arr)) {
        arr = true
    }
    else { 
        arr = false
    }
  return arr

};

//arrayTotal should take an array of numbers and total all of those numbers
export const arrayTotal = ( arr ) => {
    let sum = 0
    for(let value of arr) {
        sum+=value
    }
    return sum
   

};


//arrayValueCheck should take 2 parameters, an array and a value
// it should return true if the value is in the array and false if it isn't
export const arrayValueCheck = ( arr, item ) => {
    let result;
        if(item !== undefined) {
            for(let i of arr){
            if(i === item){
          result = true
        }
    }
    }
            else{
                result = false
            }
        
        return result
      
};

//isPalindrome should take a string that is a word or phrase
// and return true or false if it is a palindrome. The function should ignore spaces and non-letter chars
export const isPalindrome = ( string ) => {
    let reg = /[\W_]/g;
    let newstring = string.toLowerCase().replace(reg, '');
    for (let i=0; i < newstring.length/2; i++){
    if (newstring[i] !== newstring[newstring.length -1 -i]) {
        return false
    }
        return true
    }
}


//isSumPossible - From an unsorted array are there any 2 numers that will sum up to a given number?
//example: for the array [3, 5, 2, -4, 8, 11] it should return: [[11, -4], [2, 5]]
export const isSumPossible = ( arr, sum ) => {
        let obj = {},
          results = []
    
            for (let i = 0; i < arr.length; i++){
                if (obj[arr[i]]){
                    results.push([obj[arr[i]], arr[i]])
                }else{
                    obj[sum - arr[i]] = arr[i]
                }
              }
              return results
}