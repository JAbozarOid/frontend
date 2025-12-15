// functional programming
var currencyOne = 100
var currencyTwo = 0
var exchangeRate = 1.2

function convertCurrency(amount,rate) {
    return amount * rate
}

currencyTwo = convertCurrency(currencyOne,exchangeRate)

console.log(currencyTwo)


/**
 * scope : It determines which parts of the code are accessible and which parts are inaccessible.
 * global
 * local
 */

// Functional Programming: A programming paradigm that emphasizes the use of functions and immutable values, where data and functionality are kept separate.

// Object-Oriented Programming: A programming paradigm that groups data and functionality into objects, allowing methods to modify properties of those objects.

// Higher-order Functions: Functions that can accept other functions as arguments or return functions as their result, allowing for more abstract and flexible code.

/**
 * Scoping with var, let and const
 * The ES6 version of JavaScript introduced a new variety of scope known as the block scope.
 * Block scope is built when you declare variables using let or const. In other words when you build variables with let or const, they become immediately scoped to the code block they were created in.
 */

let color = 'red' // global scope
if(color === 'red'){ // block scope curly braces
    let color = 'blue' // two separate variables with the same name
}

/**
 * >>> outline some characteristics of variables that are declared with var.
 *  can be used before it is declared
 *  same variable can be redeclared
 *  can be scoped to a function, or globally
 *  With ES6, the suggested way to declare variables is to use the let or const keywords.
 */

/**
 * let and const
 * can not be used before it is declared
 * can not be redeclared
 * it's scoped to the block
 */

/**
 *  >>>> Use let if the value might change in the future, and use const if the value will never change. <<<<
 */

/**
 * comparison on var, let and const
 */

// *** var
console.log('using var before declaration' + user)
var user = 'mary'
var user = 'john'
var user = 'mark'
console.log(user) // the last mark will be printed

// *** let
// can not access before declare with let
// console.log(firstname)
// let firstname // *** compile error happened

let firstName = ''
console.log(firstName)
// let firstName = 'John' // let can not be redeclared

firstName = 'John' // but let can be reassigned
console.log('reassigned let ' + firstName)

// *** const
//console.log(birthdate)
//const birthdate // must be initialized --> compile error

// const birthdate = "1365" // compile error --> can not access before initialized

const birthdate = '1365'
// birthdate = birthdate.toISOString(); // can not reassigned


/**
 * oop programming
 */

var purchase = {
    shoes : 100,
    stateTax : 1.2,
    totalPrice : function () {
        return  this.shoes * this.stateTax
    }
}

console.log(purchase.totalPrice())

/**
 * classes
 * Constructor: The constructor is a special method for initializing new objects created from a class, allowing you to set properties at the time of instantiation.
 */

class Car {
    constructor(color,speed) {
        this.color = color
        this.speed = speed
    }

    // method --> we can not use keyword "function" here
    turboOn() {
        console.log('turboOn')
    }
}

let car1 = new Car('red','fast') // instance with new keyword
car1.turboOn()


/**
 * Polymorphism: The ability of different classes to be treated as instances of the same class through a common interface, allowing for method overriding.
 * Abstraction: The concept of simplifying complex systems by modeling classes based on essential characteristics while hiding unnecessary details.
 */

class Toyota extends Car{

    // *** When using a default or empty constructor method, JavaScript implicitly calls the Object superclass to create the instance
    // var toyota = Object.create(Toyota)

    constructor(motor,passengers,color,speed) {
        super(color,speed);
        this.motor = motor
        this.passengers = passengers
    }

    turboOn() {
        console.log('turboOn')
    }
}

/**
 * contact() method
 * "abc".concat("def"); // 'abcdef'
 * ["abc"].concat(["def"]); // ['abc', 'def']
 */

/**
 * String class
 * let apple = new String("apple");
 * apple; // --> String {"apple"}
 *
 * let pear = "pear";
 * pear; // --> "pear"
 */

/**
 * prototype : In JavaScript, the prototype is an object that can hold properties to be shared by multiple other objects.
 * The prototype is an object that can have properties to be shared by multiple other objects.
 * The prototype is an object from which other objects inherit properties and methods, allowing for shared functionality among instances of a class.
 */
var bird = {
   hasWings : true,
   canFly : true,
   hasFeature : true,
}
var eagle = Object.create(bird) // create object as prototype
console.log("eagle1 : " , eagle) // output : --> eagle1 : {}
console.log("eagle1 has wings: " , eagle.hasWings)
console.log("eagle1 can fly: " , eagle.canFly)
console.log("eagle1 has feature: " , eagle.hasFeature)

var penguin = Object.create(bird)
penguin.hasWings = false
console.log("penguin1 has wings: " , penguin) // output : --> penguin1 has wings:  { hasWings: false }

/**
 * default parameter in functions
 */
function noDefaultParameter(number) {
    return number * 2
}
console.log("noDefaultParameter: " , noDefaultParameter()) // output : -->noDefaultParameter:  NaN (not a number - no exception)

function withDefaultParameter(number = 2) {
    return number * 2
}
console.log("withDefaultParameter: " , withDefaultParameter()) // output : --> withDefaultParameter:  4
console.log("withDefaultParameter: " , withDefaultParameter(4)) // output : --> withDefaultParameter:  8

class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6