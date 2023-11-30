import React, { useReducer } from "react";
import ComponentA from './context-child/ComponentA';
import ComponentB from './context-child/ComponentB';
import ComponentC from './context-child/ComponentC';

export const CountContext = React.createContext();
const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment': return state + 1
        case 'decrement': return state - 1
        case 'reset': return initialState
        default: return state
    }
}
const ContextExample = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <CountContext.Provider value={{ countState: state, countDispatch: dispatch }}>
            <div>
                <h3>Context API Example</h3>
                Count: {state}
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </div>
        </CountContext.Provider>
    )
}
export default ContextExample;