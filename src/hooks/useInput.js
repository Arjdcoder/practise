import { useState } from "react";
const useInput = () => {
    const [value, setValue] = useState({});
    const handleChange = (e) => {
        e.preventDefault();
        setValue(value => ({ ...value, [e.target.name]: [e.target.value] }));
    }
    return [value, handleChange];
}
export default useInput;