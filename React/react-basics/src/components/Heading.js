// object in javascript
const fruits = {
    type: "fruit",
    quantity: "500",
    color: "green",
}

const headStyle = {
    padding: "20px",
    border: "1px solid gray",
    background: "#6f2727",
    margin: "20px 0"
}

// because we are using component, it should be capitalized
function Heading(props) {

    console.log(fruits.type);
    console.log(props)

    //1- define function
    const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

    //2- define function
    function getRandomNumber2() {
        return Math.floor(Math.random() * 10) + 1;
    }

    //3- define function
    const getRandomNumber3 = function () {
        return Math.floor(Math.random() * 10) + 1;
    }
    return (
        <div style={headStyle}>
            <h1> Hello there indeed, Firstname : {props.firstname} and Lastname : {props.lastname}</h1>
            <h2>{Math.random() >= 0.5 ? "over 0.5" : "under 0.5"} {props.children} a randon number from 0 to 10
                is {getRandomNumber()}</h2>
            <h3>get random number 2 {getRandomNumber2()}</h3>
            <h3>get random number 3 {getRandomNumber3()}</h3>
        </div>
    )
}

export default Heading;