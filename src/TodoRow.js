const TodoRow = ({ todo, editTodo, deleteTodo }) => {
    return (
        <p key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => editTodo(todo.id, todo.text)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </p>
    )
}
export default TodoRow;