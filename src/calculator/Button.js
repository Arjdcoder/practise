const Button = ({ label, handleChange }) => {

    return (
        <button className="col-3 btn btn-outline-dark" value={label} onClick={handleChange}>{label}</button>
    )
}
export default Button;