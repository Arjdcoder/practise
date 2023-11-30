import { useState } from "react";
const TableRow = () => {
    const initialListItems = [
        {
            id: 1,
            name: "First",
        }
    ];
    const [listItems, setListItems] = useState(initialListItems);
    const [id, setId] = useState(0);
    const inputRef = useRef();

    const handleEdit = () => {
        console.log("handle edit called");
    }

    const handleDelete = () => {
        console.log("Handle delete called");
    }

    
    return (
        <>
            {
                listItems.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td><button onClick={() => handleEdit}>Edit</button></td>
                            <td><button onClick={() => handleDelete}>Delete</button></td>
                        </tr>
                    )
                })
            }
        </>
    )
}
export default TableRow;