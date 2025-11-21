let sales: number = 123456789
let firstname: string = "Abozar"
let isActive: boolean = false
let digits: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let lastnames: string[] = ["raghibdoust", "shirin", "talae"]

// tupels : first element is id (number) and second element is name (string)  => ["12", "abozar"]
let person1: [number, string] = [12, "abozar"]
let person2: [number, string, boolean] = [13, "omid", true]

//enums
enum Size {
    Small = 0,
    Medium = 1,
    Large = "large"
}

enum Role {
    Admin = "Admin",
    Manager = "Manager",
    User = "User",
}

//functions in typescript
// we have default values in typescript with define type and javascript without type
function calculateTax(income: number, rate: number = 0.2): number {
    return income * rate
}

//objects in typescript
const employee1: { id: number, name: string, retire: (date: Date) => void } = {
    id: 1,
    name: "Abozar",

    retire(date: Date) {
        console.log(`${this.name} retired in ${date.getFullYear()}`)
    }
}
const employee2: Employee = {
    id: 2,
    name: "elham",

    retire(date: Date) {
        console.log(`${this.name} retired in ${date.getFullYear()}`)
    }
}
// employee 2 is similar to employee 1 --> it is better to define a "type with typealias"
type Employee = {
    id: number,
    name: string,
    retire: (date: Date) => void
}

//interface in typescript : interfaces use more in props
interface IntEmployee {
    id: number,
    name: string,
    retire: (date: Date) => void
}

// "Union" Type in typescript
// we want to define  a variable to accept both string and number
let weight : number | string = 0
weight = "a"
weight = 100

// "Union function"
function unionFunction(x : number | string) {
    console.log(x)
}

unionFunction(10)
unionFunction("10")

//union array
let arr : (number | string)[] = [1,"abozar"]

//literal types --> we need to limited the value for the specific type
let selectedColors : "blue" | "green" | "red" | "orange" | "yellow"
selectedColors = "blue"
// selectedColors = "black" --> we have error here because black is not defined as accepted value

//or
type SupportedColors = "blue" | "green" | "red" | "orange" | "yellow"
let secondSelectedColors : SupportedColors
secondSelectedColors = "orange"

console.log(sales, firstname, isActive, digits, lastnames, "persion1 : ", person1, "person 2 : ", person2, Size.Small, Size.Medium, Size.Large,
    "calculate tax with default value", calculateTax(10000),"\n",
    "calculate tax with 0.3", calculateTax(10000, 0.3),"\n",
    "employee 1 name is : ",`${employee1.name}`,"\n",
    "weight is", `${weight}`,"\n",
    "arr is", `${arr}`,"\n",
    "literal types", `${selectedColors}`,"\n",
    "literal types", `${secondSelectedColors}`,"\n",
    Role.Admin
)