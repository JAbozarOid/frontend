const products = [
    {
        id: "1",
        title: "Tiramisu",
        description: "the best tiramisu in town",
        image: "picsum.photos/200/300/?random",
        price: "$5.00"
    }, {
        id: "2",
        title: "Lemon ice cream",
        description: "lemon",
        image: "picsum.photos/200/300/?random",
        price: "$15.00"
    }, {
        id: "3",
        title: "Chocolate",
        description: "chocolate",
        image: "picsum.photos/200/300/?random",
        price: "$51.00"
    }, {
        id: "4",
        title: "Orange",
        description: "orange",
        image: "picsum.photos/200/300/?random",
        price: "$55.00"
    },
]

export default function Products() {
    const productItem = products.map((desserts,index) => {
        const productText = `${desserts.title} - ${desserts.price}`
        return <li>{productText}</li>
    })
    return (
        <div>
            <ul>
                {productItem}
            </ul>
        </div>
    )
}