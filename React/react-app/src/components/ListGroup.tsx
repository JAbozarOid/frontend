import { Fragment } from "react/jsx-runtime";

let items = ["Paris", "London", "Manchester", "Milan", "Rome"];
items = [];

const message = items.length === 0 ? <p>No Item Found</p> : null;

const getMessage = () => {
  return items.length === 0 ? <p>No Item Found</p> : null;
};

function ListGroup() {
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
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

// first export from this module and then import in the app module
export default ListGroup;
