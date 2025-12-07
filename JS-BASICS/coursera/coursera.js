// var allows you to save a variable so that you can re-use it in future
var name = 'raghibdoust';
console.log(name);

/**
 * JavaScript data types
 * String - Number - Boolean - Null - Undefined - BigInt - Symbol
 * Undefined : a variable not yet assigned a value
 * BigInt : introduced in Ecm6+ ->
 * Symbol : used as unique identifier
 */

/**
 * difference between == and ===
 * for == check if both value are the same
 * for === check if both value are the same type
 */
var x = 100
var y = "100"
console.log(`the result for == is ${x == y}`)
console.log(`the result for === is ${x === y}`)

var z = 1
console.log(`the result for != is ${z!=1}`)
console.log(`the result for !== is ${z!=="1"}`)


function usingForLoop() {
    for (let i = 0; i < 10; i++) {
        console.log(`${i}`)
    }
}


function usingWhileLoop() {
    var i = 10;
    while (i < 0) {
        console.log(`${i}`)
    }
}

/**
 * array in javascript
 *  In JavaScript, strings can be treated similarly to arrays.
 *  You can access individual characters in a string using an index, just like you would with an array.
 *  Even though strings are not explicitly declared as arrays, they behave in a similar way when accessing their characters by index.
 */
var names = ['abozar','omid','shirin'];
console.log(`access the array element by index ${names[0]}`);

/**
 * objects in javascript : group of variables that are related to each other
 * An object is a collection of properties, where each property is defined as a key-value pair, allowing for the organization of related data.
 */
var storeManager = {
    movement : 10, // index 0
    socialSkills : 30, // index 1
    streetSmarts : 5, // index 2
    health : 1 // index 3
}
// value can be change
storeManager.movement = 5;
storeManager["socialSkills"] = 35 // another way to access a property inside of the object
console.log(storeManager);

// add function to the property of the object
storeManager.health = function addHealth() {
    console.log('show health');
}

var car = {}
car.engine = 'Benz'
car.price = 100
console.log('the car price is ' + car.price);

/**
 * array of objects
 * pop() method removes the last element from an array and returns that element, modifying the length of the array
 * The push() method adds one or more elements to the end of an array and returns the new length of the array.
 */
var fruits = []
fruits.push('apple')
fruits.push('orange')
console.log(fruits);
fruits.pop() // remove the item from the last index --> remove index 1
console.log(fruits);
fruits.pop() // remove the item from the last index --> remove index 0
console.log(fruits); // here the list is empty

/**
 * for loop over string
 */
var family = 'raghibdoust';
for (var i = 0; i < family.length; i++) {
    console.log(family[i]);
}
var name = 'abozar'
console.log(name + family)
console.log(name.concat(family))

/**
 * string methods
 * charAt(), concat(), indexOf(), lastIndexOf(), split(), toUpperCase(), toLowerCase()
 */

/**
 * typeOf : show the type of the property
 */

var test = typeof ("Abozar")
console.log('the type of test variable is ' + test);

/**
 * type of errors in javascript
 * reference error
 * type error
 * syntax error :  when you write a piece of code that JavaScript cannot read
 * RangeError
 */

/**
 * Error Handling : try - catch
 */
function errorHandler() {
    try{
        // reference error happened : a and b is not defined, if they were not in tyy-catch block javascript can not run
        console.log(a+b)
        "hello".pop() // type error
        (10).toString(2); // range error
    }catch (err) {
        console.log('there was a problem with an error')
        console.log(err.message);
        console.log(err.name)
        console.log(err.stack)
    }
}
errorHandler()

/**
 * type of empty values
 * null
 * undefined
 * empty strings
 */

/**
 *  when trying to run a method on a non-supported data type? type error
 */