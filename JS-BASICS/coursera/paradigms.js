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