import { useContext } from "react";
import { CountContext } from "../ContextExample";
const ComponentD = () => {
    const countContext = useContext(CountContext);
    return (
        <div>
            <br />
            Welcome to Component D
            <br />
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}
export default ComponentD;