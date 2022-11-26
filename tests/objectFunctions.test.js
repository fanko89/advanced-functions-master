import { 
    objectCheck,
    objectValues,
    objKeyCheck,
    objToArray
} from "../src/objectFunctions.js";

describe("objectCheck()", () => {
    it("should return true when an object is passed", () => {
        expect(objectCheck( {key: 'value'} )).toBeTruthy();
    });

    it("should return false when other data types are given", () => {
        expect(objectCheck( 'Hello' )).toBeFalsy();
    });
    
    it("should return false when an array is given", () => {
        expect(objectCheck( [1, 4] )).toBeFalsy();
    });
});

describe("objectValues()", () => {

    const testObj = {
        name: 'Landon',
        age: 33,
        eyeColor: 'blue',
        father: true,
        children: [
            {
                name: 'Child1',
                age: 6,
                eyeColor: 'blue',
                father: false,
            },
            {
                name: 'Child2',
                age: 2,
                eyeColor: 'green',
                father: false,
            },
        ]
    }

    it("should return the value for given key", () => {
        expect(objectValues( testObj, 'age' )).toBe(33);
    });

    it("should return false when the key isn't found", () => {
        expect(objectValues( testObj, 'height' )).toBeFalsy();
    });

});

describe("objKeyCheck()", () => {

    const testObj = {
        name: 'Landon',
        age: 33,
        eyeColor: 'blue',
        father: true,
        children: [
            {
                name: 'Child1',
                age: 6,
                eyeColor: 'blue',
                father: false,
            },
            {
                name: 'Child2',
                age: 2,
                eyeColor: 'green',
                father: false,
            },
        ]
    }

    it("should return true when the key is in the object", () => {
        expect(objKeyCheck( testObj, 'age' )).toBeTruthy();
    });

    it("should return false when the key isn't in the object", () => {
        expect(objKeyCheck( testObj, 'height' )).toBeFalsy();
    });

});

describe("objToArray()", () => {

    const testObj1 = {
        name: 'Landon',
        age: 33,
        eyeColor: 'blue',
        father: true
    }

    const testObj2 = {
        name: 'Joe',
        age: 22
    }

    it("should return an array of arrays", () => {
        expect(objToArray( testObj1 )).toEqual([['name', 'Landon'],['age', 33],['eyeColor','blue'],['father', true]]);
    });

    it("should return an array of arrays", () => {
        expect(objToArray( testObj2 )).toEqual([['name', 'Joe'],['age', 22]]);
    });

});
