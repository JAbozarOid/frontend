import {useRef} from "react";

const Form = () => {
    const inputRef = useRef(null);

    const handleSubmit = () => {
        const inputValue = inputRef.current.value;
        // Do something with the value
    }
    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" />
        </form>
    );
};