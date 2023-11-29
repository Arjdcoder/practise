import HOCList from "./HOCList";

const UsersList = ({ data: users, searchTerm }) => {
    const fetchedResult = users.filter(({ name }) => {
        return name.indexOf(searchTerm) >= 0;
    }).map((item) => {
        return (<p key={item.id}>{item.name}</p>)
    })
    return (
        <div>
            <h3>UsersList</h3>
            <div>{fetchedResult}</div>
        </div>
    )
}
export default HOCList(UsersList, 'users');