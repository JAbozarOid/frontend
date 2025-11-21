var sales = 123456789;
var firstname = "Abozar";
var isActive = false;
var digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var lastnames = ["raghibdoust", "shirin", "talae"];
// tupels : first element is id (number) and second element is name (string)  => ["12", "abozar"]
var person1 = [12, "abozar"];
var person2 = [13, "omid", true];
//enums
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size["Large"] = "large";
})(Size || (Size = {}));
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["Manager"] = "Manager";
    Role["User"] = "User";
})(Role || (Role = {}));
//functions in typescript
// we have default values in typescript with define type and javascript without type
function calculateTax(income, rate) {
    if (rate === void 0) { rate = 0.2; }
    return income * rate;
}
//objects in typescript
var employee1 = {
    id: 1,
    name: "Abozar",
    retire: function (date) {
        console.log("".concat(this.name, " retired in ").concat(date.getFullYear()));
    }
};
var employee2 = {
    id: 2,
    name: "elham",
    retire: function (date) {
        console.log("".concat(this.name, " retired in ").concat(date.getFullYear()));
    }
};
// "Union" Type in typescript
// we want to define  a variable to accept both string and number
var weight = 0;
weight = "a";
weight = 100;
// "Union function"
function unionFunction(x) {
    console.log(x);
}
unionFunction(10);
unionFunction("10");
//union array
var arr = [1, "abozar"];
//literal types --> we need to limited the value for the specific type
var selectedColors;
selectedColors = "blue";
var secondSelectedColors;
secondSelectedColors = "orange";
console.log(sales, firstname, isActive, digits, lastnames, "persion1 : ", person1, "person 2 : ", person2, Size.Small, Size.Medium, Size.Large, "calculate tax with default value", calculateTax(10000), "\n", "calculate tax with 0.3", calculateTax(10000, 0.3), "\n", "employee 1 name is : ", "".concat(employee1.name), "\n", "weight is", "".concat(weight), "\n", "arr is", "".concat(arr), "\n", "literal types", "".concat(selectedColors), "\n", "literal types", "".concat(secondSelectedColors), "\n", Role.Admin);
