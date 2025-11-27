function Button(props) {

    // *** for using this function you should invoke it
    const clickHandler = () => {
        console.log("call by invoke");
    };

    // for using this function you should call by reference not invoke it
    function callByRef() {
        console.log("call by ref");
    }

    return (
        <div>
            <button onClick={() => {
                clickHandler()
            }}>Call by invoke
            </button>
            <button onClick={function () {
                console.log("call by invoke 2")
            }}>another call by invoke
            </button>
            <button onClick={() => {
                console.log("call by invoke 3")
            }}>another call by invoke 2
            </button>
            <button onClick={callByRef}> Call by Reference without invoke</button>
        </div>
    )
}

export default Button