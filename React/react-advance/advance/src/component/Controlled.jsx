/**
 * convert the uncontrolled form below to controlled component with useState
 */ import {useState} from "react";

export default function Controlled() {
    const [name,setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault(); // no refresh happened on the page
        setName('')
        console.log('form submitted');
    }
    return (
        <div className="controlled">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="field">
                        <label htmlFor="name">Name : </label>
                        <input id={name} type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <button disabled={!name} type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}