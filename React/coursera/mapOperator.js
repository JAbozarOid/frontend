/**
 * use map() : transform data
 *
 * The map() method is useful for handling third party data.
 * The map() method is a transformation operation.
 * The map() method returns a new array.
 */

const data = [
    {
        id: "1",
        title: "Tiramisu",
        description: "the best tiramisu in town",
        image: "",
        price: "$51.00"
    }, {
        id: "2",
        title: "Lemon ice cream",
        description: "lemon",
        image: "",
        price: "$156.00"
    }, {
        id: "3",
        title: "Chocolate",
        description: "chocolate",
        image: "",
        price: "$51.00"
    }, {
        id: "4",
        title: "Orange",
        description: "orange",
        image: "",
        price: "$55.00"
    },
]

// return of array
const topDesserts = data.map(desserts => {
    return {
        content: `${desserts.title} - ${desserts.description}`,
        price: `${desserts.price}`,
    }
})

// return of array
const filterDesserts = data.filter(desserts => {
    return desserts.price >= "$50.00"
})

const sortDesserts = data.sort((a, b) => {
    return a.price - b.price
})

console.log('map data is : ' , topDesserts)
console.log('filter data is : ' , filterDesserts)
console.log('sort data is : ' ,sortDesserts)