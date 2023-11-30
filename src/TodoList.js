import { Action } from "history";
import { useState, useRef, useEffect, useCallback, useReducer } from "react";
import TodoRow from "./TodoRow";

const defaultTodoItems = [
    {
        id: 1,
        text: "Dummy Todo",
        completed: false
    },
]

const initialState = {
    id: 2,
    todoItems: defaultTodoItems,
    selectedTodo: 0
};


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            console.log("action", action.data.inputRef.current.value);
            console.log("state", state);
            state.todoItems.push({ id: 2, text: action.data.inputRef.current.value, completed: false });
            return state;
            // return [...state, { id: 2, text: action.data.inputRef.current.value, completed: false }]
        }
        case 'decrement': return { ...state, initialValue: state.initialValue - action.val }
        case 'reset': return initialState
        default: return state
    }
}

const TodoList = () => {
    const [id, setId] = useState(2);
    const localStorageData = JSON.parse(localStorage.getItem("todoListData"));
    const [todoItems, setTodoItems] = useState(defaultTodoItems);
    const [selectedTodo, setSelectedTodo] = useState(0);

    const [state, dispatch] = useReducer(reducer, initialState);


    const addTodo = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_ITEM", data: { inputRef } });
        // setId((id) => id + 1);
        // setTodoItems((items) => [...items, { id: id, text: inputRef.current.value, completed: false }], () => {
        // })
        // localStorage.setItem("todoListData", JSON.stringify([...todoItems, { id: id, text: inputRef.current.value, completed: false }]));
    }

    const editTodo = (id, text) => {
        console.log("edit running");
        inputRef.current.value = text;
        setSelectedTodo(id);
    }
    const updateTodo = (e) => {
        console.log("update running");
        e.preventDefault();
        let updatedList = todoItems.map((todo) => {
            if (todo.id == selectedTodo) {
                todo.text = inputRef.current.value;
                return todo;
            }
            else {
                return todo;
            }
        })
        setTodoItems(updatedList);
        // localStorage.setItem("todoListData", JSON.stringify([...updatedList]));
    }

    const deleteTodo = useCallback((id) => {
        console.log("delete running");
        let updatedTodo = todoItems.filter((item) => {
            if (item.id != id) {
                return item;
            }
        })
        setTodoItems(updatedTodo);
    });


    const inputRef = useRef();
    const selectedRef = useRef(0);

    // useEffect(() => {

    // }, [todoItems])

    console.log("recieved state", state);
    return (
        <div style={{ textAlign: "center" }}>
            <p>Welcome to To-do App</p>
            <form>
                <input type="text" ref={inputRef} />
                <button type="submit" onClick={addTodo}>+</button>
                <button onClick={updateTodo}>Update</button>
            </form>
            <div>
                {state.todoItems.map((todo) => {
                    return <TodoRow todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} key={todo.id} />
                })}
            </div>
        </div>
    )
}
export default TodoList;