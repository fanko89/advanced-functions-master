import { 
    arrayCheck, 
    arrayTotal, 
    arrayValueCheck,
    isPalindrome,
    isSumPossible
} from "../src/arrayFunctions.js";

describe("arrayCheck()", () => {
    it("should return true when an array is passed", () => {
        expect(arrayCheck( [1,2,3] )).toBeTruthy();
    });

    it("should return false when other data types are given", () => {
        expect(arrayCheck( 'Hello' )).toBeFalsy();
    });
    
    it("should return false when object is given", () => {
        expect(arrayCheck( {key: 'value'} )).toBeFalsy();
    });
});

describe("arrayTotal()", () => {
    it("should total an array", () => {
        expect(arrayTotal( [1,2,3] )).toBe(6);
    });

    it("should total an array", () => {
        expect(arrayTotal( [1,2,5] )).toBe(8);
    });
});

describe("arrayValueCheck()", () => {
    it("should find values (numbers)", () => {
        expect(arrayValueCheck( [1,2,3], 1 )).toBeTruthy();
    });

    it("should find values (strings)", () => {
        expect(arrayValueCheck( ['apple','lemon','lime', 'cherry'], 'lime' )).toBeTruthy();
    });

    it("should return false when it deosn't find the value", () => {
        expect(arrayValueCheck( ['apple','lemon','lime', 'cherry'], 'peach' )).toBeFalsy();
    });
});

describe("isPalindrome()", () => {
    it("should find palindrome: A nut for a jar of tuna.", () => {
        expect(isPalindrome( 'A nut for a jar of tuna.' )).toBeTruthy();
    });

    it("should find palindrome: Taco cat", () => {
        expect(isPalindrome( 'Taco cat' )).toBeTruthy();
    });

    it("should return false when it deosn't find a palindrome", () => {
        expect(isPalindrome( 'Hello World!' )).toBeFalsy();
    });
});

describe("isSumPossible()", () => {
    it("should return an array with 2 possibilities: [[ 5, 2 ], [ -4, 11 ]]", () => {
        expect(isSumPossible( [3, 5, 2, -4, 8, 11], 7 )).toEqual([[ 5, 2 ], [ -4, 11 ]]);
    });

    it("should return an array with 2 possibilities: [[5, 1]]", () => {
        expect(isSumPossible( [4, 5, 1, 8], 6 )).toEqual([[5, 1]]);
    });

    it("should return an array with no possibilities", () => {
        expect(isSumPossible( [3, 4, 6, 1], 2 )).toEqual([]);
    });
});