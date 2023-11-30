import { useEffect, useState } from "react";
import hOCList from "./HOCList";

const TodosList = ({ data: todos, searchTerm }) => {
    const fetchedResult = todos.slice(0, 10).filter(({ title }) => {
        return title.indexOf(searchTerm) >= 0;
    }).map((item) => {
        return (<p key={item.id}>{item.title}</p>)
    })
    return (
        <div>
            <h3>TodosList</h3>
            <div>{fetchedResult}</div>
        </div>
    )
}
export default hOCList(TodosList, 'todos');