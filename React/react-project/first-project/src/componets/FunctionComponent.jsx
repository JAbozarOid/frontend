// declaration function --> this is preferred

// this function will be compiled to React
import React from "react";

const FunctionComponent = () => {
  return (
      <div>Hello world</div>

      // jsx at compile time convert this <div>Hello world</div> to React compiler at first, was like below
      //return React.createElement("div",null,React.createElement("div",null,"Hello World 2"))
  )
}

export default FunctionComponent

//expression function
/*export default function Counter2() {
    return (
        <div>Hello world</div>
    )
}*/
