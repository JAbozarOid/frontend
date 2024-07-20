import { Fragment } from "react/jsx-runtime";
import { MouseEvent, useState } from "react";

let items = ["Paris", "London", "Manchester", "Milan", "Rome"];
//items = [];

const message = items.length === 0 ? <p>No Item Found</p> : null;

const getMessage = () => {
  return items.length === 0 ? <p>No Item Found</p> : null;
};

// event handler
// this is type annotation in type script --> event : MouseEvent --> should be imported
// telling the react calling the function handleClick is later at run time
const handleClick = (event: MouseEvent) => console.log(event);

// let selectedIndex = 0; // -1 means no item is selected , 0 means first item is selected
// *** we should inform to react that this component is going to have data or state that may change over time
// for this purpose we should use one of the built in funtion in react called useState
// useState Called hook, a hook is a function that allows us to tap in built in feature in react
// instead of using variable selectedIndex uses useState function

function ListGroup() {
  const [selectedIndex, setSelectedIndex] = useState(-1); // this function return an array
  // arr[0]; // variable (selectedIndex)
  // arr[1]; // updater function

  return (
    // *** instead of using div for having multiple elements we can use fragments in react
    // <div>
    //   <h1>List</h1>
    //   <ul className="list-group">
    // <li className="list-group-item">An item</li>
    // <li className="list-group-item">A second item</li>
    // <li className="list-group-item">A third item</li>
    // <li className="list-group-item">A fourth item</li>
    // <li className="list-group-item">And a fifth one</li>
    //   </ul>
    // </div>

    // *** with fragment tag
    // <Fragment>
    //   <h1>List</h1>
    //   <ul className="list-group">
    //     <li className="list-group-item">An item</li>
    //     <li className="list-group-item">A second item</li>
    //     <li className="list-group-item">A third item</li>
    //     <li className="list-group-item">A fourth item</li>
    //     <li className="list-group-item">And a fifth one</li>
    //   </ul>
    // </Fragment>

    // *** without fragment tags --> in this way doesn't need import in react
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Items Found</p>}
      {/* {getMessage()} */}

      <ul className="list-group">
        {/* the below is static item list */}
        {/* <li className="list-group-item">An item</li> */}
        {/* <li className="list-group-item">A second item</li> */}
        {/* <li className="list-group-item">A third item</li> */}
        {/* <li className="list-group-item">A fourth item</li> */}
        {/* <li className="list-group-item">And a fifth one</li> */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

// first export from this module and then import in the app module
export default ListGroup;
