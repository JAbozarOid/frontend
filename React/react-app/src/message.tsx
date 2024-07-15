// PascalCasing for function name
function Message() {
 
    const name = 'Abozar';
    if(name) // it means if the name is not empty 
        // jsx : JavaScript xml --> the syntax below
        return <h1>Hello {name}</h1>;
    return<h2>Hello World</h2>        
}

// use the above component like below
export default Message;