import React, {type JSX} from "react";

// assume we have different type of button, with background, disabled, without background, outlined
// we use factory pattern to build something like button we need
// so we create a factory type and pass it as props to our Button component to render each of buttons
// ? means nullable
// we should specify this type is a button as we had in html
type ButtonProps = {
    variant?: "contained" | "outlined" | "text"
} & React.PropsWithChildren & React.ButtonHTMLAttributes<HTMLButtonElement>


// hash table --> we can use with the key of that properties to that element (o1)
// {...props} --> spread operator --> everything inside of props use it
const ButtonFactory  = {
    contained: ({children, ...rest}) => (
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-3xl"{...rest}>{children}</button>),
    outlined: (props) => <button>outline</button>,
    text: (props) => <button>text</button>
}


// we destruct variant from ButtonProps
// we could use props and then use props.variant but destruct is more professional
// get the variant and rest of other things (...props) --> rest operator
export const Button: React.FC<ButtonProps> = ({variant = "contained", ...props}): JSX.Element => {

    return ButtonFactory[variant](props);
}

