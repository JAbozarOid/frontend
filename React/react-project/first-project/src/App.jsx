import FunctionComponent from "./componets/FunctionComponent.jsx";
import CounterClass from "./componets/ClassComponent.jsx";
import Counter from "./componets/Counter.jsx";
import {useEffectEvent, useState} from "react";

const people = ["abozar", "elham", "hamid"]

const App = () => {

    const [state, setState] = useState(people)
    const [form, setForm] = useState("")

    const handleIncrement = () => {


        // shadow copy
        const copyState = [...state] // create a new reference from state : we always create a copy from state

        // act
        copyState.push(form)

        //update
        setState(copyState)

        //empty form state
        setForm("")

        console.log(copyState)
    }

    const handleChange = (e) => {
        setForm(e.target.value)
    }

    const handleRemove = (e) => {
        // copy state
        const copyState = [...state]

        // find element
        const newState = copyState.filter(x => x !== e) // filter return an array

        console.log(newState)

        setState(newState)
    }



    return (
        // <FunctionComponent/>
        // <CounterClass/>
        <div>
            {/*<Counter isActive = {true} onClick = {() =>{}} name={"Abozar"} counter = {0} />*/}
            <Counter/>
            {/*<Counter/>*/}
            {/*<Counter/>*/}

            <ul>
                <input name="person" value={form} onChange={handleChange}/>
                <button onClick={() => handleIncrement()}>Increment</button>
                {state.map((item) =>
                    (<li key={item} onClick={() => handleRemove(item)}>{item}</li>))}
            </ul>
        </div>

    );
}

export default App
