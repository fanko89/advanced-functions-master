import { arrayCheck } from "./arrayFunctions";

//the objectCheck function should take 1 param. If the param is an object return true, else false.
export const objectCheck = ( obj ) => {

    if (typeof obj === 'object' &&
    !Array.isArray(obj)) {
        obj = true
    }
    else { 
        obj = false
    }
  return obj

};

//objectValues should take an object and a key and return the value  for the given key. If the key isn't there, return false
export const objectValues = ( obj, key ) => {
    obj = {};
    obj.find((value) => {
        return value.key === key

    })
    return false;
};
console.log(objectValues)

//objKeyCheck should take 2 parameters, an object and a key
// it should return true if the key is in the object and false if it isn't
export const objKeyCheck = ( obj, key ) => {

};

//objToArray should take and object
// it should return an arrray of arrays where each of the sub arrays is a key and a value
// ie: [['key',value], [key, value], ...]
export const objToArray = ( obj ) => {

};

