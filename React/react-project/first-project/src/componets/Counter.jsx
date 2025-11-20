import {useEffectEvent, useRef, useState} from 'react'

// we can define a props for our component --> props is a keyword
const Counter = (props) => {

    console.log(props.onClick)

    const ref = useRef(null);
    console.log(ref.current)

    // conditional rendering
    const [isEnable, setIsEnable] = useState(false);

    const [counter, setCounter] = useState(props.counter);
    console.log("counter", counter);



    const handleIncrement = () => {
        setCounter((prevState) => prevState + 1)
    }

    const handleDecrement = () => {
        setCounter(prevState => prevState - 1)
    }

    const handleToggle = () => {
        setIsEnable(!isEnable);
    }

    useEffectEvent(() => {
        console.log("ABBBBBBBBBBBBBBBBB")
    }, []) // [] mean with empty dependency -> specially uses for apiCall -> **** always put [] ****

    return (<div>
        <button ref={ref} onClick={handleIncrement}>+</button>
        <div>{counter}</div>
        <button onClick={handleDecrement}>-</button>

        <button onClick={handleToggle}>
            <div>{isEnable ? <p>show</p> : <p>not show</p>}</div>
        </button>
    </div>);


}

export default Counter