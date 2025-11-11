// comment --> javascript is for behavior while html is showing for content
console.log("hello world");

// *** declare variable : value can change
// js is case-sensitive
let username = 'jabozaroid';
console.log(username);

let firstName = 'abozar', lastName = "raghibdoust";

// *** constants : value can not change
// we can not reasign a value to constant
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

const rate = 1;
//rate = 2; // there will be compile error here
console.log(rate);

// two types of value types in js
// 1- primitive : String/Number/Boolean/Udefined/null
// 2- reference types : object/Array/Function

//undefined as below
let nationalCode;

// null as below
let phoneNumber = null;

// *** js is a dynamic typed language ***
// which means the type of variable can change at runtime

// object type : key and value pairs
let person = {
    fname: 'Abozar', age: 30
};
// access to object property
// 1- dot notation
person.age = 31;
// 2- bracket notation
//person[fname] = 'x';


// array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green' // put at the index 2 the green value
selectedColors[3] = 1 // strings and number
console.log(selectedColors);

// function
function greet() {
    console.log('hi');
}

// call the function
greet();

function square(digits) {
    return digits * digits;
}
