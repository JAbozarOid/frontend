import {useState} from 'react'

// we can define a props for our component --> props is a keyword
const Counter = (props) => {

    console.log(props.onClick)

    const [counter, setCounter] = useState(props.counter);
    console.log("counter", counter);

    const handleIncrement = () => {
        setCounter((prevState) => prevState + 1)
    }

    const handleDecrement = () => {
        setCounter(prevState => prevState - 1)
    }

    return (<div>
        <button onClick={handleIncrement}>+</button>
        <div>{counter}</div>
        <button onClick={handleDecrement}>-</button>
    </div>);


}

export default Counter