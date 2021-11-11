// JavaScript Challenge


// 1) Create a function that receives an array of positive integers and returns an array with only the input’s pair numbers.
// For example:
// [INPUT]  array = [1 2 3 4];
// [OUTPUT] array = [2, 4];

function getPairs (array)  {
    let pairs = [];
    for (let i=0; i <array.length ; i++) {
        if (array[i] %2 === 0) {
            pairs.push(array[i])
        }
    }
    return pairs;
}

const array = [0, 1 ,2, 3, 4 , 15, 20,35, 140, 141];

console.log('Exercise 1')
console.log('Array Used: ' + array)
console.log('Pairs Numbers: ' + getPairs(array));


// 2) Create a function that receives a String as parameter and returns a Boolean value indicating if the word is a palindrome* or not.
// *a word or group of words that is the same when you read it forwards from the beginning or backwards from the end: "Refer" and "level" are palindromes.

function getPalindrome (string) {
   for (let i=0 ; i < string.length; i++) {
       if(string[i] !== string[string.length -1 -i]) {
           return false;
       }
   }
   return true;
}

const palindrome1 = 'Lenovo';
const palindrome2 = 'abba';

console.log('Exercise 2')
console.log(palindrome1 + ' is a Palindrome : ' + getPalindrome(palindrome1))
console.log(palindrome2 + ' is a Palindrome : ' + getPalindrome(palindrome2))




// 3) Using any JavaScript object creation pattern, create a Car object with the following attributes and methods:
//  **  Attributes
//  *  String: make *  String: model *  boolean: turnedOn *  int: engineDisplacement (cylinder volume)
//  *  int: year
// **  Methods:
//  *  boolean: isOn() *  void: turnOn() *  void: turnOff() *  String: toString() [returns year, make, model and the engine displacement (cc)] * String: getMarketingData() [returns make, model and year]

class Car {
    constructor(make , model, year, engineDisplacement) {
        this.make= make;
        this.model= model;
        this.year= year;
        this.engineDisplacement= engineDisplacement;
        this.turnedOn = false;
    }
    isOn() {
        return this.turnedOn;
    }
    turnOn() {
        this.turnedOn = true;
    }
    turnOff() {
        this.turnedOn = false;
    }
    toString() {
       return `Year: ${this.year}, Make: ${this.make}, Model: ${this.model} , Cilindrate : ${this.engineDisplacement} cc.`
    }
    getMarketingData() {
        return ` Make: ${this.make}, Model: ${this.model}, Year: ${this.year},`
    }

}

const Peugeot = new Car('Peugeot','308',2012,2000);

console.log('Exercise 3')
console.log('Example Car : ' + Peugeot.toString())

// 4) Create a Bicycle object with only the make [String] , model [String] and year [int] attributes and no methods. Instantiate it and print to the console its internal state calling the getMarketingData method from the Car object.

class Bicycle {
    constructor(make, model, year) {
        this.make= make;
        this.model=model;
        this.year=year;
    }
}

const myBicycle = new Bicycle('Vairo' , '3.8' , 2017);

console.log('Exercise 4')
console.log('Example Bike : ' + Peugeot.getMarketingData.apply(myBicycle))
