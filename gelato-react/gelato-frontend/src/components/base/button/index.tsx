import React, {type JSX} from "react";

// assume we have different type of button, with background, disabled, without background, outlined
// we use factory pattern to build something like button we need
// so we create a factory type and pass it as props to our Button component to render each of buttons
// ? means nullable
type ButtonProps = {
    variant?: "contained" | "outlined" | "text"
} & React.PropsWithChildren

// hash table --> we can use with the key of that properties to that element (o1)
const ButtonFactory = {
    contained: () => (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">container</button>),
    outlined: () => (<button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">outlined</button>),
    text: () => (<button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">text</button>)
}


// we destruct variant from ButtonProps
// we could use props and then use props.variant but destruct is more professional
export const Button: React.FC<ButtonProps> = ({variant = "contained"}): JSX.Element => {

    return ButtonFactory[variant]();
}

