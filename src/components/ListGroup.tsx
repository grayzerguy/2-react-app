//import { MouseEvent } from "react"; //MouseEvent from "react";
interface Props {
    items: string[],
    heading: string
    onSelectItem: (item: string) => void

}
import { useState } from "react";

function ListGroup({ items, heading, onSelectItem }: Props) {

    const [selectedIndex, setSelectedIndex] = useState(-1)
    //items = []
    // if (items.length === 0)
    //     return (<>
    //         <h1>LIST</h1>
    //         <p>No item found</p>
    //     </>)
    //const handelClick = (event:MouseEvent) => console.log(event)
    return (
        <>
            <h1>{heading}</h1>

            {items.length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li

                        className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index)
                            onSelectItem(item)
                        }
                        }
                    >{item}
                    </li>))}
            </ul>
        </>
    )
}

export default ListGroup;
