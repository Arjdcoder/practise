import withFetch from "./withFetch";

const MoviesList = ({ movies }) => {
    return (
        <div>
            <h3>List of Movies Rendered by HOC</h3>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index} style={{ display: "inline-block", margin: "30px" }}>
                        <img src={movie.poster} alt={movie.title} style={{ width: "200px", height:"300px" }} />
                        <br />
                        <span>{movie.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default withFetch(MoviesList);