import React, { useReducer } from "react";

const initialState = {
    initialValue: 0
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': return { ...state, initialValue: state.initialValue + action.val }
        case 'decrement': return { ...state, initialValue: state.initialValue - action.val }
        case 'reset': return initialState
        default: return state
    }
}

const CounterTwo = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            Count: {count.initialValue}
            <br />
            <button onClick={() => dispatch({ type: 'increment', val:1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', val:1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <br/>
            <button onClick={() => dispatch({ type: 'increment', val:5 })}>Increment by 5</button>
            <button onClick={() => dispatch({ type: 'decrement', val:5 })}>Decrement by 5</button>
        </div>
    )
}

export default CounterTwo;