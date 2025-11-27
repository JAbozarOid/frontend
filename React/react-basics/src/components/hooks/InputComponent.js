// this component show the practical uses of hooks like useState function
import {useState} from "react";

export default function InputComponent() {

    const [inputText, setInputText] = useState('hello');

    function handleChange(event) {
        setInputText(event.target.value);
    }

    // another way of writing function
    //handleChange = (event) => {setInputText(event.target.value);};

    return (
        <>
            <input value={inputText} onChange={handleChange}/>
            <p>you typed : {inputText}</p>
            <button onClick={() => {
                setInputText('hello')
            }}>Reset
            </button>
        </>

    )

}