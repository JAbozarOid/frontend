import {useRef, useState} from "react";

export default function CalcComponent() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);
    const [inputValue, setInputValue] = useState("");

    const resetInput = (e) => {
        e.preventDefault()
        inputRef.current.value = 0;
    }
    const resetResult = (e) => {
        e.preventDefault()
        setResult((prev) => 0);

    }
    const plus = (e) => {
        e.preventDefault()
        setResult((result) => result + Number(inputRef.current.value));
    }
    const minus = (e) => {
        e.preventDefault()
        setResult((result) => result - Number(inputRef.current.value));
    }
    const times = (e) => {
        e.preventDefault()
        setResult((result) => result * Number(inputRef.current.value));
    }
    const divide = (e) => {
        e.preventDefault()
        setResult((result) => result / Number(inputRef.current.value));
    }


    return (
        <div className="App">
            <div>
                <h1>Simplest Working Calculator</h1>
            </div>
            <form>
                <p ref={resultRef}>
                    {result}
                </p>
                <input
                    pattern="[0-9]"
                    type="number"
                    ref={inputRef}
                    placeholder="Type a number"
                />
                <button onClick={plus}>add</button>
                <button onClick={minus}>subtract</button>
                <button onClick={times}>multiply</button>
                <button onClick={divide}>divide</button>
                <button onClick={resetInput}>reset input</button>
                <button onClick={resetResult}>reset result</button>
            </form>
        </div>
    );
}
