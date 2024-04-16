import { MouseEvent } from "react"; //MouseEvent from "react";

function ListGroup() {

    let items = ["New York", "London", "Tokyo", "Paris"];
    // items = []

    // if (items.length === 0)
    //     return (<>
    //         <h1>LIST</h1>
    //         <p>No data</p>
    //     </>)
//event hedeler 
    const handelClick = (event : MouseEvent) => console.log(event)

    return (
        <>
            <h1>List Group</h1>
            {items.length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        key={item}
                        className="list-group-item"
                        onClick={handelClick}
                    >{item}


                    </li>))}
            </ul>
        </>
    )
}

export default ListGroup;
