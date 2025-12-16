/**
 * de-structuring arrays and objects : to extract new variables from objects and arrays.
 * is like copying that item from your folder on to another location.
 */

/**
 * for...in loop: The for...in loop iterates over the keys of an object, allowing access to the property names rather than the values.
 * for...of loop: The for...of loop is used to iterate over iterable objects like arrays, strings, sets, and maps, allowing for cleaner and more readable code.
 */

const car = {
    speed: 100,
    color: "blue"
}

/*for (prop of car) {
    console.log(prop) // output : --> Uncaught TypeError: car is not iterable
}*/

const colors = ['red', 'orange', 'yellow']
for (var color of colors) {
    console.log(color); // output : --> red, orange, yellow
}

/**
 * The Object.keys() method
 */
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']

/**
 * The Object.values() method
 */
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

/**
 * The Object.entries() method
 */
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)); // output : --> [ ['speed', 400], ['color', 'magenta'] ]

/**
 * loop over any object's own property keys and values
 */
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for (const key of Object.keys(clothingItem)) {
    console.log(key, ":", clothingItem[key])
}

/**
 * The for...in loop iterates over the keys (or property names) of an object. It’s used to loop through the properties of an object, not the values.
 */
const car5 = {
    speed: 100,
    color: "blue"
};

for (let key in car5) {

    console.log(key); // Output: speed, color

}

/**
 * Up until ES6, the only way to build strings in JavaScript was to delimit them in either single quotes or double quotes:
 * 'Hello, World!'
 * "Hello, World!"
 * Alongside the previous ways to build strings, ES6 introduced the use of backtick characters as delimiters:
 * `Hello, World!`
 */

/**
 * variable interpolation :
 */
let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`) //display both variables using template literals

console.log(greet + " " + place + "!"); //display both variables without using template literals

let multiLine = `
        Using ES6
        backticks,
        multi-line
        strings are 
        possible
        
`
console.log(multiLine);

/**
 * data structure in javascript
 * object , array , map , set
 * Maps are made up of iterable key value pairs.
 */

// forEach on array
const fruits = ['kiwi', 'mango', 'apple', 'pear'];

function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}

fruits.forEach(appendIndex); // 0. kiwi 1. mango 2. apple 3. pear

// filter on array
const nums = [0, 10, 20, 30, 40, 50];
const result = nums.filter(function (num) {
    return num > 20;
})
console.log(`filter on array is: ${result}`);

// map on array
const mapRes = [0, 10, 20, 30, 40, 50].map(function (num) {
    return num / 10
})
console.log(`map result is: ${mapRes}`);

//map
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");
console.log(bestBoxers);

// set
const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(`the set unique are: ${uniqueFruits}`);

/**
 * Spread operator : tool used to spread array items and join objects together --> three sots ...
 *  The spread operator will include all of the array elements with much less code.
 *  The spread operator expands arrays, objects, or strings into individual elements or properties, facilitating concatenation, copying, or passing arguments.
 *  Used for concatenation, copying, or passing arguments.
 *  Add new members to arrays without using the push() method
 *  Convert a string to an array using the spread operator
 *  Copy either an object or an array into a separate one
 */
let top3 = ['the colosseum', 'trevi fountain', 'the vatican city']
let top7 = top3

function showItinerary(place1, place2, place3) {
    console.log('visit ' + place1);
    console.log('then visit ' + place2);
    console.log('finish with a visit to ' + place3);
}

showItinerary(top3[0], top3[1], top3[2]);
showItinerary(...top7)

const fruitss = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruitss, ...berries]; // concatenate
console.log(fruitsAndBerries); // outputs a single array ['apple', 'pear', 'plum', 'blueberry', 'strawberry'];

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

const cars1 = {
    speed: 200,
    color: 'yellow'
}
const cars2 = {...cars1};

cars1.speed = 201;

console.log(cars1.speed, cars2.speed); // The output is 201, 200.

/**
 * Rest operator :  The rest operator can be used to destructure existing array items, rather than typing them out again.
 *  The rest operator gathers multiple elements into a single array or object, useful in destructuring or collecting function arguments.
 *  Used in destructuring or collecting function arguments.
 */
const top8 = ['the colosseum', 'the roman forum', 'the vatican', 'trevi fountain', 'the pantheon', 'piazza venezia', 'the palatine hill'];
const [] = top8
const [firsst,second,third, ...secondVisit] = top8
console.log(`the lenght of the top8 is: ${top8.length}`);

// use rest operator in function
function addTaxToPrice(taxRate,...itemsBought) {
    return itemsBought.map(item => taxRate * item)
}
let shoppingCart =addTaxToPrice(1.1,46,89,35,79);
console.log(`the shopping cart is: ${shoppingCart}`);

const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]

/**
 * Shallow Copy: A shallow copy duplicates the top-level properties of an object or array, meaning nested objects or arrays are still referenced rather than duplicated.
 */

/**
 * Modules
 *  Modules were added to JavaScript in version ES6 and allow for code to be imported, reused and more easily replaced.
 *  Modules were added to JavaScript in version ES6.
 *  To use an ES6 module in a browser, the script's type attribute must be set to “module”.
 */

/**
 * DOM : Document Object Model : the framework a browser uses to read and store a webpage
 * html file is mapped out like a tree structure with nested objects for different parts of the page
 * a browser builds a DOM, or model for every webpage it downloads as javascript object
 * One of the most powerful features of JavaScript is dom manipulation. For example, you can click on a button and change the color of some text or even display a pop up message
 * JavaScript DOM selectors : querySelector(), querySelectorAll(), getElementById(), getElementsByClassName()
 * DOM manipulation: DOM manipulation refers to the process of dynamically changing the document structure, style, or content using JavaScript, allowing for interactive web pages.
 */

/**
 * JSON
 * Parsing JSON: Parsing JSON involves converting a JSON string into a JavaScript object, allowing developers to access and manipulate the data within their applications.
 * Data Types in JSON: JSON supports a limited set of data types, including strings, numbers, booleans, null, objects, and arrays, but does not support functions or BigInt.
 * Comparison with XML: JSON is often preferred over XML due to its simpler syntax and ease of use with JavaScript, making it more efficient for data interchange.
 * JSON: JSON stands for JavaScript Object Notation, a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.
 * When working with JSON it is common to convert it back to a JavaScript object to work with its properties. To do this you need to use the global built-in JSON object and its parse method.
 */
const currencyInfo = {
    USD: {
        // ...
    },
    GBP: {
        // ...
    },
    EUR: {
        // ...
    }
};

const jsonStr = '{"greeting":"hello"}'
console.log(JSON.parse(jsonStr)); // output : { greeting: 'hello' } --> string

const data = {
    firstname :'abozar',
    lastname :'ragib',
    greeting : 'hello'
}

console.log(JSON.stringify(data)) // output :{"firstname":"abozar","lastname":"ragib","greeting":"hello"}

/**
 *  <script type="text/javascript">
 *         //Comment
 *     </script>
 *  type="text/javascript"  is the implicit value of the  script  tag when it is omitted.
 *
 *  console.log(document); --> The  document  object holds the entire structure of the active webpage in the browser's memory.
 *
 *  document.getElementById('main-heading') --> The first element with the attribute  document.getElementById('main-heading') is returned
 */