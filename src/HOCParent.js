import TodosList from "./TodosList";
import UsersList from "./UsersList";
const HOCParent = () => {
    return (<>
        <h3>This is our HOC Parent Component</h3>
        <UsersList />
        <TodosList />
    </>)
}
export default HOCParent;