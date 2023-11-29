import { useState, useRef, useReducer } from "react";
import { StyledDiv } from "../style/StyledDiv.styled";
import TableRow from "./TableRow";
const TableExample = () => {
    const inputRef = useRef();

    const initialState = {
        listItems: []
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD_ITEM":
        }
    }
    const handleAdd = () => {
        console.log("Inside handle add");
    }
    const [state, dispatch] = useReducer(initialState, reducer);
    return (
        <div>
            List Items
            <br />
            <br />
            <table border={2}>
                <tr>
                    <th>Name</th>
                    <th>Edit Action</th>
                    <th>Delete Action</th>
                </tr>
                <TableRow />
            </table>
            <br />
            Enter Item Name: <input type="text" ref={inputRef} />
            <button onClick={handleAdd}>Add new item</button>
        </div>

    )
}
// 6202006784
export default TableExample;