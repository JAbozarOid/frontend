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

for (prop of car) {
    console.log(prop) // output : --> Uncaught TypeError: car is not iterable
}

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
const car = {
    speed: 100,
    color: "blue"
};

for (let key in car) {

    console.log(key); // Output: speed, color

}
