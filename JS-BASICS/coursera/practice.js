const dishData = [
    { name: "Italian pasta", price: 9.55 },
    { name: "Rice with veggies", price: 8.65 },
    { name: "Chicken with potatoes", price: 15.55 },
    { name: "Vegetarian Pizza", price: 6.45 },
];

const tax = 1.20;

function getPrices(taxBoolean) {
    for (let i = 0; i < dishData.length; i++) {
        let finalPrice;

        if (taxBoolean === true) {
            finalPrice = dishData[i].price * tax;
        } else if (taxBoolean === false) {
            finalPrice = dishData[i].price;
        } else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }

        // Single line output - exactly as expected by the tests
        console.log(
            "Dish: " + dishData[i].name + " Price: $" + finalPrice.toFixed(2)
        );
    }
}

function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);

    if (typeof guests === "number" && guests > 0 && guests < 30) {
        let discount = 0;

        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }

        // No extra newline before discount message
        console.log("Discount is: $" + discount);
    } else {
        console.log("The second argument must be a number between 0 and 30");
    }
}

// ───────────────────────────────────────────────
// Test calls (you can run these in console)
// ───────────────────────────────────────────────

// Valid calls
getDiscount(true, 2);      // Shows prices with tax + $5 discount
console.log("───────────────");
getDiscount(false, 10);    // Shows prices without tax + $10 discount
console.log("───────────────");

// Edge / invalid cases
getDiscount(true);         // missing guests → shows error message
console.log("───────────────");
getDiscount(true, -3);     // invalid guests → error message
console.log("───────────────");
getDiscount(true, 35);     // too many guests → error message
console.log("───────────────");
getDiscount("true", 8);    // wrong type for taxBoolean
console.log("───────────────");
getDiscount();             // no arguments at all

var x = 0 !== 1;

var result;
console.log(`the RESULT IS ${result}`);
result = 7;

function addTwo(a,b) { return a }
console.log(addTwo(5,10))


class Game {
    points;
    constructor(score) {this.score = this.points; }
    getPoints() { return this.score; }
}
class Bonus extends Game {
    constructor() { super(2);}
    getpoints() { return super.getPoints() * 5; }
}
var result = new Bonus();
console.log(`the Game Class :  ${result.getPoints()}`);

class Animal { }
class Cat extends Animal {
    constructor() {
        super();
        this.noise = "meow"; }
    makeNoise() { return this.noise; }
}
class Tiger extends Cat {
    constructor() { super(); this.noise = "growl"; }
}
var result = new Tiger();
console.log(` the Animal : ${result.makeNoise()}`);

function count(...food)
{ console.log(food.length) }
count("Burgers", "Fries", null);

