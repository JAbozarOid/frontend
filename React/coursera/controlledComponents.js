/**
 * Controlled components are a set of components that offer a declarative application programming interface or API
 * to enable full control of the state of form elements at any point in time using React state.
 */

/**
 * Rather than relying on the native state from DOM elements,
 * the React state is made the single source of truth, controlling the displayed value of your form elements at all times.
 * The way you perform this state delegation is via the value prop.
 * Value is a special property, the React added to most of the form elements to determine the input content at any point in time during the render life cycle.
 * In order to create a controlled component, you need to use a combination of local state and the value prop
 */
import {useState} from "react";
const Form = () => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <form>
            <input
                value={value}
                onChange={handleChange}
                type="text"
            />
        </form>
    );
};